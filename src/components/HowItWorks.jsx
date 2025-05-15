import { motion } from 'framer-motion';

function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Upload License",
      description: "Securely upload your software license details through our encrypted portal.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Get Valuation",
      description: "Our AI-driven algorithm analyzes market data to provide an accurate valuation instantly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Get Paid",
      description: "Accept the offer and receive payment within 48 hours via your preferred method.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="how-it-works" className="section-padding bg-light-bg dark:bg-dark-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-light-900 dark:text-dark-text mb-4"
          >
            How It <span className="text-primary-600 dark:text-primary-300">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-light-700 dark:text-dark-200 max-w-2xl mx-auto"
          >
            Our streamlined process makes selling your unused software licenses quick and painless.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              variants={childVariants}
              className="bg-light-100 dark:bg-dark-700/80 rounded-xl shadow-lg p-8 relative overflow-hidden group"
            >
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-primary-100 dark:bg-primary-500/10 rounded-tl-full transform translate-x-1/4 translate-y-1/4 group-hover:translate-x-1/6 group-hover:translate-y-1/6 transition-transform duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-500/20 rounded-lg mb-6 p-3 text-primary-600 dark:text-primary-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-light-900 dark:text-dark-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-light-700 dark:text-dark-200">
                  {step.description}
                </p>
              </div>
              
              <div className="absolute top-6 right-6 bg-primary-600 dark:bg-primary-400 text-white dark:text-dark-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {step.id}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center px-6 py-3 text-base font-medium rounded-lg transition-colors duration-200 shadow-md"
          >
            <span>Ready to Sell?</span>
            <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks; 