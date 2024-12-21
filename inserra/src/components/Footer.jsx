import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/insera.png';
import Modal from './Modal';
import { AnimatePresence, motion } from 'framer-motion';

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  // Create an array that matches the visible nav items
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    // { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <footer className="bg-gradient-to-br from-primary to-primary-dark text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <img 
                src={logo} 
                alt="Insera Logo" 
                className="h-16 w-auto"
                style={{
                  filter: 'brightness(0) invert(1)'
                }}
              />
              <p className="text-blue-100 leading-relaxed">
                Leading provider of industrial solutions, representing world-class manufacturers 
                and delivering cutting-edge technology across the MENA region.
              </p>
              <div className="flex">
                <a 
                  href="https://www.linkedin.com/company/insera/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links - Updated */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="flex items-center text-blue-100 hover:text-white transition-colors duration-300 group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <a 
                  href="https://maps.app.goo.gl/gdwzhPATVgdXREUu6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start text-blue-100 hover:text-white transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Egypt, UAE</span>
                </a>
                <a 
                  href="tel:+201220566640" 
                  className="flex items-center text-blue-100 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>+20 1220 566 640</span>
                </a>
                <a 
                  href="mailto:info@insera-eg.com" 
                  className="flex items-center text-blue-100 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>info@insera-eg.com</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
              <p className="text-blue-100 mb-4">
                Subscribe to our newsletter for updates and insights.
              </p>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-blue-100 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Insera. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-blue-100">
                <button 
                  onClick={() => setIsPrivacyOpen(true)} 
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setIsTermsOpen(true)} 
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <Modal
            isOpen={isPrivacyOpen}
            onClose={() => setIsPrivacyOpen(false)}
            title="Privacy Policy"
          >
            <motion.div 
              className="text-gray-700 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <section>
                <h4 className="text-xl font-semibold text-primary mb-4">Our Commitment to Privacy</h4>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    At Insera, we respect your privacy and are committed to protecting it. Our website is informational in nature, and we do not collect any personal data from visitors.
                  </p>
                </div>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-primary mb-4">Information Collection</h4>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 leading-relaxed">
                    Our website serves as an informational platform only. We do not:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      Use cookies or tracking technologies
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      Collect personal information
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary">•</span>
                      Store any user data
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-primary mb-4">Contact Information</h4>
                <div className="border-l-4 border-primary pl-6">
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about our privacy practices, you can contact us directly through the contact information provided on our website.
                  </p>
                </div>
              </section>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Terms of Service Modal */}
      <AnimatePresence>
        {isTermsOpen && (
          <Modal
            isOpen={isTermsOpen}
            onClose={() => setIsTermsOpen(false)}
            title="Terms of Service"
          >
            <motion.div 
              className="text-gray-700 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <section>
                <h4 className="text-xl font-semibold text-primary mb-4">1. Website Usage</h4>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 leading-relaxed">
                    This website is provided for informational purposes only. By accessing and using this website, you agree to these terms and conditions.
                  </p>
                </div>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-primary mb-4">2. Intellectual Property</h4>
                <div className="border-l-4 border-primary pl-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    All content on this website, including text, graphics, logos, and images, is the property of Insera and is protected by intellectual property laws.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <h5 className="font-medium text-gray-900 mb-2">Usage Restrictions:</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-3 text-primary">•</span>
                        Content is for informational purposes only
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary">•</span>
                        No commercial use without permission
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 text-primary">•</span>
                        No reproduction without written consent
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-primary mb-4">3. Disclaimer</h4>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    The information on this website is provided "as is" without any warranties. Insera reserves the right to modify or discontinue any aspect of the website without notice.
                  </p>
                </div>
              </section>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
