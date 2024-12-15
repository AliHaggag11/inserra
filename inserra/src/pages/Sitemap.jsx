import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, Search } from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Main',
      icon: '🏠',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Careers', path: '/careers' },
        { name: 'Partners', path: '/partners' },
        { name: 'News', path: '/news' },
      ]
    },
    {
      title: 'Industries',
      icon: '🏭',
      links: [
        { name: 'Overview', path: '/industries' },
        { 
          name: 'Packaging', 
          path: '/industries/packaging',
          sublinks: [
            { name: 'Kiefel Packaging', path: '/industries/packaging/kiefel' },
            { name: 'Kiefel Fiber', path: '/industries/packaging/kiefel-fiber' },
            { name: 'Viscotec', path: '/industries/packaging/viscotec' },
          ]
        },
        {
          name: 'Recycling',
          path: '/industries/recycling',
          sublinks: [
            { name: 'Washing', path: '/industries/recycling/washing' },
            { name: 'Sorting', path: '/industries/recycling/sorting' },
            { name: 'Starlinger Recycling', path: '/industries/recycling/starlinger-recycling' },
          ]
        },
        {
          name: 'Appliance',
          path: '/industries/appliance',
          sublinks: [
            { name: 'Kiefel Appliance', path: '/industries/appliance/kiefel-appliance' },
          ]
        },
        {
          name: 'Food & Pharmaceutical',
          path: '/industries/food-pharma',
        },
      ]
    },
    {
      title: 'Machines',
      icon: '⚙️',
      links: [
        { 
          name: 'Packaging Machines',
          sublinks: [
            { name: 'Speedformer KMD', path: '/industries/packaging/kiefel/kmd' },
            { name: 'Speedformer KTR', path: '/industries/packaging/kiefel/ktr' },
            { name: 'Stacking Automation', path: '/industries/packaging/kiefel/stacking' },
            { name: 'KMD Tooling', path: '/industries/packaging/kiefel/tooling' },
          ]
        },
        {
          name: 'Fiber Machines',
          sublinks: [
            { name: 'NATUREPREP KFP', path: '/industries/packaging/kiefel-fiber/natureprep' },
            { name: 'NATUREFORMER KFT', path: '/industries/packaging/kiefel-fiber/kft' },
            { name: 'NATUREFORMER KFL', path: '/industries/packaging/kiefel-fiber/kfl' },
          ]
        },
        {
          name: 'Recycling Machines',
          sublinks: [
            { name: 'recoSTAR dynamic', path: '/industries/recycling/starlinger-recycling/recostar-dynamic' },
            { name: 'recoSTAR PET', path: '/industries/recycling/starlinger-recycling/recostar-pet' },
            { name: 'recoSTAR universal', path: '/industries/recycling/starlinger-recycling/recostar-universal' },
          ]
        },
      ]
    },
    {
      title: 'Support',
      icon: '💡',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Documentation', path: '/docs' },
        { name: 'Contact Support', path: '/contact' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header with enhanced styling */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">Sitemap</span>
            </div>
            {/* Quick search */}
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Quick find..." 
                className="pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content with improved layout */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Enhanced header section */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Sitemap
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Complete overview of our website structure and available pages
            </motion.p>
          </div>
          
          <div className="space-y-16">
            {siteStructure.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Section header with enhanced styling */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                    <span className="text-2xl">{section.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {section.links.length} items
                    </p>
                  </div>
                </div>

                {/* Content card with hover effects */}
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {section.links.map((link) => (
                      <li key={link.path || link.name} className="group">
                        {link.path ? (
                          <Link 
                            to={link.path}
                            className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200 py-1"
                          >
                            <span className="font-medium">{link.name}</span>
                            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                          </Link>
                        ) : (
                          <div>
                            <span className="font-semibold text-gray-900">{link.name}</span>
                            {link.sublinks && (
                              <ul className="ml-4 mt-3 space-y-2 border-l-2 border-gray-100 pl-4">
                                {link.sublinks.map((sublink) => (
                                  <li key={sublink.path}>
                                    <Link 
                                      to={sublink.path}
                                      className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors duration-200 group py-1"
                                    >
                                      <span>{sublink.name}</span>
                                      <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                        {link.sublinks && link.path && (
                          <ul className="ml-4 mt-3 space-y-2 border-l-2 border-gray-100 pl-4">
                            {link.sublinks.map((sublink) => (
                              <li key={sublink.path}>
                                <Link 
                                  to={sublink.path}
                                  className="flex items-center text-sm text-gray-600 hover:text-primary transition-colors duration-200 group py-1"
                                >
                                  <span>{sublink.name}</span>
                                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced footer section */}
          <motion.div 
            className="mt-20 pt-12 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Help?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/help" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
                >
                  Visit Help Center
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sitemap; 