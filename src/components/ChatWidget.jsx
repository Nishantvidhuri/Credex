import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ChatWidget({ darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! 👋 I'm your SoftSell assistant. How can I help you today?", 
      sender: 'bot' 
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  const openAIKey = import.meta.env.VITE_OPENAI_API_KEY;
  const geminiAPIKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  console.log(openAIKey, geminiAPIKey); // This should now log real keys
  
  // Use Gemini API instead of OpenAI
  const useGeminiAPI = true;

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Gemini API implementation
  const sendMessageToGemini = async (messageText) => {
    setIsLoading(true);
    try {
      // For development: use this mock response to avoid rate limits
      // return new Promise(resolve => 
      //   setTimeout(() => resolve("Here's a mock response to keep testing smoothly."), 1000)
      // );

      // Convert previous messages to context
      const previousMessages = messages
        .map(msg => msg.text)
        .join("\n\n");
      
      const systemPrompt = "You are a helpful customer service assistant for SoftSell, a software license resale platform. Provide concise, friendly answers about how the platform works, the software licenses we accept, our security measures, and payment processes. Keep responses under 100 words and focus on being helpful.";
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiAPIKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: `${systemPrompt}\n\nPrevious conversation:\n${previousMessages}\n\nUser: ${messageText}\n\nAssistant:` }
            ]
          }]
        })
      });

      if (!response.ok) {
        if (response.status === 429) {
          return "Too many requests. Please wait a moment and try again.";
        }
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text.trim();
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later or contact our support team directly at support@softsell.in";
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessageToOpenAI = async (messageText) => {
    setIsLoading(true);
    try {
      // For development: use this mock response to avoid rate limits
      // return new Promise(resolve => 
      //   setTimeout(() => resolve("Here's a mock response to keep testing smoothly."), 1000)
      // );
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openAIKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful customer service assistant for SoftSell, a software license resale platform. Provide concise, friendly answers about how the platform works, the software licenses we accept, our security measures, and payment processes. Keep responses under 100 words and focus on being helpful.'
            },
            ...messages.map(msg => ({
              role: msg.sender === 'bot' ? 'assistant' : 'user',
              content: msg.text
            })),
            {
              role: 'user',
              content: messageText
            }
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      if (response.status === 429) {
        return "Too many requests. Please wait a moment and try again.";
      }

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later or contact our support team directly at support@softsell.in";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim() || isLoading) return;
    
    // Add user message
    const userMessage = { id: messages.length + 1, text: newMessage, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setNewMessage('');
    
    // Add typing indicator
    setIsLoading(true);
    
    // Throttle by adding delay before next request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get response from selected API
    const botResponse = useGeminiAPI 
      ? await sendMessageToGemini(newMessage)
      : await sendMessageToOpenAI(newMessage);
    
    // Add bot response
    const botMessageObj = { id: messages.length + 2, text: botResponse, sender: 'bot' };
    setMessages(prevMessages => [...prevMessages, botMessageObj]);
    setIsLoading(false);
  };

  return (
    <div className="chat-widget fixed bottom-0 right-0 z-40 max-w-full">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-3 sm:right-5 md:right-10 bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-[calc(100%-24px)] sm:w-full sm:max-w-sm overflow-hidden border border-gray-200 dark:border-gray-700 z-50"
          >
            {/* Chat header */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12.2H15" stroke="#3B82F6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 16.2H12.38" stroke="#3B82F6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke="#3B82F6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke="#3B82F6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">SoftSell Assistant</p>
                  <p className="text-xs text-blue-100">Powered by OpenAI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Chat messages */}
            <div className="p-4 h-80 overflow-y-auto custom-scrollbar">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`px-4 py-3 rounded-lg max-w-[80%] ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 flex items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-pulse" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-pulse" style={{ animationDelay: "300ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-pulse" style={{ animationDelay: "600ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-700 p-4 flex items-center">
              <input
                id="chat-input"
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white disabled:opacity-50"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Chat button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 md:right-10 bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors z-50"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}

export default ChatWidget; 