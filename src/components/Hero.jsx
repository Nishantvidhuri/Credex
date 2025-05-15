import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="bg-gradient-to-br from-light-100 to-light-bg dark:from-dark-700 dark:to-dark-bg section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-light-900 dark:text-dark-text leading-tight"
            >
              {/* Dark mode version */}
              <span className="hidden dark:inline text-dark-100">
                Maximize
              </span>
              {/* Light mode version */}
              <span className="inline dark:hidden text-light-900">
                Maximize
              </span> the Value of Your Software Licenses
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-light-700 dark:text-dark-200"
            >
              Transform unused software licenses into cash. SoftSell provides a secure, 
              transparent marketplace for businesses to sell their unused software assets.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-4"
            >
              <a 
                href="#contact" 
                className="btn-primary inline-flex items-center px-6 py-3 text-base font-medium rounded-lg shadow-lg transition-colors duration-200"
              >
                <span>Get a Quote</span>
                <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md relative">
              <div className="absolute -z-10 w-72 h-72 rounded-full bg-primary-100 dark:bg-primary-400/20 blur-3xl top-0 right-0 transform translate-x-1/4 -translate-y-1/4"></div>
              <img 
                src="data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400' preserveAspectRatio='xMidYMid meet'%3e%3cstyle%3e @keyframes float { 0%% { transform: translateY(0px) translateX(0px); } 50%% { transform: translateY(-20px) translateX(10px); } 100%% { transform: translateY(0px) translateX(0px); } } .float { animation: float 6s ease-in-out infinite; } %3c/style%3e%3crect width='600' height='400' fill='%2324262e' opacity='0'/%3e%3cg class='float'%3e%3cpath d='M485.5 256.5L485.5 256.5L398.5 241.5L398.5 154.5L485.5 139.5L485.5 256.5z' fill='%233b82f6'/%3e%3cpath d='M398.5 241.5L398.5 241.5L178.5 266.5L178.5 129.5L398.5 154.5L398.5 241.5z' fill='%2360a5fa'/%3e%3cpath d='M178.5 266.5L178.5 266.5L91.5 251.5L91.5 144.5L178.5 129.5L178.5 266.5z' fill='%2393c5fd'/%3e%3c/g%3e%3cg%3e%3ctext x='302.5' y='280' font-family='Arial' font-size='20' text-anchor='middle' fill='%23fff'%3e%3c/text%3e%3c/g%3e%3c/svg%3e"
                alt="Software License Visualization" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-light-bg dark:bg-dark-surface p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-semibold text-light-800 dark:text-dark-100">Secure Transactions</span>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-light-bg dark:bg-dark-surface p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span className="text-sm font-semibold text-light-800 dark:text-dark-100">Instant Valuation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 