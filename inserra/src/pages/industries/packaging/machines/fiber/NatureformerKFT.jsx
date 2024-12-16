import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Factory, Settings, Shield, Zap } from 'lucide-react';
import heroImage from '../../../../../assets/plastic.png';

const NatureformerKFT = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Updated with exact text from screenshots
  const whyKFT = [
    {
      title: "Top product quality",
      description: "Very high molding accuracy due to type 3 fiber molding process"
    },
    {
      title: "Everything from one single source",
      description: "From fiber preparation to automation | Machine concept with integrated pulp basin, inline trimming station and end product packaging solutions"
    },
    {
      title: "Energy efficient production",
      description: "Thanks to the separate pre-press station, only one station is needed for hot pressing. This saves energy and maintains the highest quality"
    },
    {
      title: "Proven Kiefel modules",
      description: "Proven and reliable toggle concept with servo drives and years of success in the market"
    },
    {
      title: "High degree automation",
      description: "Stacking, sleeving, boxing, palletizing, automatic inspection, etc."
    }
  ];

  // Updated with exact specifications from screenshots
  const specifications = [
    {
      name: "KFT Lab",
      specs: {
        "Max. forming area": "300 x 200 mm",
        "Height of formed part": "max. 130 mm",
        "Pressing force": "26 kN",
        "Formed weight per cycle*": "",
        "Footprint": "3.7 x 3.1 m"
      }
    },
    {
      name: "KFT 90.1",
      specs: {
        "Max. forming area": "900 x 700 mm",
        "Height of formed part": "120 mm",
        "Pressing force": "450 kN",
        "Formed weight per cycle*": "350 g",
        "Footprint": "10.6 x 4.1 x 3.9 m"
      }
    },
    {
      name: "KFT 90.1 incl. trimming / die cut",
      specs: {
        "Max. forming area": "900 x 700 mm",
        "Height of formed part": "120 mm",
        "Pressing force": "450 kN",
        "Formed weight per cycle*": "350 g",
        "Footprint": "12.3 x 4.6 3.9 m"
      }
    }
  ];

  const processSteps = [
    {
      title: "Vacuum & Electrical Cabinet",
      icon: <Settings className="w-8 h-8 text-primary" />,
      description: "Power and control systems"
    },
    {
      title: "Pre-Press, Tool Handling & Pulp Tank",
      icon: <Factory className="w-8 h-8 text-primary" />,
      description: "Water extraction procedure with cold pre-pressing technology reduces moisture up to 60%"
    },
    {
      title: "Hot-Press",
      icon: <Zap className="w-8 h-8 text-primary" />,
      description: "Final press with heated tools reduces residual moisture to approximately 7%"
    },
    {
      title: "Quality Inspection",
      icon: <Shield className="w-8 h-8 text-primary" />,
      description: "Automated quality control"
    },
    {
      title: "Automation",
      icon: <Factory className="w-8 h-8 text-primary" />,
      description: "Stacking and packaging"
    }
  ];

  const note = "*referred to our reference product";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      {/* <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <span>/</span>
            <Link to="/industries/packaging" className="hover:text-primary">Packaging</Link>
            <span>/</span>
            <Link to="/industries/packaging/kiefel" className="hover:text-primary">Kiefel</Link>
            <span>/</span>
            <Link to="/industries/packaging/kiefel-fiber" className="hover:text-primary">Fiber</Link>
            <span>/</span>
            <span className="text-primary">NATUREFORMER KFT</span>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"></div>
        
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <motion.div
              className="text-white text-left z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Machine solutions for natural fiber
                <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
                  NATUREFORMER KFT
                </span>
              </h1>
              <div className="w-20 h-1 bg-blue-300 mb-6"></div>
              <p className="text-xl text-blue-100 max-w-2xl">
                The NATUREFORMER KFT 90 includes a range of innovative features that will increase the productivity
              </p>
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
                    src="/images/kiefel/fiberkft.webp"
                    alt="NATUREFORMER KFT"
                    className="w-full h-full object-cover rounded-lg opacity-90"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Stats Cards */}
      <div className="relative -mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "30%", label: "Cycle Time Reduction" },
              { value: "60%", label: "Moisture Reduction" },
              { value: "7%", label: "Final Moisture Content" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-xl p-6 transform hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Diagram */}
      <div className="pt-16 pb-20 -mt-8 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Distinct Kiefel production process</h2>
            <p className="text-xl text-blue-200">Advanced thermoforming process with integrated quality control</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full hover:bg-white/20 transition-all duration-300 transform group-hover:-translate-y-2">
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-300 text-primary font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                      <p className="text-sm text-blue-100">{step.description}</p>
                    </div>

                    {/* Arrow indicator for non-last items */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-blue-300" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Process Details */}
            <motion.div
              className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Water extraction procedure</h3>
                <p className="text-blue-100">
                  The water extraction procedure in combination with the cold pre-pressing technology reduces the moisture up to 60%
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Final press with heated tools</h3>
                <p className="text-blue-100">
                  The final press with heated tools reduces the residual moisture of the packed product to approximately 7%
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Why NATUREFORMER KFT?</h2>
            <p className="text-xl text-blue-200">Advanced features for optimal performance</p>
          </motion.div>

          {/* Add the diagram before the features */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg p-1">
              <div className="w-full h-full bg-gray-800/90 rounded-lg">
                <img
                  src="/images/kiefel/kftdiag.webp"
                  alt="KFT Process Diagram"
                  className="w-full h-full object-contain rounded-lg opacity-90"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyKFT.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Table */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Versions of the NATUREFORMER KFT</h2>
            <p className="text-xl text-gray-400">Kiefel Fiber Preparation</p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-6 py-3 text-left"></th>
                  {specifications.map((spec, index) => (
                    <th key={index} className="px-6 py-3 text-left text-lg font-bold text-blue-200">
                      {spec.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(specifications[0].specs).map((key, index) => (
                  <tr key={index} className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : ''}`}>
                    <td className="px-6 py-4 text-sm font-medium text-white">{key}</td>
                    {specifications.map((spec, specIndex) => (
                      <td key={specIndex} className="px-6 py-4 text-sm text-blue-100">
                        {spec.specs[key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-sm text-blue-100 italic">
              {note}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Features */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Technical Features</h2>
            <p className="text-xl text-gray-600">Advanced capabilities for optimal performance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Steam Flow Technology",
                description: "Improved steam management enables a 30% reduction in cycle time"
              },
              {
                title: "Temperature Control",
                description: "New temperature controller ensures the highest process reliability"
              },
              {
                title: "Energy Efficiency",
                description: "Up to 10kW lower energy consumption and 900L/h less water consumption"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Sections */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Advanced Steam Flow Technology
              </h2>
              <p className="text-gray-600 mb-6">
                With improved steam management, the NATUREFORMER KFT 90 enables a 30% reduction in cycle time - meaning faster production and greater efficiency than before. In addition, its new temperature controller ensures the highest process reliability possible.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Optimized steam distribution</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Precise temperature control</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg p-1">
                <div className="w-full h-full bg-gray-800/90 rounded-lg">
                  <img
                    src="/images/kiefel/sol1.webp"
                    alt="Steam Flow Technology"
                    className="w-full h-full object-cover rounded-lg opacity-90"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg p-1">
                <div className="w-full h-full bg-gray-800/90 rounded-lg">
                  <img
                    src="/images/kiefel/sol2.webp"
                    alt="Complete Solution Package"
                    className="w-full h-full object-cover rounded-lg opacity-90"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Complete Solution Package
              </h2>
              <p className="text-gray-600 mb-6">
                From fiber preparation to automation, the NATUREFORMER KFT offers a machine concept with integrated pulp basin, inline trimming station and end product packaging solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Integrated system design</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-600">End-to-end automation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureformerKFT; 