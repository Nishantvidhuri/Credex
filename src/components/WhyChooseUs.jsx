import { motion } from 'framer-motion';

function WhyChooseUs() {
  const benefits = [
    {
      id: 1,
      title: "Secure Transactions",
      description: "Bank-level encryption and secure payment processing protect your data and funds.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Best Market Rates",
      description: "Our marketplace connects you directly with verified buyers to ensure top dollar for your licenses.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Fast Payouts",
      description: "Receive funds in as little as 48 hours after accepting an offer.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Verified Buyers",
      description: "We thoroughly vet all buyers to ensure legitimate transactions and protect your interests.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-choose-us" className="section-padding bg-light-100 dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-light-900 dark:text-dark-100 mb-4"
          >
            Why <span className="text-primary-600 dark:text-primary-300">Choose Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-light-700 dark:text-dark-200 max-w-2xl mx-auto"
          >
            SoftSell offers unmatched benefits for businesses looking to liquidate software assets.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div 
              key={benefit.id}
              variants={childVariants}
              className="  bg-light-100 dark:bg-dark-300 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-primary-500 dark:border-primary-400"
            >
              <div className="w-12 h-12 rounded-lg mb-6 p-2 text-primary-600 dark:text-primary-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-light-900 dark:text-dark-100 mb-3">
                {benefit.title}
              </h3>
              <p className="text-light-700 dark:text-dark-200">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 p-8 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-600 rounded-2xl shadow-xl text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/50 dark:bg-primary-400/50 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-700/50 dark:bg-primary-700/50 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to turn your unused licenses into cash?</h3>
              <p className="text-primary-50">Get started today and receive a valuation within minutes.</p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg bg-white text-primary-600 hover:bg-light-100 border-2 border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 transition-colors duration-200 shadow-md"
            >
              <span>Get Started</span>
              <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs; 