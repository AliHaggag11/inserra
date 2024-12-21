import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Factory, HeadphonesIcon } from 'lucide-react';
import logo from '../assets/insera.png';
import logoVar from '../assets/insera_var.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (window.innerWidth >= 768 && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
      y: -20,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  const dropdownVariants = {
    closed: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
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
            { name: 'Viscotec - Starlinger ', path: '/industries/packaging/viscotec' },
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
          path: '/industries/food-pharma',
          subItems: [
            { name: 'Hanningfield', path: '/industries/food-pharma/hanningfield' },
            { name: 'Kiefel Medical & Pharma', path: '/industries/food-pharma/kiefel-medical-pharma' },
          ]
        },
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  const getNavbarBackground = () => {
    const isHome = location.pathname === '/';
    if (!isHome) return 'bg-white shadow-sm';
    return isScrolled 
      ? 'bg-white shadow-sm' 
      : 'bg-gradient-to-b from-gray-900/60 via-gray-800/50 to-transparent';
  };

  const getTextColor = () => {
    const isHome = location.pathname === '/';
    if (!isHome) return 'text-primary';
    return isScrolled ? 'text-primary' : 'text-white';
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const getLogoStyle = () => {
    const isHome = location.pathname === '/';
    if (!isHome) return 'none';
    return !isScrolled ? 'brightness(0) invert(1)' : 'none';
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${getNavbarBackground()}`}>
      <div className="container relative mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <AnimatePresence mode="wait">
              <motion.img 
                key={isScrolled ? 'scrolled-logo' : 'top-logo'}
                src={isScrolled ? logoVar : logo}
                alt="Insera Logo" 
                className="h-14 w-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  filter: getLogoStyle()
                }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              />
            </AnimatePresence>
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

          <nav className="hidden md:block" ref={dropdownRef}>
            <ul className="flex space-x-8">
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
                        className={`flex items-center text-lg font-medium hover:text-gray-400 transition-colors duration-300 ease-in-out ${getTextColor()}`}
                        onClick={() => toggleDropdown(item.name)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-5 w-5" />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div 
                            className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl rounded-lg shadow-xl bg-white border border-gray-200 divide-y divide-gray-100"
                            style={{
                              marginLeft: 'calc(-50vw + 50%)',
                              marginRight: 'calc(-50vw + 50%)',
                              left: '50%',
                              right: '50%'
                            }}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                          >
                            <div className="max-w-4xl mx-auto">
                              <div className="px-8 py-4 bg-gray-50 flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                  <span className="bg-primary p-1.5 rounded-md mr-3">
                                    <Factory className="w-5 h-5 text-white" />
                                  </span>
                                  Our Industries
                                </h3>
                                <div className="text-sm text-gray-500">
                                  Explore our comprehensive solutions
                                </div>
                              </div>
                              <div className="p-8" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <div className="grid grid-cols-4 gap-x-12">
                                  {item.subItems.map((subItem) => (
                                    <div key={subItem.name} className="group">
                                      <Link
                                        to={subItem.path}
                                        className="flex items-center text-gray-800 hover:text-primary transition-colors duration-300 mb-4 group/item border-l-2 border-transparent hover:border-primary pl-3 -ml-3"
                                        onClick={handleLinkClick}
                                      >
                                        <span className="font-medium tracking-wide">{subItem.name}</span>
                                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                                      </Link>
                                      {subItem.subItems && (
                                        <ul className="space-y-1">
                                          {subItem.subItems.map((subSubItem) => (
                                            <li key={subSubItem.name}>
                                              <Link
                                                to={subSubItem.path}
                                                className="block text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded px-3 py-2 transition-all duration-300 relative pl-6 group/bullet"
                                                onClick={handleLinkClick}
                                              >
                                                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-sm bg-gray-300 group-hover/bullet:bg-primary transition-colors duration-300" />
                                                <span className="tracking-wide">{subSubItem.name}</span>
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </div>
                                  ))}
                                </div>
                                <div className="mt-8 -mx-8 -mb-8">
                                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                                    <div className="flex items-center justify-between">
                                      <div className="text-gray-800">
                                        <h4 className="font-medium mb-1 flex items-center">
                                          <span className="bg-primary/10 p-1 rounded mr-2">
                                            <HeadphonesIcon className="w-4 h-4 text-primary" />
                                          </span>
                                          Need Expert Guidance?
                                        </h4>
                                        <p className="text-sm text-gray-600">Our team is here to help you find the perfect solution</p>
                                      </div>
                                      <Link 
                                        to="/contact"
                                        className="inline-flex items-center bg-primary text-white hover:bg-primary-dark font-medium text-sm px-5 py-2.5 rounded-md shadow-sm hover:shadow transition-all duration-300 group"
                                        onClick={handleLinkClick}
                                      >
                                        Contact Our Team
                                        <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      to={item.path} 
                      className={`text-lg font-medium hover:text-gray-400 transition-colors duration-300 ease-in-out ${getTextColor()}`}
                      onClick={handleLinkClick}
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
              className="fixed inset-0 bg-primary/95 backdrop-blur-2xl z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <div 
                  className="absolute inset-[-50%] right-[-20%]" 
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.1) 50%, transparent 50%)`,
                    backgroundSize: '120px 120px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                    width: '150%',
                    height: '150%'
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/40 via-primary/20 to-transparent"></div>
              <nav className="flex flex-col items-center justify-center h-full relative z-10 px-6">
                <ul className="space-y-4 text-center w-full max-w-md">
                  {navItems.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      variants={menuItemVariants}
                      className="border-b border-white/10 last:border-b-0"
                    >
                      {item.subItems ? (
                        <div className="py-3">
                          <button 
                            className="text-xl font-semibold text-white/90 hover:text-white transition-all duration-300 w-full flex items-center justify-center"
                            onClick={() => toggleDropdown(item.name)}
                          >
                            {item.name}
                            <ChevronDown 
                              className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
                                openDropdown === item.name ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                          <AnimatePresence>
                            {openDropdown === item.name && (
                              <motion.ul 
                                className="mt-2 space-y-2 bg-white/5 rounded-lg p-3"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={dropdownVariants}
                              >
                                {item.subItems.map((subItem) => (
                                  <motion.li 
                                    key={subItem.name}
                                    variants={menuItemVariants}
                                    className="py-1"
                                  >
                                    <button 
                                      className="text-lg font-medium text-white/80 hover:text-white transition-all duration-300 w-full flex items-center justify-center"
                                      onClick={() => toggleSubDropdown(subItem.name)}
                                    >
                                      {subItem.name}
                                      {subItem.subItems && (
                                        <ChevronDown 
                                          className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${
                                            openSubDropdown === subItem.name ? 'rotate-180' : ''
                                          }`} 
                                        />
                                      )}
                                    </button>
                                    <AnimatePresence>
                                      {openSubDropdown === subItem.name && subItem.subItems && (
                                        <motion.ul 
                                          className="mt-1 space-y-1 bg-white/5 rounded-lg p-2"
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
                                                className="block text-base text-white/70 hover:text-white transition-all duration-300 py-1" 
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
                          className="block text-xl font-semibold text-white/90 hover:text-white transition-all duration-300 py-3" 
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
