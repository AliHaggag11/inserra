// Required assets (to be replaced with actual images):
// - Logo: /images/viscotec/logo.svg
// - Machine: /images/viscotec/viscosheet-machine.png

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Factory, Recycle, Settings, Zap } from 'lucide-react';

const ViscoSheet = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    { title: "Entire solution – one supplier", icon: <Factory className="w-6 h-6" /> },
    { title: "No virgin material necessary", icon: <Recycle className="w-6 h-6" /> },
    { title: "Immediate effect on recipe change", icon: <Settings className="w-6 h-6" /> },
    { title: "Master control panel – one software", icon: <Settings className="w-6 h-6" /> },
    { title: "autoSTART function", icon: <Zap className="w-6 h-6" /> },
    { title: "viscotec as your partner", icon: <CheckCircle2 className="w-6 h-6" /> }
  ];

  const technicalSpecs = {
    extruders: [
      {
        type: "PET flakes/pellets",
        output: "1000-2200",
        material: "I, II, III, IV",
        thickness: "150-1800"
      },
      {
        type: "PP, PS, HIPS",
        output: "700-1500",
        material: "I",
        thickness: "150-1800"
      }
    ],
    calendarSpecs: [
      {
        model: "CAL 1200",
        cooledWidth: "1200 mm",
        netSheet: "600-1050 mm",
        capacity: "950-1600 kg/h"
      },
      {
        model: "CAL 1600",
        cooledWidth: "1600 mm",
        netSheet: "900-1450 mm",
        capacity: "1400-2100 kg/h"
      },
      {
        model: "CAL 2000",
        cooledWidth: "2000 mm",
        netSheet: "1300-1850 mm",
        capacity: "2000-2700 kg/h"
      },
      {
        model: "CAL 2400",
        cooledWidth: "2400 mm",
        netSheet: "1700-2250 mm",
        capacity: "2500-3300 kg/h"
      }
    ]
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
            <span className="text-primary">viscoSHEET</span>
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
              <h1 className="text-5xl font-bold mb-6">viscoSHEET</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Quality and flexibility without compromise. Up to 100% rPET and inhouse flakes processable 
                at guaranteed iV-Levels for direct food contact.
              </p>
              <p className="text-lg text-blue-100 mb-8">
                viscoSHEET ensures outstanding flexibility in production with lowest energy consumption. 
                Up to 100% rPET, in-house waste, and virgin can be processed at guaranteed iV levels.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle download product sheet
                  }}
                >
                  Download Product Sheet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
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
                  src="https://placehold.co/800x450/e2e8f0/475569?text=viscoSHEET+Machine&font=roboto"
                  alt="viscoSHEET Machine"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">rPET Processing</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">iV</div>
                    <div className="text-sm text-gray-600">Level Control</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-600">Production</div>
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
            <h2 className="text-3xl font-bold text-primary mb-4">viscoSHEET Benefits</h2>
            <p className="text-gray-600">Comprehensive solutions for your rPET processing needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
            <h2 className="text-3xl font-bold text-primary mb-4">Technical Specifications</h2>
            <p className="text-gray-600">Comprehensive performance data for different configurations</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Extruder Outputs Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Model</th>
                      <th className="px-6 py-4 text-left">Main Extruder Output (kg/h)</th>
                      <th className="px-6 py-4 text-left">Material Type</th>
                      <th className="px-6 py-4 text-left">Thickness Range (μm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {technicalSpecs.extruders.map((spec, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4">{spec.type}</td>
                        <td className="px-6 py-4">{spec.output}</td>
                        <td className="px-6 py-4">{spec.material}</td>
                        <td className="px-6 py-4">{spec.thickness}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calendar Specifications Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Calendar Model</th>
                      <th className="px-6 py-4 text-left">Cooled Width (mm)</th>
                      <th className="px-6 py-4 text-left">Net Sheet (mm)</th>
                      <th className="px-6 py-4 text-left">Capacity (kg/h)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {technicalSpecs.calendarSpecs.map((spec, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4">{spec.model}</td>
                        <td className="px-6 py-4">{spec.cooledWidth}</td>
                        <td className="px-6 py-4">{spec.netSheet}</td>
                        <td className="px-6 py-4">{spec.capacity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
              Contact us to learn more about how viscoSHEET can revolutionize your rPET processing
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

export default ViscoSheet; 