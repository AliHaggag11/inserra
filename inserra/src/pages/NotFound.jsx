import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { 
  Home, 
  ArrowLeft, 
  Map, 
  Search, 
  HelpCircle, 
  Mail,
  ExternalLink,
  X 
} from 'lucide-react';

const NotFound = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Define searchable content with paths
  const searchableContent = [
    // Main Pages
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
    { name: 'Partners', path: '/partners' },
    { name: 'News', path: '/news' },
    { name: 'Help Center', path: '/help' },
    { name: 'Sitemap', path: '/sitemap' },

    // Industries Main
    { name: 'Industries Overview', path: '/industries' },
    
    // Packaging Industry
    { name: 'Packaging', path: '/industries/packaging' },
    { name: 'Kiefel Packaging', path: '/industries/packaging/kiefel' },
    { name: 'Kiefel Fiber', path: '/industries/packaging/kiefel-fiber' },
    { name: 'Viscotec - Starlinger', path: '/industries/packaging/viscotec' },
    { name: 'ViscoSheet', path: '/industries/packaging/viscosheet' },
    { name: 'ViscoSheet One', path: '/industries/packaging/viscosheet-one' },
    { name: 'ViscoZero', path: '/industries/packaging/viscozero' },
    
    // Kiefel Packaging Machines
    { name: 'Speedformer KMD', path: '/industries/packaging/kiefel/kmd' },
    { name: 'Stacking Automation', path: '/industries/packaging/kiefel/stacking' },
    { name: 'Upstream & Downstream', path: '/industries/packaging/kiefel/upstream' },
    { name: 'KMD Tooling', path: '/industries/packaging/kiefel/tooling' },
    { name: 'Speedformer KTR', path: '/industries/packaging/kiefel/ktr' },
    { name: 'Stacking KTR', path: '/industries/packaging/kiefel/stacking-ktr' },
    { name: 'Tilting Tools', path: '/industries/packaging/kiefel/tilting-tools' },
    
    // Fiber Machines
    { name: 'NATUREPREP KFP', path: '/industries/packaging/kiefel-fiber/natureprep' },
    { name: 'NATUREFORMER KFT', path: '/industries/packaging/machines/fiber/natureformer-kft' },
    { name: 'NATUREFORMER KFL', path: '/industries/packaging/kiefel-fiber/kfl' },
    { name: 'Upstream & Downstream', path: '/industries/packaging/machines/upstream-downstream' },
    { name: 'Stacking Automation', path: '/industries/packaging/machines/stacking-automation' },
    
    // Recycling Industry
    { name: 'Recycling', path: '/industries/recycling' },
    { name: 'Washing', path: '/industries/recycling/washing' },
    { name: 'Sorting', path: '/industries/recycling/sorting' },
    { name: 'Starlinger Recycling', path: '/industries/recycling/starlinger-recycling' },
    
    // Starlinger Machines - Both old and new paths
    { name: 'recoSTAR dynamic', path: '/industries/recycling/starlinger-recycling/recostar-dynamic' },
    { name: 'recoSTAR PET', path: '/industries/recycling/starlinger-recycling/recostar-pet' },
    { name: 'recoSTAR universal', path: '/industries/recycling/starlinger-recycling/recostar-universal' },
    { name: 'recoSTAR direct', path: '/industries/recycling/starlinger-recycling/recostar-direct' },
    { name: 'recoSTAR dynamic', path: '/industries/recycling/machines/recostar-dynamic' },
    { name: 'recoSTAR PET', path: '/industries/recycling/machines/recostar-pet' },
    { name: 'recoSTAR universal', path: '/industries/recycling/machines/recostar-universal' },
    { name: 'recoSTAR direct', path: '/industries/recycling/machines/recostar-direct' },
    
    // Appliance Industry
    { name: 'Appliance', path: '/industries/appliance' },
    { name: 'Kiefel Appliance', path: '/industries/appliance/kiefel-appliance' },
    
    // Food & Pharmaceutical
    { name: 'Food & Pharmaceutical', path: '/industries/food-pharma' },
    { name: 'Food & Pharmaceutical Overview', path: '/industries/food-pharmaceutical' },

    // Add alternate spellings/common misspellings
    { name: 'Kieffel', path: '/industries/packaging/kiefel' },
    { name: 'Kieffel Packaging', path: '/industries/packaging/kiefel' },
    { name: 'Kiefel Packging', path: '/industries/packaging/kiefel' },
    { name: 'Viscotech', path: '/industries/packaging/viscotec' },
    { name: 'Visco tec', path: '/industries/packaging/viscotec' },
    { name: 'Visco Sheet', path: '/industries/packaging/viscosheet' },
    { name: 'Visco Zero', path: '/industries/packaging/viscozero' },
    { name: 'Nature Former', path: '/industries/packaging/machines/fiber/natureformer-kft' },
    { name: 'Natureformer', path: '/industries/packaging/kiefel-fiber' },
    { name: 'Recycling Solutions', path: '/industries/recycling' },
    { name: 'Starlinger', path: '/industries/recycling/starlinger-recycling' },
    { name: 'Recostar', path: '/industries/recycling/starlinger-recycling' },
    { name: 'Reco Star', path: '/industries/recycling/starlinger-recycling' },
    { name: 'Dynamic', path: '/industries/recycling/machines/recostar-dynamic' },
    { name: 'Universal', path: '/industries/recycling/machines/recostar-universal' },
    { name: 'Direct', path: '/industries/recycling/machines/recostar-direct' },
    { name: 'PET', path: '/industries/recycling/machines/recostar-pet' },
    { name: 'KMD', path: '/industries/packaging/kiefel/kmd' },
    { name: 'KTR', path: '/industries/packaging/kiefel/ktr' },
  ];

  // Initialize Fuse instance with options for fuzzy search
  const fuse = new Fuse(searchableContent, {
    keys: ['name'],
    threshold: 0.4, // Lower threshold means stricter matching
    distance: 100, // How far to extend the fuzzy match
    ignoreLocation: true,
    shouldSort: true,
  });

  // Handle search
  useEffect(() => {
    if (searchQuery) {
      const results = fuse.search(searchQuery);
      setSearchResults(results.map(result => result.item));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Handle result selection
  const handleResultClick = (path) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(path);
  };

  // Search Modal Component
  const SearchModal = () => (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
      onClick={() => setIsSearchOpen(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-100 flex items-center">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-lg border-none focus:outline-none text-gray-700 placeholder-gray-400"
            autoFocus
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-4">
          {searchQuery ? (
            searchResults.length > 0 ? (
              <div className="space-y-2">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result.path)}
                    className="w-full px-4 py-3 hover:bg-gray-50 rounded-lg text-left transition-colors flex items-center group"
                  >
                    <Search className="w-4 h-4 mr-3 text-gray-400" />
                    <span className="text-gray-700 group-hover:text-primary">
                      {result.name}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No results found for "{searchQuery}"
              </div>
            )
          ) : (
            <>
              <div className="text-sm text-gray-500 mb-4">
                Popular searches:
              </div>
              {['Viscotec', 'recoSTAR', 'Kiefel Packaging', 'Kiefel Fiber', 'Recycling'].map((term, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(term)}
                  className="block w-full px-4 py-2 hover:bg-gray-50 rounded-lg text-gray-700 transition-colors text-left"
                >
                  <div className="flex items-center">
                    <Search className="w-4 h-4 mr-3 text-gray-400" />
                    {term}
                  </div>
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );

  const helpfulLinks = [
    {
      title: "Sitemap",
      description: "View our complete site structure",
      icon: Map,
      link: "/sitemap",
    },
    {
      title: "Search",
      description: "Find what you're looking for",
      icon: Search,
      action: () => setIsSearchOpen(true),
    },
    {
      title: "Help Center",
      description: "Browse our help documentation",
      icon: HelpCircle,
      link: "/help",
    },
    {
      title: "Contact Us",
      description: "Get in touch with our support team",
      icon: Mail,
      link: "/contact",
    },
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-7xl font-bold mb-2">404</h1>
              <div className="w-16 h-1 bg-white/30 mx-auto mb-3"></div>
              <h2 className="text-xl font-semibold mb-1">Page Not Found</h2>
              <p className="text-white/80 text-sm">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            </div>
          </div>

          {/* Helpful Resources */}
          <div className="p-6">
            <h3 className="text-base font-semibold text-gray-800 mb-4 text-center">
              Helpful Resources
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {helpfulLinks.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {item.link ? (
                    <Link
                      to={item.link}
                      className="flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div className="flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {item.description}
                        </p>
                      </div>
                      <ExternalLink className="w-3 h-3 ml-auto text-gray-400 group-hover:text-primary" />
                    </Link>
                  ) : (
                    <button
                      onClick={item.action}
                      className="w-full flex items-start p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div className="flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="ml-3 text-left">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {item.description}
                        </p>
                      </div>
                      <ExternalLink className="w-3 h-3 ml-auto text-gray-400 group-hover:text-primary" />
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-4 text-center">
            <p className="text-xs text-gray-600">
              Still need help? Our support team is available 24/7 at{' '}
              <a href="mailto:support@inserra.com" className="text-primary hover:text-primary-dark">
                support@inserra.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && <SearchModal />}
    </div>
  );
};

export default NotFound; 