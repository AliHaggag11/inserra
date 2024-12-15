// Required assets (to be replaced with actual images):
// - Logo: /images/viscotec/logo.svg
// - Machine: /images/viscotec/viscozero-machine.png

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Gauge, Trash2, Wind, Sparkles } from 'lucide-react';

const ViscoZero = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    { 
      title: "Superclean post-consumer PP, PE, PS and PET",
      icon: <Sparkles className="w-6 h-6" />
    },
    { 
      title: "iV increase for PET",
      icon: <Gauge className="w-6 h-6" />
    },
    { 
      title: "Odour removal",
      icon: <Wind className="w-6 h-6" />
    },
    { 
      title: "Spin finish removal",
      icon: <Beaker className="w-6 h-6" />
    }
  ];

  const technicalSpecs = {
    models: [
      {
        model: "600",
        maxOutput: "400-800",
        residenceTime: "10-40",
        reactorVolume: "600",
        height: "2.2",
        floorspace: "5x3"
      },
      {
        model: "1500",
        maxOutput: "800-1600",
        residenceTime: "15-40",
        reactorVolume: "1500",
        height: "2.2",
        floorspace: "6x4"
      }
    ],
    commonSpecs: {
      vacuum: "≤ 10",
      energyConsumption: "0.03-0.05",
      ivIncrease: "0.004-0.007",
      foodGrade: "FDA pending"
    }
  };

  const zeroFeatures = [
    {
      title: "ZERO compromise",
      description: "Post-consumer recycled materials safe for direct food contact. Thanks to efficient decontamination and homogenisation of the material."
    },
    {
      title: "ZERO waste",
      description: "Zero waste achieved through 100% recycling rate. viscoZERO recycles different types of high viscosity input materials."
    },
    {
      title: "ZERO odour",
      description: "Efficient removal of high and low volatile odours. Results in pure and odour-less recyclate for demanding applications and packaging solutions."
    },
    {
      title: "ZERO limits",
      description: "Zero limits for new business opportunities. Flexibility to process a wide range of input materials into resins of outstanding quality."
    }
  ];

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
            <span className="text-primary">viscoZERO</span>
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
              <h1 className="text-5xl font-bold mb-6">viscoZERO</h1>
              <p className="text-2xl text-blue-100 mb-6">
                Decontaminate high viscosity materials fast and efficiently with the new melt phase decontamination reactor.
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Designed to produce recycled food grade resins from polyolefins and polystyrene or food grade, 
                iV-increased recycled PET. Available as turn-key solution or as upgrade for your existing recycling extruder.
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
                  src="https://placehold.co/800x450/e2e8f0/475569?text=viscoZERO+Machine&font=roboto"
                  alt="viscoZERO Machine"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">Recycling Rate</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">ZERO</div>
                    <div className="text-sm text-gray-600">Waste</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">FDA</div>
                    <div className="text-sm text-gray-600">Pending</div>
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
            <h2 className="text-3xl font-bold text-primary mb-4">viscoZERO Benefits</h2>
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

      {/* Zero Features */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">ZERO Concept</h2>
            <p className="text-gray-600">Our commitment to excellence in recycling</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {zeroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Technical Data</h2>
            <p className="text-gray-600">Comprehensive specifications for all models</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Model Specifications Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Model</th>
                      <th className="px-6 py-4 text-left">Max. output¹,² [kg/h]*</th>
                      <th className="px-6 py-4 text-left">Residence time from/to [min]</th>
                      <th className="px-6 py-4 text-left">Net volume of reactor [dm³]</th>
                      <th className="px-6 py-4 text-left">Equipment height [m]</th>
                      <th className="px-6 py-4 text-left">Floorspace [m]</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {technicalSpecs.models.map((spec, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4">{spec.model}</td>
                        <td className="px-6 py-4">{spec.maxOutput}</td>
                        <td className="px-6 py-4">{spec.residenceTime}</td>
                        <td className="px-6 py-4">{spec.reactorVolume}</td>
                        <td className="px-6 py-4">{spec.height}</td>
                        <td className="px-6 py-4">{spec.floorspace}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Specifications */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Process Parameters</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">High-vacuum system [mbar]</p>
                      <p className="font-medium">{technicalSpecs.commonSpecs.vacuum}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Energy consumption [kWh/kg]</p>
                      <p className="font-medium">{technicalSpecs.commonSpecs.energyConsumption}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">iV increase PET³ [dl/g/min]</p>
                      <p className="font-medium">{technicalSpecs.commonSpecs.ivIncrease}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Food grade according to</p>
                      <p className="font-medium">{technicalSpecs.commonSpecs.foodGrade}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Notes</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>¹ depending on material (PET, PP, PE, PS) and residence time</p>
                    <p>² recommended residence time 20 minutes</p>
                    <p>³ iV increase equals 0.08 - 0.15 dl/g per 20 minutes</p>
                    <p className="mt-4">Above table represents general technical data and average values. We reserve the right of technical modifications.</p>
                  </div>
                </div>
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
              Contact us to learn more about how viscoZERO can revolutionize your recycling process
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

export default ViscoZero; 