import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shield, CheckCircle, ArrowRight, Settings, Factory, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../../assets/plastic.png';

const SpeedformerKTR = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const models = [
    {
      name: "KTR 5.2 Speed",
      specs: {
        maxFormingArea: "775 x 380 mm",
        punchingForce: "400 kN",
        cycleTime: "50 cycles/min",
        maxHeightFormedPart: "190 mm"
      }
    },
    {
      name: "KTR 6.2 Speed",
      specs: {
        maxFormingArea: "840 x 585 mm",
        punchingForce: "900 kN",
        cycleTime: "45 cycles/min",
        maxHeightFormedPart: "250 mm"
      }
    }
  ];

  const features = [
    {
      title: "Advanced Tilting Technology",
      description: "Precise tilting mechanism for complex geometries",
      details: [
        "Servo-driven tilting system",
        "Adjustable tilting angles",
        "High-precision control",
        "Quick tool change capability"
      ]
    },
    {
      title: "Process Control",
      description: "Comprehensive monitoring and control system",
      details: [
        "Integrated process monitoring",
        "Temperature control",
        "Pressure regulation",
        "Quality assurance systems"
      ]
    },
    {
      title: "Energy Efficiency",
      description: "Optimized energy consumption design",
      details: [
        "Energy recovery system",
        "Smart heating control",
        "Efficient drive systems",
        "Reduced power consumption"
      ]
    }
  ];

  const applications = [
    {
      title: "Food Containers",
      description: "High-quality food packaging solutions",
      icon: <Factory className="w-8 h-8 text-primary" />
    },
    {
      title: "Technical Parts",
      description: "Complex technical components",
      icon: <Settings className="w-8 h-8 text-primary" />
    },
    {
      title: "Special Applications",
      description: "Custom packaging solutions",
      icon: <Wrench className="w-8 h-8 text-primary" />
    }
  ];

  const keyBenefits = [
    {
      title: "Maximum output & efficiency",
      description: "High-speed production with optimal material distribution",
      icon: <Zap className="w-8 h-8 text-primary" />
    },
    {
      title: "Superior product quality",
      description: "Precise process control for consistent results",
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: "Flexible production",
      description: "Quick changeovers and versatile applications",
      icon: <Settings className="w-8 h-8 text-primary" />
    },
    {
      title: "Energy efficient",
      description: "Optimized energy consumption and recovery",
      icon: <Factory className="w-8 h-8 text-primary" />
    }
  ];

  const specLabels = {
    maxFormingArea: "Max. forming area",
    punchingForce: "Punching force",
    cycleTime: "Cycle time",
    maxHeightFormedPart: "Max. height of formed part"
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
            <Link to="/industries/packaging/kiefel" className="hover:text-primary">Kiefel</Link>
            <span>/</span>
            <span className="text-primary">SPEEDFORMER KTR</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"></div>
        
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                SPEEDFORMER KTR
                <span className="block text-white text-3xl md:text-4xl mt-4">
                  Tilting Technology
                </span>
              </h1>
              <div className="w-20 h-1 bg-gray-100 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
                Advanced tilting thermoforming for complex packaging solutions
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Machine Image */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <div className="max-w-3xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-white/10 backdrop-blur-lg p-1">
                <div className="w-full h-full bg-gray-800/90 rounded-lg">
                  <img
                    src="/images/kiefel/sfktr.webp"
                    alt="SPEEDFORMER KTR"
                    className="w-full h-full object-cover rounded-lg opacity-90"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features for superior thermoforming performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                  {index === 0 && <Factory className="w-10 h-10 text-primary" />}
                  {index === 1 && <Settings className="w-10 h-10 text-primary" />}
                  {index === 2 && <Shield className="w-10 h-10 text-primary" />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-100 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-100">
                      <CheckCircle className="w-5 h-5 text-gray-100 mr-3 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-100">Available models and their capabilities</p>
          </motion.div>

          <div className="bg-black/10 backdrop-blur-lg rounded-xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-400/20">
                  <th className="px-4 py-2 text-left text-gray-100"></th>
                  {models.map(model => (
                    <th key={model.name} className="px-4 py-2 text-left text-gray-100">{model.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(specLabels).map(([key, label], index) => (
                  <tr key={key} className={`border-b border-gray-400/20 ${index % 2 === 0 ? 'bg-black/5' : ''}`}>
                    <td className="px-4 py-2 font-semibold text-white">{label}</td>
                    {models.map(model => (
                      <td key={`${model.name}-${key}`} className="px-4 py-2 text-gray-100">
                        {model.specs[key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Applications</h2>
            <p className="text-xl text-gray-600">Versatile solutions for various industries</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white transform transition-all duration-300 group-hover:shadow-xl">
                  <div className="bg-white rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                    {application.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{application.title}</h3>
                  <p className="text-gray-100">{application.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-100">Advantages of the SPEEDFORMER KTR</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedformerKTR; 