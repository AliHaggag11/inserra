import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid, you can submit the data here
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Reset form after submission
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 2000);
    }
  };

  const SuccessAnimation = ({ message }) => (
    <motion.div
      className="flex flex-col items-center justify-center h-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="rounded-full bg-green-500 p-2 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 500, damping: 15 }}
      >
        <Check size={48} color="white" />
      </motion.div>
      <p className="text-xl font-semibold text-gray-800">{message}</p>
    </motion.div>
  );

  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark min-h-screen text-white -mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3 bg-white rounded-lg shadow-lg p-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence>
              {isSubmitted ? (
                <SuccessAnimation message="Message sent successfully!" />
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.name ? 'border-red-500' : ''}`} 
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`} 
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.subject ? 'border-red-500' : ''}`} 
                      />
                      {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="4" 
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.message ? 'border-red-500' : ''}`}
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">Send Message</button>
                  </form>
                </>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/3"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-blue-700 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="mr-4" />
                  <span>123 Plastic Ave, New York, NY 10001</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-4" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-4" />
                  <span>info@Insera.com</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 bg-blue-700 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <ul className="space-y-2">
                <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                <li>Saturday: 10:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;