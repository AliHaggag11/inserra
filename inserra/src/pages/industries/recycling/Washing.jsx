import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Recycle, Filter, CheckCircle, ArrowRight, Cpu, Zap } from 'lucide-react';
import heroImage from '../../../assets/plastic.png';

const Washing = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const washingSteps = [
    {
      title: "Pre-washing",
      description: "Initial cleaning to remove large contaminants and debris",
      details: [
        "Removal of labels and adhesives",
        "Separation of non-plastic materials",
        "Initial dirt removal",
        "Size reduction preparation"
      ]
    },
    {
      title: "Hot Washing",
      description: "Intensive cleaning with hot water and cleaning agents",
      details: [
        "Removal of oils and grease",
        "Elimination of organic residues",
        "Deep cleaning of surface contamination",
        "Chemical treatment for stubborn impurities"
      ]
    },
    {
      title: "Friction Washing",
      description: "Mechanical cleaning through friction between plastic particles",
      details: [
        "Surface quality improvement",
        "Remaining contamination removal",
        "Material purification",
        "Preparation for final rinsing"
      ]
    },
    {
      title: "Rinsing & Drying",
      description: "Final cleaning and moisture removal",
      details: [
        "Clean water rinsing",
        "Centrifugal drying",
        "Thermal drying",
        "Quality control"
      ]
    }
  ];

  const benefits = [
    {
      title: "Higher Quality Output",
      description: "Achieve superior quality recycled materials through thorough cleaning processes"
    },
    {
      title: "Environmental Impact",
      description: "Reduce environmental pollution and promote sustainable plastic recycling"
    },
    {
      title: "Cost Efficiency",
      description: "Optimize operational costs with efficient washing systems and water recycling"
    },
    {
      title: "Market Value",
      description: "Increase the value of recycled materials through better cleaning results"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[70vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10 animate-slide"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Plastic Washing
                <span className="block text-blue-300">Solutions</span>
              </h1>
              <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Advanced washing technology for high-quality recycled materials
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Interactive Process Flow */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">The Washing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive washing process ensures the highest quality output for recycled plastics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {washingSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Connection Lines */}
                {index < washingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark transform translate-y-[-50%] z-0"></div>
                )}
                
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                  <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-lg p-4 mb-6">
                    <Droplets className="w-10 h-10 mb-2" />
                    <span className="text-4xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section with 3D Cards */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Benefits of Advanced Washing</h2>
            <p className="text-xl text-blue-200">Maximize the value of your recycled materials</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 h-full transform transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-lg p-3 mr-4">
                      <div className="w-12 h-12 flex items-center justify-center text-blue-300">
                        {index === 0 && <Filter className="w-8 h-8" />}
                        {index === 1 && <Recycle className="w-8 h-8" />}
                        {index === 2 && <ArrowRight className="w-8 h-8" />}
                        {index === 3 && <CheckCircle className="w-8 h-8" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                      <p className="text-blue-200 text-lg">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Features with Interactive Elements */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Advanced Technology Features</h2>
            <p className="text-xl text-gray-600">State-of-the-art washing solutions for optimal results</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Water Treatment",
                description: "Advanced water recycling systems that minimize environmental impact and reduce operational costs",
                icon: <Droplets className="w-8 h-8" />
              },
              {
                title: "Process Control",
                description: "Automated monitoring and control systems for consistent washing quality",
                icon: <Cpu className="w-8 h-8" />
              },
              {
                title: "Energy Efficiency",
                description: "Optimized energy consumption through innovative heating and drying systems",
                icon: <Zap className="w-8 h-8" />
              }
            ].map((feature, index) => (
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
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Washing; 