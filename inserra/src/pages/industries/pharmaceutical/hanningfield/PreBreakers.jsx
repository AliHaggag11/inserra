import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cog, Gauge, Wrench, Hammer, Link2 } from 'lucide-react';

const PreBreakers = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const keyFeatures = [
    "Compact design for in-line installation",
    "No metal to metal contact",
    "Connection to upstream or downstream equipment by Tri-Clovers",
    "Easy clean GMP design",
    "Fast macro size-reduction, perfect for pre-milling"
  ];

  const features = [
    {
      title: "Compact Design",
      description: "Space-efficient inline installation",
      icon: Cog
    },
    {
      title: "GMP Compliant",
      description: "Easy-clean design for pharmaceutical use",
      icon: Shield
    },
    {
      title: "Versatile Connection",
      description: "Tri-Clover fittings for easy integration",
      icon: Link2
    },
    {
      title: "Size Reduction",
      description: "Efficient pre-milling capabilities",
      icon: Hammer
    }
  ];

  const specifications = {
    construction: {
      contactParts: "316L stainless steel (1.4404)",
      nonContactParts: "304 stainless steel (1.4301)",
      surfaceFinish: "0.4μm Ra",
      seals: "FDA compliant materials"
    },
    operation: {
      noiseLevel: "<78dB",
      motorOptions: "Various power options available",
      connections: "Tri-Clover as standard",
      cleaning: "Tool-free disassembly"
    },
    certification: {
      design: "United Kingdom",
      manufacture: "United Kingdom",
      compliance: "FDA, GMP standards"
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
              <h1 className="text-5xl font-bold mb-6">Pre-Breakers</h1>
              <div className="w-24 h-1 bg-white/30 mb-6"></div>
              <p className="text-2xl text-blue-100 mb-6">
                Advanced pre-milling solution for pharmaceutical processing
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Compact and efficient pre-breaking system designed for seamless integration into your production line.
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
                  src="/images/hanningfield/prebreakers.jpg"
                  alt="Pre-Breakers Machine"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">316L</div>
                    <div className="text-sm text-gray-600">Steel Grade</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">GMP</div>
                    <div className="text-sm text-gray-600">Design</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">0.4μm</div>
                    <div className="text-sm text-gray-600">Surface Finish</div>
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

      {/* Specifications */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Specifications</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Construction */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Construction</h3>
                <div className="space-y-3">
                  {Object.entries(specifications.construction).map(([key, value]) => (
                    <div key={key} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: {value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operation */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Operation</h3>
                <div className="space-y-3">
                  {Object.entries(specifications.operation).map(([key, value]) => (
                    <div key={key} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: {value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certification */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Certification</h3>
                <div className="space-y-3">
                  {Object.entries(specifications.certification).map(([key, value]) => (
                    <div key={key} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: {value}</span>
                    </div>
                  ))}
                </div>
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

export default PreBreakers; 