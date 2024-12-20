import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Layers, Zap, CheckCircle, ArrowRight, Recycle, Factory, Settings } from 'lucide-react';
import heroImage from '../../../assets/plastic.png';

const Sorting = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const sortingTechnologies = [
    {
      title: "NIR Sorting",
      description: "Near-Infrared technology for precise polymer identification",
      features: [
        "Accurate material identification",
        "High-speed sorting",
        "Multiple material separation",
        "Automated process control"
      ]
    },
    {
      title: "Color Sorting",
      description: "Advanced optical sorting for color separation",
      features: [
        "Multiple color detection",
        "Transparent material sorting",
        "Contamination removal",
        "High throughput capacity"
      ]
    },
    {
      title: "Metal Detection",
      description: "Removal of metal contaminants from plastic waste",
      features: [
        "Ferrous metal detection",
        "Non-ferrous metal detection",
        "Automatic rejection system",
        "Continuous monitoring"
      ]
    },
    {
      title: "Density Separation",
      description: "Separation based on material density differences",
      features: [
        "Float-sink separation",
        "Multiple density stages",
        "High purity output",
        "Continuous processing"
      ]
    }
  ];

  const benefits = [
    {
      title: "Increased Purity",
      description: "Achieve higher purity levels in recycled materials through precise sorting"
    },
    {
      title: "Higher Value",
      description: "Obtain better market prices for sorted materials"
    },
    {
      title: "Efficiency",
      description: "Reduce processing costs with automated sorting systems"
    },
    {
      title: "Flexibility",
      description: "Handle various input materials and adapt to market demands"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[70vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-primary"></div>
        
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
                Advanced Sorting
                <span className="block text-white">Technology</span>
              </h1>
              <div className="w-20 h-1 bg-gray-100 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
                Precision sorting solutions for optimal material separation
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technologies Overview with Interactive Cards */}
      <div className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Sorting Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive sorting solutions ensure maximum material recovery and purity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortingTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white transform transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-lg p-4 mr-6">
                      <Filter className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                      <p className="text-gray-100 mb-6">{tech.description}</p>
                      <ul className="space-y-3">
                        {tech.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-100">
                            <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section with Animated Stats */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Benefits of Advanced Sorting</h2>
            <p className="text-xl text-gray-100">Maximize the value of your recycling operation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gray-100 rounded-xl p-6 h-full transform transition-all duration-300 group-hover:translate-y-[-10px]">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full"></div>
                  <h3 className="text-xl font-bold mb-3 relative z-10 text-primary-dark">{benefit.title}</h3>
                  <p className="text-gray-600 relative z-10">{benefit.description}</p>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-tr-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Section with Visual Elements */}
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
            <p className="text-xl text-gray-600">Wide range of sorting applications for various industries</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Post-Consumer Plastics",
                description: "Sorting of mixed plastic waste from consumer recycling streams",
                icon: <Recycle className="w-8 h-8" />
              },
              {
                title: "Industrial Waste",
                description: "Processing of production waste and industrial plastic scrap",
                icon: <Factory className="w-8 h-8" />
              },
              {
                title: "Special Applications",
                description: "Custom sorting solutions for specific material requirements",
                icon: <Settings className="w-8 h-8" />
              }
            ].map((application, index) => (
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
                  <div className="bg-gray-100 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                    {React.cloneElement(application.icon, { className: "w-8 h-8 text-primary" })}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{application.title}</h3>
                  <p className="text-gray-100">{application.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorting; 