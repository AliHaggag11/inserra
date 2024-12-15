// Required assets (to be replaced with actual images):
// - Logo: /images/viscotec/logo.svg
// - Machine: /images/viscotec/viscostar-machine.png

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Activity, Settings, Clock, Gauge, Palette, BeakerIcon, Play, X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          className="relative w-[90vw] h-[90vh] max-w-7xl bg-black rounded-xl overflow-hidden flex items-center justify-center"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 p-2 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/qGLAG1FpimA"
              title="Viscotec Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-contain"
              style={{ aspectRatio: '16/9', maxHeight: 'calc(90vh - 48px)' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ViscoStar = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    { title: "Fast iV increase", icon: <Activity className="w-6 h-6" /> },
    { title: "Consistent and adjustable iV", icon: <Settings className="w-6 h-6" /> },
    { title: "Decontamination time", icon: <Clock className="w-6 h-6" /> },
    { title: "Continuous output", icon: <Gauge className="w-6 h-6" /> },
    { title: "Superior color values", icon: <Palette className="w-6 h-6" /> },
    { title: "Low AA values", icon: <BeakerIcon className="w-6 h-6" /> }
  ];

  const technicalSpecs = {
    models: [
      {
        model: "120",
        outputPellets: "1600",
        outputFlakes: "1200",
        reactorVolume: "12",
        height: "11.3",
        floorspace: "8x8"
      },
      {
        model: "150",
        outputPellets: "2000",
        outputFlakes: "1600",
        reactorVolume: "15",
        height: "12.5",
        floorspace: "8x8"
      },
      {
        model: "200",
        outputPellets: "2400",
        outputFlakes: "2000",
        reactorVolume: "20",
        height: "14.5",
        floorspace: "8x8"
      },
      {
        model: "250",
        outputPellets: "3200",
        outputFlakes: "-",
        reactorVolume: "25",
        height: "14.7",
        floorspace: "11x9"
      },
      {
        model: "350",
        outputPellets: "3200",
        outputFlakes: "-",
        reactorVolume: "35",
        height: "16.2",
        floorspace: "11x9"
      }
    ],
    specifications: {
      highVacuum: "≤ 10 mbar",
      energyConsumption: "0.06-0.15 kWh/kg",
      ivIncrease: "0.01-0.04 dl/g/h",
      foodGrade: "EFSA, FDA, brand owner approvals"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      
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
            <span className="text-primary">viscoSTAR</span>
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
              <h1 className="text-5xl font-bold mb-6">viscoSTAR</h1>
              <p className="text-2xl text-blue-100 mb-6">
                Solid state polycondensation plant for iV increase and decontamination
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Solid state polycondensation plant for iV increase and decontamination of polyester 
                pellets and/or flakes to be used after a pelletizing extruder, stand alone, or in 
                front of a production extruder.
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
                  src="https://placehold.co/800x450/e2e8f0/475569?text=viscoSTAR+Machine&font=roboto"
                  alt="viscoSTAR Machine"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">iV</div>
                    <div className="text-sm text-gray-600">Increase</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">FDA</div>
                    <div className="text-sm text-gray-600">Approved</div>
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
            <h2 className="text-3xl font-bold text-primary mb-4">viscoSTAR Benefits</h2>
            <p className="text-gray-600">Advanced features for optimal performance</p>
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

      {/* Video Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Industry Impact</h2>
            <p className="text-gray-600">Learn about the global impact of PET recycling and sustainability</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setIsVideoModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="https://img.youtube.com/vi/qGLAG1FpimA/maxresdefault.jpg"
                alt="Video Thumbnail"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <h3 className="text-xl font-semibold mb-2">PET Recycling Statistics</h3>
                  <p className="text-sm text-white/80">Global insights into PET recycling trends and sustainability metrics</p>
                </div>
              </div>
            </motion.div>
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
                      <th className="px-6 py-4 text-left">Max. output with pellets¹ [kg/h]*</th>
                      <th className="px-6 py-4 text-left">Max. output with flakes² [kg/h]*</th>
                      <th className="px-6 py-4 text-left">Net volume of reactor [m³]*</th>
                      <th className="px-6 py-4 text-left">Equipment height [m]</th>
                      <th className="px-6 py-4 text-left">Floorspace [m]</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {technicalSpecs.models.map((spec, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4">{spec.model}</td>
                        <td className="px-6 py-4">{spec.outputPellets}</td>
                        <td className="px-6 py-4">{spec.outputFlakes}</td>
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
                      <p className="text-sm text-gray-600">High-vacuum system</p>
                      <p className="font-medium">{technicalSpecs.specifications.highVacuum}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Energy consumption</p>
                      <p className="font-medium">{technicalSpecs.specifications.energyConsumption}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">iV increase pellets/flakes</p>
                      <p className="font-medium">{technicalSpecs.specifications.ivIncrease}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Food grade according to</p>
                      <p className="font-medium">{technicalSpecs.specifications.foodGrade}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Notes</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>¹ 6h residence time</p>
                    <p>² 3h residence time</p>
                    <p>* Above table represents general technical data and average values, which depend on chemical composition, contamination, pelletizing, etc. of the pellets/flakes. Guaranteed values only after trial with customer material.</p>
                    <p>The calculated electrical power rate refers only to the reactor and periphery of the reactor and depends on the output rate.</p>
                    <p>We reserve the right of technical modifications.</p>
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
              Contact us to learn more about how viscoSTAR can revolutionize your polyester processing
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

export default ViscoStar; 