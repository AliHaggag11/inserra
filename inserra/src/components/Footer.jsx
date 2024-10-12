import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Cairo, Egypt</p>
            <p>+20 1220 566 640</p>
            <p>info@insera-eg.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/about" className="hover:text-blue-200">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-200">Careers</Link></li>
              <li><Link to="/partners" className="hover:text-blue-200">Partners</Link></li>
              <li><Link to="/news" className="hover:text-blue-200">News</Link></li>
              <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 rounded-l-md text-gray-800"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-700">
          <div className="flex justify-between items-center">
            <p>© 2023 Insera. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-blue-200"><Twitter size={20} /></a>
              <a href="#" className="text-white hover:text-blue-200"><Linkedin size={20} /></a>
              <a href="#" className="text-white hover:text-blue-200"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
