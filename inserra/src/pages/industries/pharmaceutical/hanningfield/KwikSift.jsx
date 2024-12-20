import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cog, Gauge, Wrench, Filter, Zap } from 'lucide-react';

const KwikSift = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const keyFeatures = [
    "Fast and effective powder screening",
    "Helps guarantee material integrity",
    "Captures alien objects",
    "Efficient processing",
    "Various screens available to meet the demands of many different applications and processes"
  ];

  const specifications = [
    {
      model: "Kwik-Sift KS05",
      capacity: "5 - 500 kgs/hr (10 - 1100 lbs/hr)",
      screenDiameter: "83mm (3.25in)",
      motor: "0.375 kW (0.5 HP)",
      weight: "40 kgs (90 lbs)"
    },
    {
      model: "Kwik-Sift KS10",
      capacity: "350 - 7500 kgs/hr (800 - 16500 lbs/hr)",
      screenDiameter: "127mm (5\")",
      motor: "1.5 kW (2 HP)",
      weight: "140 kgs (310 lbs)"
    },
    {
      model: "Kwik-Sift KS20",
      capacity: "1100 - 23000 kgs/hr (2400 - 52000 lbs/hr)",
      screenDiameter: "203mm (8\")",
      motor: "4.0 kW (5 HP)",
      weight: "160 kgs (350 lbs)"
    }
  ];

  const additionalSpecs = {
    noiseLevel: "<78dB",
    contactParts: "316L stainless steel (1.4404)",
    nonContactParts: "304 stainless steel (1.4301)",
    countryOfDesign: "United Kingdom",
    countryOfManufacture: "United Kingdom"
  };

  const features = [
    {
      title: "High Throughput",
      description: "Fast and effective powder screening",
      icon: Zap
    },
    {
      title: "Material Integrity",
      description: "Guaranteed material quality through screening",
      icon: Shield
    },
    {
      title: "Versatile Screening",
      description: "Multiple screen options available",
      icon: Filter
    },
    {
      title: "GMP Design",
      description: "Easy-clean design with tool-free disassembly",
      icon: Cog
    }
  ];

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
              <h1 className="text-5xl font-bold mb-6">Kwik-Sift Series</h1>
              <div className="w-24 h-1 bg-white/30 mb-6"></div>
              <p className="text-2xl text-blue-100 mb-6">
                Advanced centrifugal screening technology for optimal powder processing
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Fast and effective powder screening solution that helps guarantee material integrity through the capture of alien objects.
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
                  src="/images/hanningfield/sifters.jpg"
                  alt="Kwik-Sift Machine"
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
                    <div className="text-sm text-gray-600">Compliant</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">78dB</div>
                    <div className="text-sm text-gray-600">Max Noise</div>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Specifications</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                Comprehensive specifications for all Kwik-Sift models
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl shadow-xl bg-white">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-primary to-primary-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Model</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Typical Capacities</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Screen Diameter</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Standard Motor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {specifications.map((spec, index) => (
                    <tr 
                      key={index} 
                      className={`hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{spec.model}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.capacity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.screenDiameter}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.motor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Construction</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                        <span>Contact Parts: {additionalSpecs.contactParts}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                        <span>Non-Contact Parts: {additionalSpecs.nonContactParts}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Additional Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                        <span>Typical Noise Level: {additionalSpecs.noiseLevel}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                        <span>Country of Origin: {additionalSpecs.countryOfManufacture}</span>
                      </div>
                    </div>
                  </div>
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

export default KwikSift; 