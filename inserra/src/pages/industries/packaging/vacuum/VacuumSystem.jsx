// Required assets (to be replaced with actual images):
// - Logo: /images/viscotec/logo.svg
// - Machine: /images/viscotec/vacuum-machine.png

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Gauge, Settings, Layout } from 'lucide-react';

const VacuumSystem = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    { 
      title: "Low power consumption and maintenance",
      icon: <Zap className="w-6 h-6" />
    },
    { 
      title: "High suction capacity",
      icon: <Gauge className="w-6 h-6" />
    },
    { 
      title: "Easy operation via control panel",
      icon: <Settings className="w-6 h-6" />
    },
    { 
      title: "Compact platform design",
      icon: <Layout className="w-6 h-6" />
    }
  ];

  const technicalSpecs = {
    specs: {
      suctionCapacity: "1000",
      vacuum: "<10",
      height: "2.5",
      floorspace: "3.2 x 1.65",
      energyConsumption: "5.8"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <span>/</span>
            <Link to="/industries/packaging" className="hover:text-primary">Packaging</Link>
            <span>/</span>
            <Link to="/industries/packaging/viscotec" className="hover:text-primary">Viscotec</Link>
            <span>/</span>
            <span className="text-primary">vacuum-system</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              <motion.img 
                src="/images/viscotec/logo.svg"
                alt="Viscotec Logo" 
                className="h-12 w-auto mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              <h1 className="text-5xl font-bold mb-6">vacuum system</h1>
              <p className="text-2xl text-blue-100 mb-6">
                The compact and low-maintenance vacuum module.
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Designed for energy efficient vacuum performance. Save energy and costs with the new 
                viscotec vacuum system.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300 flex items-center"
                >
                  Contact Sales
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
                  src="https://placehold.co/800x450/e2e8f0/475569?text=Vacuum+System&font=roboto"
                  alt="Vacuum System"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">High</div>
                    <div className="text-sm text-gray-600">Suction</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">Low</div>
                    <div className="text-sm text-gray-600">Maintenance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">Easy</div>
                    <div className="text-sm text-gray-600">Operation</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">vac1000 Benefits</h2>
            <p className="text-gray-600">Advanced features for optimal performance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Technical Data</h2>
            <p className="text-gray-600">Specifications for vac1000</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Main Data</th>
                      <th className="px-6 py-4 text-left">vac1000</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">approx. suction capacity¹ [m³/h]</td>
                      <td className="px-6 py-4">{technicalSpecs.specs.suctionCapacity}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">vacuum [mbar]</td>
                      <td className="px-6 py-4">{technicalSpecs.specs.vacuum}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Equipment height [m]</td>
                      <td className="px-6 py-4">{technicalSpecs.specs.height}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Floorspace [m]</td>
                      <td className="px-6 py-4">{technicalSpecs.specs.floorspace}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">approx. Energy consumption [kW]</td>
                      <td className="px-6 py-4">{technicalSpecs.specs.energyConsumption}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <div className="space-y-2 text-sm text-gray-600">
                <p>¹ at operating point</p>
                <p className="mt-4">Above table represents general technical data and average values. We reserve the right of technical modifications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Production?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to learn more about how our vacuum system can optimize your process
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 flex items-center"
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

export default VacuumSystem; 