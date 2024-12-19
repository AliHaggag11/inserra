import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Shield, CheckCircle, ArrowRight, Settings, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../../assets/plastic.png';

const StackingAutomation = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      title: "Pick & Place",
      description: "Continuous output rates with ergonomic design",
      details: [
        "Continuous output rates",
        "Buffer with longer conveyor belt",
        "Ergonomically convenient removal position",
        "Flexible handling solutions"
      ]
    },
    {
      title: "A/B Stacking",
      description: "Economical solution for thin films",
      details: [
        "Processing thin films",
        "High degree of automation",
        "Economical removal and filling",
        "Perfectly designed KMD systems"
      ]
    },
    {
      title: "Further Stacking Solutions",
      description: "Versatile stacking options",
      details: [
        "Tip stacking",
        "Stacking up",
        "Stacking down",
        "Customizable configurations"
      ]
    }
  ];

  const specifications = [
    {
      title: "SPEEDPACKER KSP",
      specs: [
        "Removal height product stack: 700 - 1,000 mm",
        "Removal conveyor dimensions: approx. 1,900 x 780 mm",
        "Installation surface: appx. 3.5 x 1.9 x 3 m",
        "Production speed max: 50 cycles/min"
      ]
    },
    {
      title: "SPEEDAUTOMATION KSA)",
      specs: [
        "Modular automation solutions",
        "Flexible & tailored to customer requirements"
      ]
    },
    {
      title: "SPEEDPADDER",
      specs: [
        "Pad automatic insertion",
      ]
    }
    
  ];

  const automationBenefits = [
    {
      title: "Flexible Integration",
      description: "Flexible use with new & existing machines as well as for machines from other manufacturers (on request)",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "SPEEDPACKER Integration",
      description: "Standard automation module for SPEEDFORMER KMD series with automated shuttle transfer",
      icon: <Factory className="w-8 h-8" />
    },
    {
      title: "Ergonomic Design",
      description: "Optimum buffering of trays with ergonomic removal height",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Efficient Operation",
      description: "Multiple machine operation by one person with reduced labor costs",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const heroContent = {
    title: "Stacking & Automation Solutions",
    subtitle: "for steel rule cutting machines",
    description: "Increasingly shorter product life cycles, a shortage of skilled workers and the trend towards individualization require flexible stacking and automation solutions tailored to customer requirements."
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
            <span className="text-primary">Stacking & Automation</span>
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
                {heroContent.title}
                <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
                  {heroContent.subtitle}
                </span>
              </h1>
              <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                {heroContent.description}
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
                <div className="w-full h-full bg-gray-800 rounded-lg">
                  <img
                    src="/images/kiefel/stacking.webp"
                    alt="Stacking & Automation System"
                    className="w-full h-full object-cover rounded-lg"
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
              Stacking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversified stacking solutions
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
            <h2 className="text-3xl font-bold mb-4">Automation</h2>
            <p className="text-xl text-blue-200">Increasing Efficiency & decreasing manual labor</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specifications.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">{section.title}</h3>
                <ul className="space-y-4">
                  {section.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
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

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600">Advantages of our automation solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white"
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

export default StackingAutomation; 