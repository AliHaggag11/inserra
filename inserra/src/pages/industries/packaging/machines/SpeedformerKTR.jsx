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
      name: "KTR 5.1 Speed",
      specs: {
        formingArea: "500 x 300 mm",
        toolDimensions: "520 x 320 mm",
        heightFormedPart: "130 mm",
        filmWidth: "550 mm",
        filmThickness: "0.2 - 2.0 mm",
        tiltingForce: "400 kN",
        productionSpeed: "40 cycles/min",
        airPressure: "6 bar",
        powerConsumption: "35 kW",
        weight: "10,000 kg",
        dimensions: "6.5 x 2.2 x 2.5 m"
      }
    },
    {
      name: "KTR 6.1 Speed",
      specs: {
        formingArea: "650 x 450 mm",
        toolDimensions: "670 x 470 mm",
        heightFormedPart: "150 mm",
        filmWidth: "700 mm",
        filmThickness: "0.2 - 2.0 mm",
        tiltingForce: "600 kN",
        productionSpeed: "35 cycles/min",
        airPressure: "6 bar",
        powerConsumption: "40 kW",
        weight: "12,000 kg",
        dimensions: "7.0 x 2.5 x 2.5 m"
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
      icon: <Factory className="w-8 h-8" />
    },
    {
      title: "Technical Parts",
      description: "Complex technical components",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Special Applications",
      description: "Custom packaging solutions",
      icon: <Wrench className="w-8 h-8" />
    }
  ];

  const keyBenefits = [
    {
      title: "Maximum output & efficiency",
      description: "High-speed production with optimal material distribution",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Superior product quality",
      description: "Precise process control for consistent results",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Flexible production",
      description: "Quick changeovers and versatile applications",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Energy efficient",
      description: "Optimized energy consumption and recovery",
      icon: <Factory className="w-8 h-8" />
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
                <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
                  Tilting Technology
                </span>
              </h1>
              <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
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
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200">
                <img
                  src="/path/to/ktr-machine.jpg"
                  alt="SPEEDFORMER KTR"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x450?text=KTR+Machine';
                  }}
                />
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
                <div className="bg-white/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                  {index === 0 && <Factory className="w-10 h-10" />}
                  {index === 1 && <Settings className="w-10 h-10" />}
                  {index === 2 && <Shield className="w-10 h-10" />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-blue-100">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
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
            <p className="text-xl text-blue-200">Available models and their capabilities</p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-4 py-2 text-left text-blue-200">Specifications</th>
                  {models.map(model => (
                    <th key={model.name} className="px-4 py-2 text-left text-blue-200">{model.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(models[0].specs).map((spec, index) => (
                  <tr key={spec} className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : ''}`}>
                    <td className="px-4 py-2 font-semibold text-white">{spec.replace(/([A-Z])/g, ' $1').trim()}</td>
                    {models.map(model => (
                      <td key={`${model.name}-${spec}`} className="px-4 py-2 text-blue-100">{model.specs[spec]}</td>
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
                  <div className="bg-white/20 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                    {application.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{application.title}</h3>
                  <p className="text-blue-100">{application.description}</p>
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
            <p className="text-xl text-blue-200">Advantages of the SPEEDFORMER KTR</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/20 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedformerKTR; 