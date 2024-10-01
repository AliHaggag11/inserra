import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import News from './pages/News';

const PageWrapper = ({ children }) => {
  const variants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/partners" element={<PageWrapper><Partners /></PageWrapper>} />
            <Route path="/news" element={<PageWrapper><News /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">One Name For All Your Needs</h2>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                CONTACT US
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">About Company</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt text-blue-400 mr-3"></i>
                  <span>P.O. Box 88758, Riyadh 11672, KSA</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone text-blue-400 mr-3"></i>
                  <span>+966 11 265 4892</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope text-blue-400 mr-3"></i>
                  <span>info@plasticorp.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
              <ul className="space-y-3">
                {[
                  { to: "/about", text: "About Us" },
                  { to: "/partners", text: "Our Partners" },
                  { to: "/careers", text: "Career" },
                  { to: "/news", text: "Latest Media" },
                  { to: "/contact", text: "Contact Us" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link to={link.to} className="hover:text-blue-300 transition duration-300 flex items-center">
                      <i className="fas fa-chevron-right text-blue-400 mr-2"></i>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
              <p className="mb-4">Stay updated with our latest news and offers.</p>
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none flex-grow"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300 mt-2 sm:mt-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2023 PlastiCorp. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {[
                { icon: "fab fa-facebook-f", href: "#" },
                { icon: "fab fa-twitter", href: "#" },
                { icon: "fab fa-linkedin-in", href: "#" },
                { icon: "fab fa-instagram", href: "#" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;