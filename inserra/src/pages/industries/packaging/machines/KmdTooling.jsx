import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shield, CheckCircle, ArrowRight, Settings, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../../assets/plastic.png';

const KmdTooling = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const heroContent = {
    title: "Tools for steel rule cutting machines",
    subtitle: "Flexibility and compatibility for tool deployment",
    description: "With more than 40 years of thermoforming technology experience in the packaging industry (cups, trays, blister, etc.), Kiefel Packaging offers its customers customized tools of the highest quality. Everything to achieve one goal: your satisfaction and the unique productivity advantage."
  };

  const toolFeatures = [
    {
      title: "Forming/Cutting tools",
      description: "The Kiefel Cup-n-Pack (PES) system enables the production of high-quality plastic packaging with the best price-performance ratio.",
      features: [
        "High cutting accuracy even for materials with different shrinkage",
        "Cutting knives do not need to be positioned",
        "Low tool costs compared to the conventional forming/cutting system, since no costly profile grinding of the cutting contour is required",
        "Short equipping times: adjustment of a separate cutting station and the time required for changing blades and the punched counterstide",
        "High flexibility: all common materials can be processed",
        "Low space requirements: no need for a separate cutting station"
      ]
    }
  ];

  const specifications = [
    {
      title: "Material Compatibility",
      specs: [
        "PP, PS, PE, rPET, FLA etc.",
        "Perfect for making trays and lids",
        "Compatible with all common thermoforming systems"
      ]
    },
    {
      title: "System Features",
      specs: [
        "Balance between production output, film utilization, and tool handling",
        "Shortest change over times",
        "Customized tools for specific requirements",
        "Suitable for all standard steel rule cutting machines"
      ]
    }
  ];

  const benefits = [
    {
      title: "Experience",
      description: "Over 40 years of thermoforming technology expertise",
      icon: <Factory className="w-8 h-8 text-primary" />
    },
    {
      title: "Customization",
      description: "Tools customized to your specific requirements",
      icon: <Settings className="w-8 h-8 text-primary" />
    },
    {
      title: "Quality",
      description: "Highest quality standards for optimal production",
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: "Versatility",
      description: "Compatible with all common thermoforming systems",
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
            <span className="text-primary">KMD Tooling</span>
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
                <span className="block text-white text-3xl md:text-4xl mt-4">
                  {heroContent.subtitle}
                </span>
              </h1>
              <div className="w-20 h-1 bg-gray-100 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
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
                <div className="w-full h-full bg-gray-800/90 rounded-lg">
                  <img
                    src="/images/kiefel/kmdtooling.webp"
                    alt="KMD Tooling System"
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
              Advanced features for superior cutting performance
            </p>
          </motion.div>

          <div className="flex justify-center max-w-6xl mx-auto">
            {toolFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white h-full max-w-xl w-full"
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
                <ul className="space-y-4">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-100">
                      <CheckCircle className="w-5 h-5 text-gray-100 mr-3 flex-shrink-0 mt-1" />
                      <span className="flex-1">{item}</span>
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
            <p className="text-xl text-gray-600">Advantages of our tooling solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KmdTooling; 