import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import logo from '../assets/logo.png'; // Make sure to add a logo image to your assets folder

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Partners', path: '/partners' },
    { name: 'News', path: '/news' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            {/* <img src={logo} alt="PlastiCorp Logo" className="h-10 w-auto" /> */}
            <motion.span 
              className="text-xl font-bold text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              PlastiCorp
            </motion.span>
          </Link>
          
          {/* Hamburger menu button for mobile */}
          <motion.button
            className="md:hidden text-gray-600 focus:outline-none z-50"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>

          {/* Desktop menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <motion.li key={item.name} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Link to={item.path} className="text-gray-600 hover:text-blue-600">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <nav className="flex flex-col items-center justify-center h-full">
                <ul className="space-y-6 text-center">
                  {navItems.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      variants={menuItemVariants}
                    >
                      <Link 
                        to={item.path}
                        className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300" 
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;