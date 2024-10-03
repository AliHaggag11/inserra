import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-primary">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                Cairo, Egypt
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                +20 1220 566 640
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                info@insera-eg.com
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/partners" className="hover:underline">Partners</Link></li>
              <li><Link to="/news" className="hover:underline">News</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md text-gray-900 border border-primary"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and Social Media Links */}
        <div className="mt-8 pt-8 border-t border-primary flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 Insera. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-primary hover:text-primary-dark transition duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-primary hover:text-primary-dark transition duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-primary hover:text-primary-dark transition duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-primary hover:text-primary-dark transition duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;