import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cog, Gauge, Wrench, Hammer, ArrowDownUp } from 'lucide-react';

const LumpBreakers = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const mainDescription = "The Hanningfield Lump Breaker is designed for the simple deagglomeration of compacted material into smaller particles. Lump breakers can process up to 10,000 kgs/hr (depending on application specifics) and are capable of particle size reduction down to 10mm.";

  const keyFeatures = [
    "High throughput solution for breaking agglomerated material",
    "Perfect for pre-milling by reducing particle to manageable size",
    "Can be mounted in-line for feeding downstream process (gravity feed or vacuum transfer)",
    "Breaker bars can be removed for easy clean"
  ];

  const features = [
    {
      title: "High Throughput",
      description: "Process up to 10,000 kgs/hr",
      icon: ArrowDownUp
    },
    {
      title: "Size Reduction",
      description: "Down to 10mm particle size",
      icon: Hammer
    },
    {
      title: "Easy Clean",
      description: "Removable breaker bars",
      icon: Wrench
    },
    {
      title: "Versatile Installation",
      description: "In-line mounting capability",
      icon: Cog
    }
  ];

  const specifications = {
    performance: {
      throughput: "Up to 10,000 kgs/hr",
      particleSize: "Down to 10mm",
      feedTypes: "Gravity or vacuum transfer",
      operation: "Continuous processing"
    },
    construction: {
      material: "316L stainless steel contact parts",
      finish: "Pharmaceutical grade finish",
      design: "GMP compliant",
      cleaning: "Tool-free breaker bar removal"
    },
    installation: {
      mounting: "In-line installation capable",
      feeding: "Gravity or vacuum transfer compatible",
      integration: "Easy process line integration",
      maintenance: "Easy access for cleaning"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              <h1 className="text-5xl font-bold mb-6">Lump Breakers</h1>
              <div className="w-24 h-1 bg-white/30 mb-6"></div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {mainDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 flex items-center"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/industries/pharmaceutical/hanningfield/milling-sizing"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300 flex items-center"
                >
                  View All Products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm p-4">
                <img
                  src="/images/hanningfield/lump.jpg"
                  alt="Lump Breakers Machine"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10k</div>
                    <div className="text-sm text-gray-600">kg/hr Max</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">10mm</div>
                    <div className="text-sm text-gray-600">Min Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">GMP</div>
                    <div className="text-sm text-gray-600">Compliant</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Information</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto mb-8"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                  <p className="text-gray-600">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Features & Benefits</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Table */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Specifications</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                Comprehensive specifications for all Lump Breaker models, designed to meet various production requirements
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl shadow-xl bg-white">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-primary to-primary-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Model</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Throughput Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Power</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Speed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">LB150</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Up to 2,500 kg/hr</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">1.5 kW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">280 rpm</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">LB200</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Up to 5,000 kg/hr</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2.2 kW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">280 rpm</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">LB250</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Up to 7,500 kg/hr</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">3.0 kW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">280 rpm</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-white">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">LB300</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Up to 10,000 kg/hr</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">4.0 kW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">280 rpm</td>
                  </tr>
                </tbody>
              </table>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                    <span>All specifications are subject to change without notice</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                    <span>Throughput rates are application dependent</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">316L</div>
                <div className="text-sm text-gray-600">Stainless Steel</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">10mm</div>
                <div className="text-sm text-gray-600">Min Particle Size</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">GMP</div>
                <div className="text-sm text-gray-600">Compliant</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">ATEX</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Learn More?</h2>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-lg text-blue-100 mb-6">
              Contact us to discuss your specific requirements or request a quote
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition duration-300 inline-flex items-center"
            >
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LumpBreakers; 