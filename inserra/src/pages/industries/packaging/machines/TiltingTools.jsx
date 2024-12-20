import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shield, CheckCircle, ArrowRight, Settings, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../../assets/plastic.png';

const TiltingTools = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const toolFeatures = [
    {
      title: "Tilting Technology",
      description: "Advanced tilting mechanism for complex geometries",
      features: [
        "Precise tilting control",
        "Adjustable angles",
        "Servo-driven system",
        "Quick tool changes"
      ]
    },
    {
      title: "Cooling System",
      description: "Optimized cooling for consistent quality",
      features: [
        "Efficient heat transfer",
        "Temperature monitoring",
        "Uniform cooling",
        "Energy efficiency"
      ]
    },
    {
      title: "Material Flow",
      description: "Enhanced material distribution control",
      features: [
        "Optimal wall thickness",
        "Material savings",
        "Process stability",
        "Quality consistency"
      ]
    }
  ];

  const specifications = [
    {
      title: "Technical Features",
      specs: [
        "Maximum tool size: 1200 x 1000 mm",
        "Tilting angle: up to 55°",
        "Servo-controlled movement",
        "Integrated cooling system"
      ]
    },
    {
      title: "Material Compatibility",
      specs: [
        "PS, PP, PET processing",
        "Material thickness: 0.2 - 2.0 mm",
        "Multi-layer materials",
        "High-temperature materials"
      ]
    }
  ];

  const applications = [
    {
      title: "Deep-Draw Parts",
      description: "Complex geometries with optimal material distribution",
      icon: <Factory className="w-8 h-8 text-primary" />
    },
    {
      title: "Technical Components",
      description: "Precision parts for industrial applications",
      icon: <Settings className="w-8 h-8 text-primary" />
    },
    {
      title: "Custom Solutions",
      description: "Specialized tools for unique requirements",
      icon: <Wrench className="w-8 h-8 text-primary" />
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
            <span className="text-primary">Tilting Tools</span>
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
                Tilting Tools
                <span className="block text-white text-3xl md:text-4xl mt-4">
                  Advanced Thermoforming Technology
                </span>
              </h1>
              <div className="w-20 h-1 bg-gray-100 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
                Precision tools for complex thermoforming applications
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
                    src="/images/kiefel/Tilting tool.webp"
                    alt="Tilting Tools System"
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
              Tool Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features for superior thermoforming performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toolFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Wrench className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-100 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-100">
                      <CheckCircle className="w-5 h-5 text-gray-100 mr-3 flex-shrink-0" />
                      <span>{item}</span>
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
            <p className="text-xl text-gray-100">Advanced tooling capabilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specifications.map((section, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">{section.title}</h3>
                <ul className="space-y-4">
                  {section.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
            <p className="text-xl text-gray-600">Ideal for various thermoforming applications</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white transform transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                  <div className="bg-white rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                    {application.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{application.title}</h3>
                  <p className="text-gray-100 flex-grow">{application.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiltingTools; 