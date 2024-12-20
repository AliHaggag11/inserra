import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/insera.png';
import Modal from './Modal';

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
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Privacy Policy"
      >
        <div className="text-gray-700 space-y-8">
          <section>
            <h4 className="text-xl font-semibold text-primary mb-4">1. Information Collection</h4>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We collect information that you provide directly to us, including when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Fill out forms on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Request information about our services</li>
                <li>Communicate with us via email or other channels</li>
              </ul>
            </div>
          </section>

          <section>
            <h4 className="text-xl font-semibold text-primary mb-4">2. Use of Information</h4>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect to provide and improve our services, communicate with you,
                and comply with legal obligations. This includes:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  Providing the information and services you request
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  Sending you technical notices and support messages
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary">•</span>
                  Improving our website and services
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h4 className="text-xl font-semibold text-primary mb-4">3. Information Sharing</h4>
            <div className="border-l-4 border-primary pl-6">
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell or rent your personal information to third parties. We may share your
                information with service providers who assist in our operations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These service providers are bound by strict confidentiality agreements and are only
                authorized to use your information as necessary to provide services to us.
              </p>
            </div>
          </section>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Terms of Service"
      >
        <div className="text-gray-700 space-y-8">
          <section>
            <h4 className="text-xl font-semibold text-primary mb-4">1. Acceptance of Terms</h4>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-600 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by these Terms of Service.
                Please read these terms carefully before using our services.
              </p>
            </div>
          </section>

          <section>
            <h4 className="text-xl font-semibold text-primary mb-4">2. Use License</h4>
            <div className="border-l-4 border-primary pl-6">
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily view the materials on Insera's website for personal,
                non-commercial use only. This is the grant of a license, not a transfer of title.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h5 className="font-medium text-gray-900 mb-2">Under this license, you may not:</h5>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    Modify or copy the materials
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    Use the materials for any commercial purpose
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">•</span>
                    Transfer the materials to another person
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h4 className="text-xl font-semibold text-primary mb-4">3. Disclaimer</h4>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                The materials on Insera's website are provided on an 'as is' basis. Insera makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties,
                including without limitation, implied warranties or conditions of merchantability.
              </p>
            </div>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default Footer;
