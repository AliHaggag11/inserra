import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/insera.png';

const Footer = () => {
  // Create an array that matches the visible nav items
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    // { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src={logo} 
              alt="Insera Logo" 
              className="h-12 w-auto"
              style={{
                filter: `
                  drop-shadow(1px 0 0 rgba(255,255,255,0.8))
                  drop-shadow(-1px 0 0 rgba(255,255,255,0.8))
                  drop-shadow(0 1px 0 rgba(255,255,255,0.8))
                  drop-shadow(0 -1px 0 rgba(255,255,255,0.8))
                `
              }}
            />
            <p className="text-blue-100 leading-relaxed">
              Leading provider of industrial solutions, representing world-class manufacturers 
              and delivering cutting-edge technology across the MENA region.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
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
                href="https://goo.gl/maps/yourLocation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start text-blue-100 hover:text-white transition-colors duration-300"
              >
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>Cairo, Egypt</span>
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
              <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
