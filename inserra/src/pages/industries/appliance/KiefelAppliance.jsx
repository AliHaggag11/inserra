import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const KiefelAppliance = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const machineSpecs = {
    kidSpeed: {
      specs: [
        { label: "Forming area max.", speed1000: "1,000 x 2,200 mm", speed1100: "1,100 x 2,200 mm" },
        { label: "Forming area min.", speed1000: "420 x 1,150 mm", speed1100: "420 x 1,150 mm" },
        { label: "Forming height max.", speed1000: "150 mm", speed1100: "150 mm" },
        { label: "Film thickness", speed1000: "0,8 - 1,8 mm", speed1100: "0,8 - 1,8 mm" },
        { label: "Production speed max.", speed1000: "300 cycles/hour", speed1100: "300 cycles/hour" }
      ]
    },
    kidPremium: {
      specs: [
        { label: "Forming area max.", premium: "1.000 x 2.200 mm", smart: "1.250 x 2.100 mm" },
        { label: "Forming area min.", premium: "500 x 750 mm", smart: "500 x 750 mm" },
        { label: "Forming height max.", premium: "800 mm", smart: "800 mm" },
        { label: "Film thickness", premium: "1,0 - 5,0 mm", smart: "1,0 - 5,0 mm" },
        { label: "Production speed max.", premium: "200 cycles/hour", smart: "150 cycles/hour" }
      ]
    }
  };

  const machineImages = {
    kidSpeed: {
      main: "path/to/kid-speed-main.jpg",
      gallery: [
        "path/to/kid-speed-1.jpg",
        "path/to/kid-speed-2.jpg",
        "path/to/kid-speed-3.jpg"
      ]
    },
    kidPremium: {
      main: "path/to/kid-premium-main.jpg",
      gallery: [
        "path/to/kid-premium-1.jpg",
        "path/to/kid-premium-2.jpg",
        "path/to/kid-premium-3.jpg"
      ]
    }
  };

  const applicationExamples = [
    { 
      title: "Door Liners", 
      description: "High-quality door panels for refrigerators and freezers",
      image: "/images/kiefel/doors.webp"
    },
    { 
      title: "Interior Containers", 
      description: "Precision-formed refrigerator interior linings",
      image: "/images/kiefel/liners.webp"
    },
    { 
      title: "Special Components", 
      description: "Custom-designed refrigeration components",
      image: "/images/kiefel/specomp.webp"
    }
  ];

  const [activeModel, setActiveModel] = useState('premium'); // 'premium' or 'smart'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Identifier */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <p className="text-gray-600">Kiefel Appliance Solutions</p>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              <motion.div 
                className="inline-block bg-white p-4 rounded-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <img 
                  src="/images/kiefel/kiefel-technologieslogo.svg"
                  alt="Kiefel Logo" 
                  className="h-16 w-auto"
                />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Machines for the Production of
                <span className="text-blue-300 block mt-2">
                  Refrigerator Components
                </span>
              </h1>
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-1 w-20 bg-blue-300"></div>
                <p className="text-xl text-blue-200">
                  Interior & Door Liners
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <h3 className="text-blue-300 font-semibold mb-2">Materials</h3>
                  <p className="text-sm text-blue-100">Plastic rolls & plates processing</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <h3 className="text-blue-300 font-semibold mb-2">Process</h3>
                  <p className="text-sm text-blue-100">Air pressure forming technology</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg p-1">
                <img
                  src="/images/kiefel/kiefelapphero.webp"
                  alt="Kiefel Machine Overview"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">300</div>
                      <div className="text-xs text-gray-600">cycles/hour</div>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <div className="text-lg font-bold text-primary">20%</div>
                      <div className="text-xs text-gray-600">material savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">6</div>
                      <div className="text-xs text-gray-600">cavities max</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Overview Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                className="col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Advanced Forming Technology
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  One of the main focuses of our forming technology is 
                  <span className="font-semibold text-primary"> machines for the production of refrigerator components.</span>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether for refrigerators or freezers, whether inner or door liners, 
                  our intelligent solutions enable the processing of even the most complex 
                  shapes and designs.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-50 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-primary mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Complex shape processing",
                    "Plastic roll processing",
                    "Plastic plate processing",
                    "Air pressure forming",
                    "High precision control"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Inner Door Liners</h3>
                <p className="text-blue-100">
                  Production from plastic rolls with advanced air pressure forming process 
                  for superior quality and precision.
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Inner Containers</h3>
                <p className="text-blue-100">
                  Manufactured using plastic plates through our standardized 
                  air pressure forming process for optimal results.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* SHARPFORMER KID SPEED Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-white mb-4">SHARPFORMER KID SPEED</h2>
            <p className="text-xl text-blue-200">For high quality inner doors</p>
          </motion.div>

          {/* Why SHARPFORMER KID SPEED Section */}
          <div className="container mx-auto px-4 mb-16">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-2">
                  <span className="text-blue-200">Why</span> SHARPFORMER KID SPEED<span className="text-blue-200">?</span>
                </h2>
                <div className="w-20 h-1 bg-blue-300/30 mx-auto"></div>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300/20"></div>
                {[
                  {
                    number: "1",
                    title: "Material and cost savings",
                    description: "Lower parts price by up to 20%"
                  },
                  {
                    number: "2",
                    title: "Maximum output & efficiency",
                    description: "High-pressure forming and cutting in one step"
                  },
                  {
                    number: "3",
                    title: "Highest product quality",
                    description: "High quality cutted parts"
                  },
                  {
                    number: "4",
                    title: "Efficient & sustainable",
                    description: "Lower energy costs & small footprint"
                  },
                  {
                    number: "5",
                    title: "Max. machine availability",
                    description: "Optimized uptime and performance"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-16 mb-8 last:mb-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="absolute left-0 w-16 h-16 flex items-center justify-center">
                      <div className="absolute w-4 h-4 bg-blue-300 rounded-full"></div>
                      <div className="absolute w-8 h-8 bg-blue-300/20 rounded-full animate-ping"></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                      <div className="flex items-baseline gap-4">
                        <span className="text-4xl font-bold text-blue-300">{item.number}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-blue-200">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

         

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { title: "Material and cost savings", description: "Lower parts price by up to 20%" },
              { title: "Maximum output & efficiency", description: "High-pressure forming and cutting in one step" },
              { title: "Highest product quality", description: "High quality cutted parts" },
              { title: "Efficient & sustainable", description: "Lower energy costs & small footprint" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg"
                variants={fadeInUpVariants}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-blue-200">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Technical Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Technical Highlights</h3>
              <ul className="space-y-3">
                {[
                  "High-pressure forming technology",
                  "Multi-cavity forming tool with up to 6 cavities",
                  "Integrated cutting station",
                  "Advanced heating system",
                  "Precise material distribution control"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-blue-300 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Production Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Up to 20% material savings",
                  "Production speed up to 300 cycles/hour",
                  "Reduced energy consumption",
                  "Minimal maintenance requirements",
                  "Compact machine footprint"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-blue-300 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-blue-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-6 overflow-x-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Versions of the SHARPFORMER KID SPEED</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-4 py-2 text-left text-blue-200">Specifications</th>
                  <th className="px-4 py-2 text-left text-blue-200">KID SPEED 1.000</th>
                  <th className="px-4 py-2 text-left text-blue-200">KID SPEED 1.100</th>
                </tr>
              </thead>
              <tbody>
                {machineSpecs.kidSpeed.specs.map((spec, index) => (
                  <tr key={index} className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : ''}`}>
                    <td className="px-4 py-2 font-semibold text-white">{spec.label}</td>
                    <td className="px-4 py-2 text-blue-100">{spec.speed1000}</td>
                    <td className="px-4 py-2 text-blue-100">{spec.speed1100}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SHARPFORMER KID PREMIUM & SMART Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">SHARPFORMER KID PREMIUM & SMART</h2>
            <p className="text-xl text-gray-600">High quality and flexible thermoforming machines</p>
          </motion.div>

          {/* Model Selection Tabs */}
          <div className="flex justify-center mb-12 space-x-4">
            <button
              className={`px-8 py-4 rounded-full transition-all duration-300 ${
                activeModel === 'premium'
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-primary hover:bg-gray-200'
              }`}
              onClick={() => setActiveModel('premium')}
            >
              KID PREMIUM
            </button>
            <button
              className={`px-8 py-4 rounded-full transition-all duration-300 ${
                activeModel === 'smart'
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-primary hover:bg-gray-200'
              }`}
              onClick={() => setActiveModel('smart')}
            >
              KID SMART
            </button>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {activeModel === 'premium' ? (
                    <>
                      The <strong>SHARPFORMER KID PREMIUM</strong> is particularly suitable for small and 
                      medium-sized European refrigerators, offering exceptional flexibility and precision 
                      in thermoforming operations.
                    </>
                  ) : (
                    <>
                      The <strong>SHARPFORMER KID SMART</strong> is perfectly designed for 
                      French Door appliances and American side-by-side refrigerators, providing 
                      advanced capabilities for larger-scale production.
                    </>
                  )}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Benefits List */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Your Kiefel benefits:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Reliable chain rail sheet transport system: Narrow material clamping & compact construction",
                "Full process control for best product quality",
                "Optimized heating with improved energy efficiency",
                "Precise measurement of bubble height for optimum material distribution",
                "Pressure bell locking and sealing system",
                "Low-noise machine design"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications Table */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left"></th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-primary">KID PREMIUM 1.000</th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-primary">KID SMART 1.250</th>
                </tr>
              </thead>
              <tbody>
                {machineSpecs.kidPremium.specs.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{spec.label}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{spec.premium}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{spec.smart}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Process Animation Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Production Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Material Loading", description: "Automated material feeding system" },
              { step: "2", title: "Heating Phase", description: "Precise temperature control" },
              { step: "3", title: "Forming Process", description: "High-pressure air forming" },
              { step: "4", title: "Finishing", description: "Integrated cutting and quality control" }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-300 mb-3">Step {process.step}</div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-blue-100">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Examples */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Application Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applicationExamples.map((application, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={application.image} 
                    alt={application.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{application.title}</h3>
                  <p className="text-gray-600 text-lg">{application.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Downloads Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800">Downloads</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* SHARPFORMER KID PREMIUM & SMART Brochure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  SHARPFORMER KID PREMIUM & SMART
                </h3>
                <a
                  href="https://www.kiefel.com/downloaddata?id=d3E2bkRQbjJ4bEN1VkJUYU1FRUZuUT09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  <span className="mr-2">Download Brochure</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* SHARPFORMER KID SPEED Brochure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  SHARPFORMER KID SPEED
                </h3>
                <a
                  href="https://www.kiefel.com/downloaddata?id=QllwNHFIdFlCRUhtVFRDa3lvMjAzUT09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  <span className="mr-2">Download Brochure</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partner Website Button Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Want to learn more?</h2>
            <a
              href="https://www.kiefel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 group"
            >
              Visit Partner Website
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default KiefelAppliance;
