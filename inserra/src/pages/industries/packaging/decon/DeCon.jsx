// Required assets (to be replaced with actual images):
// - Logo: /images/viscotec/logo.svg
// - Machine: /images/viscotec/decon-machine.png

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Droplets, Zap, Timer, Gauge, Settings, Play, X } from 'lucide-react';

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
              src="https://www.youtube.com/embed/OUHCJ-f2lHk"
              title="deCON Video"
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

const DeCon = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    { 
      title: "Decontamination of post-consumer recycled flakes according to EFSA and FDA",
      icon: <Droplets className="w-6 h-6" />
    },
    { 
      title: "iV increase mode for tray recycling",
      icon: <Gauge className="w-6 h-6" />
    },
    { 
      title: "Excellent dedusting",
      icon: <Settings className="w-6 h-6" />
    },
    { 
      title: "Drying to below 50 ppm",
      icon: <Droplets className="w-6 h-6" />
    },
    { 
      title: "Controlled and consistent residence time (FIFO)",
      icon: <Timer className="w-6 h-6" />
    },
    { 
      title: "Low power consumption and maintenance",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const technicalSpecs = {
    models: [
      {
        name: "deCON 50",
        outputDecon: "1200",
        outputIvPlus: "-",
        reactorVolume: "4.7",
        height: "7.7",
        floorspace: "8.3 x 6.8",
        vacuum: "<10",
        energy: "0.10-0.15",
        moisture: "1",
        humidity: "<50",
        foodGrade: "EFSA, FDA"
      },
      {
        name: "deCON 65",
        outputDecon: "1200 | 1500³",
        outputIvPlus: "-",
        reactorVolume: "6.4",
        height: "8.6",
        floorspace: "8.3 x 6.8",
        vacuum: "<10",
        energy: "0.10-0.15",
        moisture: "1",
        humidity: "<50",
        foodGrade: "EFSA, FDA"
      },
      {
        name: "deCON 50 iV+",
        outputDecon: "1000-1200",
        outputIvPlus: "500-700",
        reactorVolume: "4.9",
        height: "8.6",
        floorspace: "8.3 x 6.8",
        vacuum: "<10",
        energy: "0.10-0.15",
        moisture: "1",
        humidity: "<50",
        foodGrade: "EFSA, FDA"
      },
      {
        name: "deCON 75 iV+",
        outputDecon: "1800-2000",
        outputIvPlus: "800-1000",
        reactorVolume: "6.9",
        height: "9.3",
        floorspace: "8.3 x 6.8",
        vacuum: "<10",
        energy: "0.10-0.15",
        moisture: "1",
        humidity: "<50",
        foodGrade: "EFSA, FDA"
      }
    ]
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
            <span className="text-primary">deCON | deCON iV+</span>
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
              <h1 className="text-5xl font-bold mb-6">deCON | deCON iV+</h1>
              <p className="text-2xl text-blue-100 mb-6">
                Decontamination dryer for production of dry, iV-increased food grade flakes
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Decontamination dryer for production of dry, iV-increased food grade flakes from bottles 
                and trays, or skeleton waste directly in front of a production extruder. The deCON iV+ is 
                the optimal tray recycling solution, with a production mode for intrinsic viscosity (iV) increase.
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
                  src="/images/viscotec/deconhero.png"
                  alt="deCON Machine"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">FDA</div>
                    <div className="text-sm text-gray-600">Approved</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">iV+</div>
                    <div className="text-sm text-gray-600">Technology</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">&lt;50</div>
                    <div className="text-sm text-gray-600">ppm</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Diagram Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Process Overview</h2>
            <p className="text-gray-600">Complete deCON system layout</p>
          </motion.div>

          {/* Diagram */}
          <div className="mb-8">
            <img
              src="/images/viscotec/decondiagram.png"
              alt="deCON Process Diagram"
              className="w-full max-w-6xl mx-auto object-contain"
            />
          </div>

          {/* Diagram Key */}
          <div className="max-w-5xl mx-auto">
            {/* Process Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {[
                { num: 1, text: "stand alone" },
                { num: 2, text: "in front of production extruder" },
                { num: 3, text: "optional crystalizer" }
              ].map(item => (
                <div key={item.num} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg col-span-2">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white text-sm">
                    {item.num}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Applications */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 px-4">Applications:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {[
                  { text: "pelletizing" },
                  { text: "injection molding" },
                  { text: "tapes" },
                  { text: "strapping" },
                  { text: "viscoSHEET" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
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
            <h2 className="text-3xl font-bold text-primary mb-4">deCON Benefits</h2>
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
                src="https://img.youtube.com/vi/OUHCJ-f2lHk/maxresdefault.jpg"
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
                      <th className="px-6 py-4 text-left">Main Data</th>
                      <th className="px-6 py-4 text-left">deCON 50</th>
                      <th className="px-6 py-4 text-left">deCON 65</th>
                      <th className="px-6 py-4 text-left">deCON 50 iV+</th>
                      <th className="px-6 py-4 text-left">deCON 75 iV+</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">Max. output with flakes deCON<br/>mode¹ [kg/h]</td>
                      <td className="px-6 py-4">1200</td>
                      <td className="px-6 py-4">1200 | 1500³</td>
                      <td className="px-6 py-4">1000-1200</td>
                      <td className="px-6 py-4">1800-2000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Max. output with flakes iV+mode²<br/>[kg/h]</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">500-700</td>
                      <td className="px-6 py-4">800-1000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Net volume of reactor [m³]</td>
                      <td className="px-6 py-4">4.7</td>
                      <td className="px-6 py-4">6.4</td>
                      <td className="px-6 py-4">4.9</td>
                      <td className="px-6 py-4">6.9</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Equipment hight [m]</td>
                      <td className="px-6 py-4">7.7</td>
                      <td className="px-6 py-4">8.6</td>
                      <td className="px-6 py-4">8.6</td>
                      <td className="px-6 py-4">9.3</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Floor space [m]</td>
                      <td className="px-6 py-4">8.3 x 6.8</td>
                      <td className="px-6 py-4">8.3 x 6.8</td>
                      <td className="px-6 py-4">8.3 x 6.8</td>
                      <td className="px-6 py-4">8.3 x 6.8</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">High-vacuum system [mbar]</td>
                      <td className="px-6 py-4">&lt;10</td>
                      <td className="px-6 py-4">&lt;10</td>
                      <td className="px-6 py-4">&lt;10</td>
                      <td className="px-6 py-4">&lt;10</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Energy consumption [kWh/kg]</td>
                      <td className="px-6 py-4">0.10-0.15</td>
                      <td className="px-6 py-4">0.10-0.15</td>
                      <td className="px-6 py-4">0.10-0.15</td>
                      <td className="px-6 py-4">0.10-0.15</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Max. surface moisture of input<br/>material [%]</td>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">1</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Output humidity [ppm]</td>
                      <td className="px-6 py-4">&lt;50</td>
                      <td className="px-6 py-4">&lt;50</td>
                      <td className="px-6 py-4">&lt;50</td>
                      <td className="px-6 py-4">&lt;50</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Food grade according to</td>
                      <td className="px-6 py-4">EFSA, FDA</td>
                      <td className="px-6 py-4">EFSA, FDA</td>
                      <td className="px-6 py-4">EFSA, FDA</td>
                      <td className="px-6 py-4">EFSA, FDA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 text-sm text-gray-600">
                <p>¹ 1h residence time</p>
                <p>² 2h residence time</p>
                <p>³ In combination with crystallizing unit (warm feeding of flakes)</p>
                <p className="mt-2">Above table represents general technical data and average values, which depend on chemical composition, contamination, pelletizing, etc. of the pellets/flakes. Guaranteed values only after trial with customer material.</p>
                <p>The calculated electrical power rate refers only to the reactor and periphery of the reactor and depends on the output rate.</p>
                <p>We reserve the right of technical modification.</p>
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
              Contact us to learn more about how deCON can revolutionize your recycling process
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

export default DeCon; 