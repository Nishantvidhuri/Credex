import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was seamless and the payout was faster than expected.",
      name: "Sarah Johnson",
      title: "IT Director",
      company: "Nexus Technologies",
      avatar: "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3crect width='100' height='100' rx='50' fill='%230ea5e9'/%3e%3ctext x='50' y='50' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='50' fill='white'%3eSJ%3c/text%3e%3c/svg%3e"
    },
    {
      id: 2,
      quote: "After downsizing our operations, we had numerous unused licenses. SoftSell provided a straightforward marketplace to recoup some of our investment with minimal hassle.",
      name: "Michael Chen",
      title: "CTO",
      company: "Quantum Solutions",
      avatar: "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3crect width='100' height='100' rx='50' fill='%237dd3fc'/%3e%3ctext x='50' y='50' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='50' fill='white'%3eMC%3c/text%3e%3c/svg%3e"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-light-bg dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-light-900 dark:text-dark-text mb-4"
          >
            What Our <span className="text-primary-600 dark:text-primary-300">Clients Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-light-700 dark:text-dark-200 max-w-2xl mx-auto"
          >
            Discover how SoftSell has helped businesses like yours recover value from unused software licenses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-light-100 dark:bg-dark-surface rounded-xl p-8 shadow-md relative"
            >
              {/* Quote marks */}
              <div className="absolute top-6 right-8 text-primary-200 dark:text-primary-500/30">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 8H8.5C7.4 8 6.5 8.9 6.5 10V17C6.5 18.1 7.4 19 8.5 19H13.5C14.6 19 15.5 19.9 15.5 21V22C15.5 24.2 13.7 26 11.5 26H10.5C9.4 26 8.5 26.9 8.5 28C8.5 29.1 9.4 30 10.5 30H11.5C15.9 30 19.5 26.4 19.5 22V10C19.5 8.9 18.6 8 17.5 8H15.5ZM31.5 8H24.5C23.4 8 22.5 8.9 22.5 10V17C22.5 18.1 23.4 19 24.5 19H29.5C30.6 19 31.5 19.9 31.5 21V22C31.5 24.2 29.7 26 27.5 26H26.5C25.4 26 24.5 26.9 24.5 28C24.5 29.1 25.4 30 26.5 30H27.5C31.9 30 35.5 26.4 35.5 22V10C35.5 8.9 34.6 8 33.5 8H31.5Z" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="mb-6">
                <p className="text-light-700 dark:text-dark-200 italic mb-6 relative z-10">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-light-900 dark:text-dark-100">{testimonial.name}</p>
                    <p className="text-light-600 dark:text-dark-300 text-sm">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center text-primary-600 dark:text-primary-300 hover:text-primary-700 dark:hover:text-primary-200 font-medium"
          >
            <span>Become our next success story</span>
            <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials; 