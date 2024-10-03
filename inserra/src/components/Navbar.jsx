import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/insera.png'; // Import the logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPartnersDropdownOpen, setIsPartnersDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isPartnersDropdownOpen) setIsPartnersDropdownOpen(false);
    if (isIndustriesDropdownOpen) setIsIndustriesDropdownOpen(false);
  };

  const togglePartnersDropdown = () => {
    setIsPartnersDropdownOpen(!isPartnersDropdownOpen);
    if (isIndustriesDropdownOpen) setIsIndustriesDropdownOpen(false);
  };

  const toggleIndustriesDropdown = () => {
    setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
    if (isPartnersDropdownOpen) setIsPartnersDropdownOpen(false);
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
      height: "100vh",
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

  const dropdownVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Industries', 
      subItems: [
        { name: 'Packaging & Recycling', path: '/industries/packaging-recycling' },
        { name: 'Appliance', path: '/industries/appliance' },
        { name: 'Food & Pharmaceutical', path: '/industries/food-pharmaceutical' },
      ]
    },
    { 
      name: 'Partners', 
      path: '/partners',
      subItems: [
        { name: 'All Partners', path: '/partners' },
        { name: 'Partner 1', path: '/partners/partner1' },
        { name: 'Partner 2', path: '/partners/partner2' },
      ]
    },
    { name: 'News', path: '/news' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const getNavbarBackground = () => {
    return 'bg-white shadow-md';
  };

  const getTextColor = () => {
    return 'text-primary';
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${getNavbarBackground()}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Inserra Logo" className="h-10 w-auto" /> {/* Use the imported logo */}
          </Link>
          
          {/* Hamburger menu button for mobile */}
          <motion.button
            className={`md:hidden focus:outline-none z-50 ${isMenuOpen ? 'text-white' : getTextColor()}`}
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
                <motion.li 
                  key={item.name} 
                  initial={{ opacity: 0, y: -20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {item.subItems ? (
                    <>
                      <button 
                        className={`flex items-center hover:text-blue-400 transition-colors duration-300 ease-in-out ${getTextColor()}`}
                        onClick={item.name === 'Partners' ? togglePartnersDropdown : toggleIndustriesDropdown}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link 
                      to={item.path} 
                      className={`hover:text-blue-400 transition-colors duration-300 ease-in-out ${getTextColor()}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-primary z-40"
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
                      {item.subItems ? (
                        <div>
                          <button 
                            className="text-2xl font-semibold text-white hover:text-blue-200 transition duration-300"
                            onClick={item.name === 'Partners' ? togglePartnersDropdown : toggleIndustriesDropdown}
                          >
                            {item.name}
                            <ChevronDown className={`inline-block ml-1 h-4 w-4 transform transition-transform duration-300 ${(item.name === 'Partners' ? isPartnersDropdownOpen : isIndustriesDropdownOpen) ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {(item.name === 'Partners' ? isPartnersDropdownOpen : isIndustriesDropdownOpen) && (
                              <motion.ul 
                                className="mt-2 space-y-2"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={dropdownVariants}
                              >
                                {item.subItems.map((subItem) => (
                                  <motion.li 
                                    key={subItem.name}
                                    variants={menuItemVariants}
                                  >
                                    <Link 
                                      to={subItem.path}
                                      className="text-xl font-semibold text-white hover:text-blue-200 transition duration-300" 
                                      onClick={toggleMenu}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link 
                          to={item.path}
                          className="text-2xl font-semibold text-white hover:text-blue-200 transition duration-300" 
                          onClick={toggleMenu}
                        >
                          {item.name}
                        </Link>
                      )}
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