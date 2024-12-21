import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Check, Clock, Globe } from 'lucide-react';

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
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 2000);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      content: "Egypt, UAE",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      content: "+20 1220 566 640",
      link: "tel:+201220566640",
      linkText: "Call Us"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      content: "info@insera-eg.com",
      link: "mailto:info@insera-eg.com",
      linkText: "Send Email"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Sunday - Thursday: 9:00 AM - 5:00 PM",
      subContent: "Friday - Saturday: Closed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark">
      {/* Hero Section - reduced padding */}
      <div className="relative pt-20 pb-12 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-blue-200">
              Have questions about our solutions? We're here to help you find the perfect fit for your industry needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content - reduced padding */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 h-full flex flex-col justify-between">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-xl p-4 text-gray-800 mb-4 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">{info.title}</h3>
                    <p className="text-gray-600 mb-1">{info.content}</p>
                    {info.subContent && (
                      <p className="text-gray-500 text-sm">{info.subContent}</p>
                    )}
                    {info.link && (
                      <a 
                        href={info.link}
                        className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.linkText} →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-xl shadow-xl overflow-hidden h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Send us a Message</h2>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-8"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-green-100 rounded-full p-3 mb-4">
                      <Check className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        />
                        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        />
                        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.subject ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      />
                      {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      ></textarea>
                      {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;