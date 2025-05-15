import { useState } from 'react';
import { motion } from 'framer-motion';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const licenseTypes = [
    "Microsoft Office",
    "Adobe Creative Cloud",
    "AutoCAD",
    "Oracle Database",
    "SAP",
    "VMware",
    "Salesforce",
    "Other"
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-light-100 dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-light-900 dark:text-dark-100 mb-4"
          >
            Contact <span className="text-primary-600 dark:text-primary-300">Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-light-700 dark:text-dark-200 max-w-2xl mx-auto"
          >
            Ready to sell your software licenses? Our team is here to help you.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-light-900 dark:text-dark-100">
              Ready to <span className="text-primary-600 dark:text-primary-300">Sell</span> Your Software Licenses?
            </h2>
            <p className="text-lg text-light-700 dark:text-dark-200">
              Fill out the form and we'll provide you with a valuation within 24 hours. 
              Our experts are ready to help you get the best value for your unused software.
            </p>
            
            <div className="space-y-6 pt-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-500/20 p-3 rounded-lg text-primary-600 dark:text-primary-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-light-900 dark:text-dark-100">Email Us</h3>
                  <p className="text-light-700 dark:text-dark-200">support@softsell.in</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-500/20 p-3 rounded-lg text-primary-600 dark:text-primary-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-light-900 dark:text-dark-100">Call Us</h3>
                  <p className="text-light-700 dark:text-dark-200">+91 9871202673</p>
                 
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-500/20 p-3 rounded-lg text-primary-600 dark:text-primary-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-light-900 dark:text-dark-100">Location</h3>
                  <p className="text-light-700 dark:text-dark-200">SoftSell Technologies Pvt. Ltd.</p>
                  <p className="text-light-700 dark:text-dark-200">A-25, Sector 62, Noida  201301</p>
                  <p className="text-light-700 dark:text-dark-200">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-light-50 dark:bg-dark-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border-t-4 border-primary-500 dark:border-primary-400">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-500/20 rounded-full flex items-center justify-center mx-auto text-primary-600 dark:text-primary-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-light-900 dark:text-dark-100">Thank You!</h3>
                  <p className="text-light-700 dark:text-dark-200">
                    We've received your request and will get back to you within 24 hours with a valuation.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-primary-100 dark:bg-primary-500/20 text-primary-600 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 transition-colors duration-200"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-light-900 dark:text-dark-100 mb-6">Get a Free Valuation</h3>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-light-700 dark:text-dark-100 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-light-300 dark:border-dark-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-200 text-light-900 dark:text-dark-900 placeholder-black`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-light-700 dark:text-dark-100 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-light-300 dark:border-dark-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-200 text-light-900 dark:text-dark-900 placeholder-black`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-light-700 dark:text-dark-100 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.company ? 'border-red-500' : 'border-light-300 dark:border-dark-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-200 text-light-900 dark:text-dark-900 placeholder-black`}
                      placeholder="Your company"
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-light-700 dark:text-dark-100 mb-1">
                      License Type
                    </label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.licenseType ? 'border-red-500' : 'border-light-300 dark:border-dark-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-200 text-black dark:text-black placeholder-black`}
                    >
                      <option value="" className="text-black">Select license type</option>
                      {licenseTypes.map((type) => (
                        <option key={type} value={type} className="text-black">{type}</option>
                      ))}
                    </select>
                    {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-light-700 dark:text-dark-100 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-light-300 dark:border-dark-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-200 text-light-900 dark:text-dark-900 placeholder-black"
                      placeholder="Tell us more about your licenses..."
                    ></textarea>
                  </div>
                  <div className='flex justify-center border border-purple-500 rounded-lg'>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-600 dark:bg-primary-500 text-purple-500 font-medium rounded-lg shadow-md hover:bg-primary-700 dark:hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300  transition-colors duration-200"
                  >
                    Get a Quote
                  </motion.button>
                  </div>
                  <p className="text-xs text-light-500 dark:text-dark-100 text-center">
                    By submitting this form, you agree to our <a href="#" className="text-primary-600 dark:text-primary-300 hover:underline">Terms</a> and <a href="#" className="text-primary-600 dark:text-primary-300 hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm; 