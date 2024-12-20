import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Gauge, Sliders, Volume2 } from 'lucide-react';

const CapsuleConveyors = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const keyFeatures = [
    "Eliminates manual handling",
    "Ensures filling machine never 'runs dry'",
    "Gentle convey with virtually zero capsule damage",
    "Suitable for all sizes of hard shell capsule"
  ];

  const features = [
    {
      title: "Stainless Steel Construction",
      description: "316L contact parts with FDA compliant seals",
      icon: Shield
    },
    {
      title: "FDA Compliant",
      description: "All seals FDA compliant (silicone, PTFE etc.)",
      icon: Gauge
    },
    {
      title: "Level Control (optional)",
      description: "Optional level control in filling machine hopper to automate loading process",
      icon: Sliders
    },
    {
      title: "Low Noise",
      description: "Very low noise levels for a better working environment",
      icon: Volume2
    }
  ];

  const specifications = [
    {
      model: "CapsuJet C20",
      applicationType: "Transfer of Empty Capsules",
      transferRate: "300,000 capsules/hr",
      verticalDistance: "10m (33ft)",
      horizontalDistance: "5m (16ft)",
      hopperSize: "200L / 100,000 size \"o\" capsules",
      dimensions: "(H) 1180mm x (W) 760mm x (L) 1215mm / (H) 46in x (W) 30in x (L) 48in",
      weight: "150 kgs (330 lbs)"
    },
    {
      model: "CapsuJet FCC",
      applicationType: "Transfer of Filled Capsules",
      transferRate: "200,000 capsules/hr",
      verticalDistance: "5m (16ft)",
      horizontalDistance: "2.5m (8ft)",
      hopperSize: "No hopper required",
      dimensions: "(H) 1150mm x (W) 500mm x (L) 885mm / (H) 45in x (W) 20 in x (L) 35in",
      weight: "150 kgs (330 lbs)"
    }
  ];

  const technicalDetails = {
    designOperation: {
      title: "Design & Operation",
      description: "Designed to overcome the problems of conventional mechanical systems, the CapsuJet is ideal for the automatic loading and unloading of capsule filling machines. The CapsuJet C20 capsule transfer system is designed for the loading of empty capsules from ground level into the capsule filling machine. The C20 is capable of loading up to 300,000 capsules per hour. The CapsuJet FCC capsule transfer system is designed for the unloading of capsule filling machines, transferring filled capsules to a downstream container or process. The FCC can transfer up to 200,000 capsules per hour."
    },
    construction: {
      title: "Construction",
      description: "As standard, both capsule transfer system models are constructed with all contact parts manufactured from 316L stainless steel (180 grit), with FDA compliant seals, gaskets etc. Non-contact parts such as frames, motor covers and control panels are manufactured from 304 stainless steel (150 grit). All standard materials of construction and surface finishes can be upgraded or downgraded upon request."
    },
    documentation: {
      title: "Documentation",
      description: "All equipment can be fully customised to satisfy specific application requirements and can be supplied with full validation documents (FS/DS, FAT, SAT, IQ/OQ) and mill certificates to EN10204 (3.1)."
    }
  };

  const additionalSpecs = {
    contactParts: "316L stainless steel (1.4404)",
    nonContactParts: "304 stainless steel (1.4301)",
    countryOfDesign: "United Kingdom",
    countryOfManufacture: "United Kingdom"
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
              <h1 className="text-5xl font-bold mb-6">Capsule Conveyors</h1>
              <div className="w-24 h-1 bg-white/30 mb-6"></div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                The Hanningfield CapsuleJet capsule transfer system is a proven method for the gentle conveying of hard-shelled gelatin capsules.
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
                  to="/industries/pharmaceutical/hanningfield/conveying-and-transfer"
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
                  src="/images/hanningfield/CapsuJet.jpg"
                  alt="Capsule Conveyors"
                  className="w-full h-full object-contain rounded-lg"
                />
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

      {/* Technical Description */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Description</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-1 gap-8">
              {Object.values(technicalDetails).map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{section.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Table */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Specification</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
            </div>
            <div className="overflow-x-auto rounded-xl shadow-xl bg-white">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-primary to-primary-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white"></th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">CapsuJet C20</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">CapsuJet FCC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Application Type</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Transfer of Empty Capsules</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Transfer of Filled Capsules</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Transfer Rate</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">300,000 capsules/hr</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">200,000 capsules/hr</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Max. Vertical Convey Distance</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">10m (33ft)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">5m (16ft)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Max. Horizontal Convey Distance</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">5m (16ft)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2.5m (8ft)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Standard Hopper Size</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">200L / 100,000 size "o" capsules</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">No hopper required</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Approx Dimensions</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">(H) 1180mm x (W) 760mm x (L) 1215mm / (H) 46in x (W) 30in x (L) 48in</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">(H) 1150mm x (W) 500mm x (L) 885mm / (H) 45in x (W) 20 in x (L) 35in</td>
                  </tr>
                </tbody>
              </table>
              {/* Shared Specifications */}
              <table className="min-w-full">
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">Approx. Weight</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">150 kgs (330 lbs)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Contact Parts</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">316L stainless steel (1.4404)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Non-Contact Parts</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">304 stainless steel (1.4301)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Country of Design</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">United Kingdom</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Country of Manufacture</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">United Kingdom</td>
                  </tr>
                </tbody>
              </table>
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

export default CapsuleConveyors; 