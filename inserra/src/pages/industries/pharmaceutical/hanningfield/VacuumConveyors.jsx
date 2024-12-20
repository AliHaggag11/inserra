import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cog, Gauge, Wrench } from 'lucide-react';

const VacuumConveyors = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const keyFeatures = [
    "Automate and accelerate loading process",
    "Dust-tight transfer of material from A to B",
    "Reduce manual handling (horizontal and vertical transfer)",
    "Suitable for powders, granules, flakes, pellets etc.",
    "ATEX (ex-proof) versions available",
    "Optional 'stepless' design for damage-free transfer of tablets or other fragile materials"
  ];

  const features = [
    {
      title: "Stainless Steel Construction",
      description: "316L contact parts with FDA compliant seals",
      icon: Shield
    },
    {
      title: "ATEX / Ex-proof",
      description: "ATEX (ex-proof) versions available",
      icon: Gauge
    }
  ];

  const specifications = [
    {
      model: "Uni-Vac V-Series V05",
      throughput: "300 kgs/hr (660 lbs/hr)",
      hopperDiameter: "270mm (10.6\")",
      hopperHeight: "600mm (23.6\")",
      hopperCapacity: "5 litres",
      hoseDiameter: "1.0 / 1.5 inches"
    },
    {
      model: "Uni-Vac V-Series V10",
      throughput: "900 kgs/hr (2000 lbs/hr)",
      hopperDiameter: "450mm (17.7\")",
      hopperHeight: "1000mm (39.3\")",
      hopperCapacity: "10 litres",
      hoseDiameter: "1.5 inches"
    },
    {
      model: "Uni-Vac V-Series V20",
      throughput: "1200 kgs/hr (2650 lbs/hr)",
      hopperDiameter: "450mm (17.7\")",
      hopperHeight: "1100mm (43.3\")",
      hopperCapacity: "20 litres",
      hoseDiameter: "1.5 / 2.0 inches"
    },
    {
      model: "Uni-Vac V-Series V30",
      throughput: "2000 kgs/hr (4500 lbs/hr)",
      hopperDiameter: "450mm (17.7\")",
      hopperHeight: "1400mm (55\")",
      hopperCapacity: "30 litres",
      hoseDiameter: "1.5 / 2.0 inches"
    }
  ];

  const technicalDetails = {
    designOperation: {
      title: "Design & Operation",
      description: "Hanningfield Uni-Vac vacuum conveyors are designed as a safe and convenient method for transferring powder. The system utilises a combination of vacuum and air (known as 'Lean-Phase' or 'Dilute-Phase') to transport powders, granules and other material."
    },
    dustTight: {
      title: "Dust-Tight System",
      description: "The dust-tight sealed system prevents material contamination during the transfer process, while protecting the operator, process and environment from product exposure or accidental spillage (thereby minimising waste)."
    },
    vcSeries: {
      title: "Uni-Vac VC-Series",
      description: "This is our standard vacuum conveying system which is suited for the majority of process applications. It is also the best choice for ATEX environments."
    },
    vSeries: {
      title: "Uni-Vac V-Series",
      description: "If you are looking for a conveying solution that does not require compressed air to operate, then the V-Series is right for you. It is also the better option for process rooms with height restrictions."
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
              <h1 className="text-5xl font-bold mb-6">Vacuum Conveyors</h1>
              <div className="w-24 h-1 bg-white/30 mb-6"></div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Hanningfield Uni-Vac vacuum conveyors are designed as a safe and convenient method for transferring powder.
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
                  src="/images/hanningfield/Uni-Vac.jpg"
                  alt="Vacuum Conveyors"
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

      {/* Technical Description */}
      <div className="py-24 bg-gray-50">
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
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Specifications</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                Comprehensive specifications for all Uni-Vac V-Series models
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl shadow-xl bg-white">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-primary to-primary-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Model</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Max Throughput</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Hopper Diameter</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Hopper Height</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Hopper Capacity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Standard Hose Diameter</th>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.hopperDiameter}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.hopperHeight}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.hopperCapacity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{spec.hoseDiameter}</td>
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
                        <span>Country of Design: {additionalSpecs.countryOfDesign}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                        <span>Country of Manufacture: {additionalSpecs.countryOfManufacture}</span>
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

export default VacuumConveyors; 