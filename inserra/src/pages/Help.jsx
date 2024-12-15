import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search,
  ChevronRight,
  Book,
  FileText,
  Mail,
  Phone,
  MessageCircle,
  PlayCircle,
  Download,
  Clock,
  ChevronDown,
  MapPin,
  Globe
} from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    {
      title: "Getting Started",
      icon: PlayCircle,
      description: "New to Inserra? Start here",
      articles: [
        "Machine Installation Guide",
        "Basic Operation Manual",
        "Safety Guidelines"
      ]
    },
    {
      title: "Product Documentation",
      icon: Book,
      description: "Detailed product information",
      articles: [
        "Machine Specifications",
        "Technical Documentation",
        "Maintenance Schedules"
      ]
    },
    {
      title: "Downloads",
      icon: Download,
      description: "Software and documents",
      articles: [
        "Technical Datasheets",
        "Product Brochures",
        "Safety Manuals"
      ]
    },
    {
      title: "Support Hours",
      icon: Clock,
      description: "When we're available",
      articles: [
        "Service Centers",
        "Emergency Support",
        "Regional Contacts"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I request technical support?",
      answer: "You can request technical support by contacting our support team through the contact form, email, or phone. For urgent matters, please use our emergency support line at +20 1220 566 640."
    },
    {
      question: "What are your support hours?",
      answer: "Our standard support hours are Monday to Friday, 9:00 AM to 5:00 PM (EET). Saturday: 10:00 AM - 2:00 PM. Emergency support is available 24/7 for critical issues."
    },
    {
      question: "How can I access machine documentation?",
      answer: "All machine documentation is freely available in our Downloads section. You can find technical datasheets, manuals, and brochures for all our products there."
    },
    {
      question: "Where can I find spare parts information?",
      answer: "Spare parts information can be found in the Product Documentation section under Technical Documentation. Each machine has a dedicated spare parts catalog."
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Cairo, Egypt",
      link: "https://goo.gl/maps/yourLocation",
      linkText: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+20 1220 566 640",
      link: "tel:+201220566640",
      linkText: "Call Us"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "info@insera-eg.com",
      link: "mailto:info@insera-eg.com",
      linkText: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 5:00 PM",
      subContent: "Saturday: 10:00 AM - 2:00 PM"
    }
  ];

  // Filter function for search
  const filteredContent = useMemo(() => {
    if (!searchQuery.trim()) {
      return { categories, faqs };
    }

    const query = searchQuery.toLowerCase();

    // Filter categories and their articles
    const filteredCategories = categories.map(category => ({
      ...category,
      articles: category.articles.filter(article =>
        article.toLowerCase().includes(query)
      ),
      matched: category.title.toLowerCase().includes(query) ||
               category.description.toLowerCase().includes(query)
    })).filter(category => category.matched || category.articles.length > 0);

    // Filter FAQs
    const filteredFaqs = faqs.filter(faq =>
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    );

    return {
      categories: filteredCategories,
      faqs: filteredFaqs
    };
  }, [searchQuery]);

  // Search handler with debounce
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              How can we help you?
            </motion.h1>
            <motion.p
              className="text-xl text-blue-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Find answers, documentation, and support for all your needs
            </motion.p>
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-14 pr-4 py-5 rounded-2xl bg-white/10 backdrop-blur-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-white/20 transition-all text-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-12 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Help Categories */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {filteredContent.categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article}>
                      <Link 
                        to="#" 
                        className="text-sm text-gray-600 hover:text-primary flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 mr-1 transform group-hover:translate-x-1 transition-transform" />
                        {article}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQs */}
          {filteredContent.faqs.length > 0 && (
            <motion.div
              className="mb-16 bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {searchQuery ? 'Search Results' : 'Frequently Asked Questions'}
              </h2>
              <div className="space-y-4">
                {filteredContent.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <button
                      className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-primary transform transition-transform duration-300 ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 py-4 bg-gray-50">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Show "No results" message when search yields nothing */}
          {searchQuery && filteredContent.categories.length === 0 && filteredContent.faqs.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No results found for "{searchQuery}"
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or contact our support team for assistance.
              </p>
            </motion.div>
          )}

          {/* Contact Information */}
          <motion.div
            className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex items-start">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                      <p className="text-blue-200 mb-2">{info.content}</p>
                      {info.subContent && (
                        <p className="text-blue-200 text-sm">{info.subContent}</p>
                      )}
                      {info.link && (
                        <a 
                          href={info.link}
                          className="inline-flex items-center text-blue-300 hover:text-white transition-colors duration-300"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.linkText} →
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Help; 