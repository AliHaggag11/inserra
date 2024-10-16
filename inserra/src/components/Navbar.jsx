import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/insera.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    setOpenSubDropdown(null);
  };

  const toggleSubDropdown = (subDropdownName) => {
    setOpenSubDropdown(openSubDropdown === subDropdownName ? null : subDropdownName);
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
        { 
          name: 'Packaging', 
          path: '/industries/packaging',
          subItems: [
            { name: 'Kiefel', path: '/industries/packaging/kiefel' },
            { name: 'Kiefel Fiber', path: '/industries/packaging/kiefel-fiber' },
            { name: 'Viscotec (Starlinger)', path: '/industries/packaging/viscotec' },
          ]
        },
        { 
          name: 'Recycling', 
          path: '/industries/recycling',
          subItems: [
            { name: 'Starlinger Recycling', path: '/industries/recycling/starlinger-recycling' },
            { name: 'Washing', path: '/industries/recycling/washing' },
            { name: 'Sorting', path: '/industries/recycling/sorting' },
          ]
        },
        { 
          name: 'Appliance', 
          path: '/industries/appliance',
          subItems: [
            { name: 'Kiefel Appliance', path: '/industries/appliance/kiefel-appliance' },
          ]
        },
        { 
          name: 'Food & Pharmaceutical', 
          path: '/industries/food-pharmaceutical',
          subItems: [
            { name: 'Hanningfield', path: '/industries/food-pharmaceutical/hanningfield' },
            { name: 'Kiefel Medical & Pharma', path: '/industries/food-pharmaceutical/kiefel-medical-pharma' },
          ]
        },
      ]
    },
    { 
      name: 'Partners', 
      path: '/partners',
      subItems: [
        { name: 'Kiefel', path: '/partners/kiefel' },
        { name: 'Kiefel Fiber', path: '/partners/kiefel-fiber' },
        { name: 'Viscotec (Starlinger)', path: '/partners/viscotec' },
        { name: 'Starlinger Recycling', path: '/partners/starlinger-recycling' },
        { name: 'Washing', path: '/partners/washing' },
        { name: 'Sorting', path: '/partners/sorting' },
        { name: 'Kiefel Appliance', path: '/industries/appliance/kiefel-appliance' },
        { name: 'Hanningfield', path: '/partners/hanningfield' },
        { name: 'Kiefel Medical & Pharma', path: '/partners/kiefel-medical-pharma' },
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
            <img src={logo} alt="Inserra Logo" className="h-10 w-auto" />
          </Link>
          
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
                        onClick={() => toggleDropdown(item.name)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div 
                            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                          >
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                              {item.subItems.map((subItem) => (
                                <div key={subItem.name} className="relative">
                                  <button 
                                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-between"
                                    onClick={() => toggleSubDropdown(subItem.name)}
                                  >
                                    {subItem.name}
                                    {subItem.subItems && <ChevronDown className="ml-1 h-4 w-4" />}
                                  </button>
                                  <AnimatePresence>
                                    {openSubDropdown === subItem.name && subItem.subItems && (
                                      <motion.div 
                                        className="mt-2 w-full bg-gray-50"
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={dropdownVariants}
                                      >
                                        {subItem.subItems.map((subSubItem) => (
                                          <Link
                                            key={subSubItem.name}
                                            to={subSubItem.path}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            role="menuitem"
                                          >
                                            {subSubItem.name}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
                            onClick={() => toggleDropdown(item.name)}
                          >
                            {item.name}
                            <ChevronDown className={`inline-block ml-1 h-4 w-4 transform transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {openDropdown === item.name && (
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
                                    <button 
                                      className="text-xl font-semibold text-white hover:text-blue-200 transition duration-300"
                                      onClick={() => toggleSubDropdown(subItem.name)}
                                    >
                                      {subItem.name}
                                      {subItem.subItems && (
                                        <ChevronDown className={`inline-block ml-1 h-4 w-4 transform transition-transform duration-300 ${openSubDropdown === subItem.name ? 'rotate-180' : ''}`} />
                                      )}
                                    </button>
                                    <AnimatePresence>
                                      {openSubDropdown === subItem.name && subItem.subItems && (
                                        <motion.ul 
                                          className="mt-1 space-y-1"
                                          initial="closed"
                                          animate="open"
                                          exit="closed"
                                          variants={dropdownVariants}
                                        >
                                          {subItem.subItems.map((subSubItem) => (
                                            <motion.li 
                                              key={subSubItem.name}
                                              variants={menuItemVariants}
                                            >
                                              <Link 
                                                to={subSubItem.path}
                                                className="text-lg text-white hover:text-blue-200 transition duration-300" 
                                                onClick={toggleMenu}
                                              >
                                                {subSubItem.name}
                                              </Link>
                                            </motion.li>
                                          ))}
                                        </motion.ul>
                                      )}
                                    </AnimatePresence>
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
