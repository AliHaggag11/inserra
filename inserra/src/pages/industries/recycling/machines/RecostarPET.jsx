import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Zap, Settings, Gauge, ChevronRight } from 'lucide-react';

const RecostarPET = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const specifications = [
    {
      title: "Processing Capacity",
      value: "300 - 2,000 kg/h",
      description: "High throughput for bottle-to-bottle recycling",
      icon: <Gauge className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Material Types",
      value: "PET bottles & trays",
      description: "Specialized for PET recycling",
      icon: <Beaker className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Output Quality",
      value: "Food-grade rPET",
      description: "Meets FDA & EFSA standards",
      icon: <Settings className="w-8 h-8 text-blue-300" />
    },
    {
      title: "IV Value",
      value: "Up to 0.85 dl/g",
      description: "High intrinsic viscosity",
      icon: <Zap className="w-8 h-8 text-blue-300" />
    }
  ];

  const features = [
    {
      title: "Super-Clean Technology",
      description: "Advanced decontamination for food-grade quality",
      icon: <Beaker className="w-12 h-12 text-primary" />,
      details: [
        "Multi-stage decontamination process",
        "Continuous quality monitoring",
        "Automated contamination removal"
      ]
    },
    {
      title: "SSP Integration",
      description: "Solid state polycondensation for IV boost",
      icon: <Zap className="w-12 h-12 text-primary" />,
      details: [
        "Controlled crystallization",
        "Precise temperature regulation",
        "Optimized residence time"
      ]
    },
    {
      title: "Smart Operation",
      description: "Automated process control and monitoring",
      icon: <Settings className="w-12 h-12 text-primary" />,
      details: [
        "Real-time process monitoring",
        "Automated parameter adjustment",
        "Predictive maintenance"
      ]
    },
    {
      title: "Energy Recovery",
      description: "Efficient heat recovery system",
      icon: <Gauge className="w-12 h-12 text-primary" />,
      details: [
        "Heat exchange optimization",
        "Energy consumption reduction",
        "Sustainable operation"
      ]
    }
  ];

  const petArtComponents = [
    { number: "1", title: "Screw conveyor", description: "Material transport system" },
    { number: "2", title: "Metal separator", description: "Contaminant removal" },
    { number: "3", title: "Combined drying unit", description: "Material preparation" },
    { number: "4", title: "Extruder", description: "Primary processing unit" },
    { number: "5", title: "Melt pump", description: "Flow control system" },
    { number: "6", title: "Melt filter with backflush", description: "Filtration system" },
    { number: "7", title: "Underwater pelletizer with inline crystallization", description: "Pellet formation" },
    { number: "8", title: "Post-crystallization unit", description: "Crystal structure development" },
    { number: "9", title: "Separate vacuum feeding system", description: "Material handling" },
    { number: "10", title: "SSP preheater", description: "Temperature preparation" },
    { number: "11", title: "Heat exchanger for preheater", description: "Thermal management" },
    { number: "12", title: "SSP reactor", description: "Solid state processing" },
    { number: "13", title: "Discharge unit", description: "Material output" },
    { number: "14", title: "Heat exchanger for pellets", description: "Temperature control" },
    { number: "15", title: "Pellet water cooler", description: "Cooling system" },
    { number: "16", title: "Storage silo", description: "Product storage" }
  ];

  const recoStarFGComponents = [
    { number: "1", title: "Feeding screw", description: "Material input" },
    { number: "2", title: "Hot air drying unit", description: "Moisture removal" },
    { number: "3a/b", title: "Pre-drying unit/pre-drying unit under vacuum", description: "Advanced drying" },
    { number: "4", title: "Extruder", description: "Material processing" },
    { number: "5", title: "High-vacuum degassing extruder", description: "Contaminant removal" },
    { number: "6", title: "Melt filter without backflushing", description: "Basic filtration" },
    { number: "7", title: "Melt filter with backflushing", description: "Advanced filtration" },
    { number: "8", title: "Strand pelletiser", description: "Pellet formation" },
    { number: "9", title: "Automatic strand pelletiser", description: "Automated cutting" },
    { number: "10", title: "Underwater pelletiser", description: "Submerged processing" },
    { number: "11", title: "Underwater pelletiser with inline crystallisation", description: "Integrated crystallization" },
    { number: "12", title: "Storage silo", description: "Final storage" }
  ];

  const recoStarFGPlusComponents = [
    { number: "1", title: "Feeding screw", description: "Material input" },
    { number: "2", title: "Hot air drying unit", description: "Moisture removal" },
    { number: "3a/b", title: "Pre-drying unit/pre-drying unit under vacuum", description: "Advanced drying" },
    { number: "4", title: "Extruder", description: "Material processing" },
    { number: "5", title: "High-vacuum degassing extruder", description: "Contaminant removal" },
    { number: "6", title: "Melt filter without backflushing", description: "Basic filtration" },
    { number: "7", title: "Melt filter with backflushing", description: "Advanced filtration" },
    { number: "8", title: "Strand pelletiser", description: "Pellet formation" },
    { number: "9", title: "Automatic strand pelletiser", description: "Automated cutting" },
    { number: "10", title: "Underwater pelletiser", description: "Submerged processing" },
    { number: "11", title: "Underwater pelletiser with inline crystallisation", description: "Integrated crystallization" },
    { number: "12", title: "Storage silo", description: "Final storage" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/industries/recycling" className="hover:text-primary">Recycling</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/industries/recycling/starlinger-recycling" className="hover:text-primary">Starlinger Recycling</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary">recoSTAR PET</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="text-white z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  recoSTAR PET
                  <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
                    Food-Grade PET Recycling
                  </span>
                </h1>
                <div className="w-20 h-1 bg-blue-300 mb-6"></div>
                <p className="text-xl text-blue-100 max-w-2xl">
                  Advanced bottle-to-bottle recycling technology with superior decontamination performance
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Gauge className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Up to 2,000 kg/h</span>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Beaker className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Food-grade Quality</span>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Settings className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Smart Operation</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="relative hidden lg:block z-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg p-1">
                  <div className="w-full h-full bg-gray-800/90 rounded-lg">
                    <img
                      src="/images/starlinger/recopet hero.jpg"
                      alt="recoSTAR PET"
                      className="w-full h-full object-cover rounded-lg opacity-90"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">Advanced features for optimal performance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ translateY: -5 }}
              >
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                  {spec.icon}
                </div>
                <div className="relative z-10">
                  {spec.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{spec.title}</h3>
                  <div className="text-3xl font-bold text-blue-300 mb-2">{spec.value}</div>
                  <p className="text-blue-100">{spec.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">What sets recoSTAR PET apart</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-primary/5 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Diagrams Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Process Configurations</h2>
            <p className="text-xl text-gray-600">Multiple setup options for different requirements</p>
          </motion.div>

          {/* PET art Configuration */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-primary">PET art Configuration</h3>
            <div className="mb-6">
              <img 
                src="/images/starlinger/diag1pet.jpg"
                alt="PET art configuration diagram"
                className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {petArtComponents.map((component, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {component.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{component.title}</h3>
                    <p className="text-gray-600 text-xs">{component.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* recoSTAR FG Configuration */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-primary">recoSTAR FG Configuration</h3>
            <div className="mb-8">
              <img 
                src="/images/starlinger/diag2pet.jpg"
                alt="recoSTAR FG configuration diagram"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recoStarFGComponents.map((component, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {component.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{component.title}</h3>
                    <p className="text-gray-600 text-sm">{component.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* recoSTAR FG+ Configuration */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">recoSTAR FG+ Configuration</h3>
            <div className="mb-8">
              <img 
                src="/images/starlinger/diag3pet.jpg"
                alt="recoSTAR FG+ configuration diagram"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recoStarFGPlusComponents.map((component, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {component.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{component.title}</h3>
                    <p className="text-gray-600 text-sm">{component.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Brochure Button */}
          <div className="text-center mt-16">
            <motion.a
              href="https://www.starlinger.com/fileadmin/user_upload/Broschueren_pdf/recoSTAR_direct_E4_24871_04U.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-bold">Download Technical Brochure</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecostarPET; 