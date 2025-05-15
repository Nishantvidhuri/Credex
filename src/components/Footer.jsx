import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-light-900 dark:bg-dark-900 text-light-900 dark:text-dark-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline dark:hidden">
                  <rect width="32" height="32" rx="8" fill="#0ea5e9" />
                  <path 
                    d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24" 
                    stroke="#111827" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M16 24L10 19M10 19V24M10 19H15" 
                    stroke="#111827" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden dark:inline">
                  <rect width="32" height="32" rx="8" fill="#38bdf8" />
                  <path 
                    d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24" 
                    stroke="white" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M16 24L10 19M10 19V24M10 19H15" 
                    stroke="white" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-light-900 dark:text-dark-100">SoftSell</span>
            </div>
            <p className="text-light-600 dark:text-dark-300 mb-4">
              Maximizing the value of your unused software licenses through our secure marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-900 dark:text-dark-100">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">Careers</a></li>
              <li><a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">Press</a></li>
              <li><a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">Blog</a></li>
              <li><a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-900 dark:text-dark-100">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">License Valuation</a></li>
              <li><a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">Compliance Check</a></li>
              <li><a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">Enterprise Solutions</a></li>
              <li><a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors">Partner Program</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-900 dark:text-dark-100">Subscribe</h3>
            <p className="text-light-600 dark:text-dark-300 mb-4">Stay up to date with our latest news and products.</p>
            <form className="flex flex-col border  border-2 border-purple-500 rounded-lg sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-lg sm:rounded-r-none sm:rounded-l-lg w-full bg-light-100 dark:bg-dark-700 border-light-300 dark:border-dark-600 text-purple-500 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-primary-500 mb-2 sm:mb-0"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 dark:bg-primary-500 text-white px-4 py-2 rounded-lg sm:rounded-l-none sm:rounded-r-lg font-medium hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="purple">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-light-800 dark:border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light-600 dark:text-dark-300 text-sm mb-4 md:mb-0">
              © {currentYear} SoftSell. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-light-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-300 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 