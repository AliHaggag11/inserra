import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cog, Gauge, Wrench } from 'lucide-react';

const UniMillBSeries = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const keyFeatures = [
    "Perfect for heat sensitive materials or rugged applications",
    "Lower noise due to belt-driven operation",
    "Achieve various particle sizes on one machine, simply by changing screen and/or impeller (spacers required)",
    "Various screens available to meet the demands of many different applications and processes"
  ];

  const specifications = [
    {
      model: "Uni Mill M10-B",
      throughput: "360 kgs/hr (800 lbs/hr)",
      screenDiameter: "127mm (5\")",
      motor: "1.5 kW (2 HP)",
      weight: "150 kgs (330 lbs)",
      speed: "2440 RPM"
    },
    {
      model: "Uni Mill M20-B",
      throughput: "1800 kgs/hr (4000 lbs/hr)",
      screenDiameter: "203mm (8\")",
      motor: "4.0 kW (5 HP)",
      weight: "200 kgs (400 lbs)",
      speed: "1480 RPM"
    },
    {
      model: "Uni Mill M30-B",
      throughput: "3600 kgs/hr (8000 lbs/hr)",
      screenDiameter: "305mm (12\")",
      motor: "7.5 kW (10 HP)",
      weight: "250 kgs (550 lbs)",
      speed: "960 RPM"
    },
    {
      model: "Uni Mill M60-B",
      throughput: "7200 kgs/hr (16000 lbs/hr)",
      screenDiameter: "609mm (24\")",
      motor: "15 kW (20 HP)",
      weight: "475 kgs (1045 lbs)",
      speed: "480 RPM"
    }
  ];

  const features = [
    {
      title: "Stainless Steel Construction",
      description: "316L contact parts",
      icon: Shield
    },
    {
      title: "FDA Compliant",
      description: "All seals FDA compliant (silicone, PTFE etc.)",
      icon: Gauge
    },
    {
      title: "ATEX / Ex-Proof",
      description: "ATEX (ex-proof) versions available",
      icon: Wrench
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
              <h1 className="text-5xl font-bold mb-6">Uni-Mill B-Series</h1>
              <div className="w-24 h-1 bg-white/30 mb-6"></div>
              <p className="text-2xl text-blue-100 mb-6">
                Industry standard over-driven conical mill design for optimal particle size reduction
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Advanced milling technology featuring belt-driven operation, ideal for heat-sensitive materials and rugged applications.
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
                  src="/images/hanningfield/product-canical-under-driven.jpg"
                  alt="Uni-Mill B-Series Machine"
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
                    <div className="text-2xl font-bold text-primary">ATEX</div>
                    <div className="text-sm text-gray-600">Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">60°</div>
                    <div className="text-sm text-gray-600">Screen Angle</div>
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

      {/* Technical Description */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Description</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
            </div>
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Design & Operation</h3>
              <p className="text-gray-600 mb-6">
                The Hanningfield Uni-Mill B-Series (M10-B, M20-B, M30-B, M60-B) utilises the current industry standard over-driven conical mill design, featuring a belt-driven impeller, rotating inside a screen (60° inclusive screen angle). This principle achieves comminution by compression and shearing of the particles between the impeller and surface of the screen.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Construction</h3>
              <p className="text-gray-600 mb-6">
                As standard, all contact parts are manufactured from 316L stainless steel (180 grit), with FDA compliant seals, gaskets etc. Non-contact parts such as frames, motor covers and control panels are manufactured from 304 stainless steel (150 grit). All standard materials of construction and surface finishes can be upgraded or downgraded upon request.
              </p>

              <h3 className="text-xl font-semibold mb-4">Customise Your Mill</h3>
              <p className="text-gray-600 mb-6">
                Various mounting solutions are available and the conical mill can be customised with a selection of inlet and outlet configurations including hand-feed chute, valve assemblies, tri-clover connections, vacuum adaptors or any other bespoke design required for process integration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Features & Benefits</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
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
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Specifications</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                Comprehensive specifications for all Uni-Mill B-Series models, designed to meet various production requirements
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl shadow-xl bg-white">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-primary to-primary-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Model</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Max Throughput</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Screen Diameter</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Standard Motor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Weight</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Speed</th>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.throughput}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.screenDiameter}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.motor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.weight}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.speed}</td>
                    </tr>
                  ))}
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
                    <span>Custom configurations available upon request</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">≤ 150</div>
                <div className="text-sm text-gray-600">Microns Particle Size</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">&lt; 78dB</div>
                <div className="text-sm text-gray-600">Noise Level</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">316L</div>
                <div className="text-sm text-gray-600">Stainless Steel</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">60°</div>
                <div className="text-sm text-gray-600">Screen Angle</div>
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
            <div className="flex justify-center gap-4">
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
    </div>
  );
};

export default UniMillBSeries; 