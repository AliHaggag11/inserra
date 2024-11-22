import React from 'react';
import { motion } from 'framer-motion';
import { Package, Leaf, Recycle, CheckCircle, ArrowRight, Factory, Shield, Zap } from 'lucide-react';
import heroImage from '../../../assets/plastic.png';

const Packaging = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const solutions = [
    {
      title: "Thermoforming Systems",
      description: "Advanced thermoforming technology for sustainable packaging solutions",
      features: [
        "High-speed production",
        "Precision forming",
        "Energy efficiency",
        "Material optimization"
      ],
      link: "/industries/packaging/kiefel"
    },
    {
      title: "Fiber Technology",
      description: "Innovative fiber-based packaging solutions for eco-friendly alternatives",
      features: [
        "Sustainable materials",
        "Customizable designs",
        "Eco-friendly process",
        "High-quality output"
      ],
      link: "/industries/packaging/kiefel-fiber"
    },
    {
      title: "Viscotec Solutions",
      description: "Cutting-edge viscose and polymer processing technology",
      features: [
        "Advanced processing",
        "Material versatility",
        "Quality control",
        "Process optimization"
      ],
      link: "/industries/packaging/viscotec"
    }
  ];

  const benefits = [
    {
      title: "Sustainability",
      description: "Eco-friendly solutions reducing environmental impact",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      title: "Efficiency",
      description: "Optimized production processes for maximum output",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Quality",
      description: "Superior product quality and consistency",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Cutting-edge technology and continuous improvement",
      icon: <Factory className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
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
                Packaging
                <span className="block text-blue-300">Solutions</span>
              </h1>
              <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Advanced thermoforming and sustainable packaging technologies
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive packaging solutions for various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white h-full">
                  <div className="bg-white/20 rounded-lg p-4 w-fit mb-6">
                    <Package className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-blue-100 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-blue-100">
                        <CheckCircle className="w-5 h-5 mr-3 text-blue-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={solution.link}
                    className="inline-flex items-center text-blue-300 hover:text-white transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
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
            <p className="text-xl text-blue-200">Leading the way in packaging innovation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-200">{benefit.description}</p>
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
            <p className="text-xl text-gray-600">Serving diverse packaging needs across industries</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Food & Beverage",
                description: "Safe and sustainable packaging solutions for food products",
                icon: <Package className="w-8 h-8" />
              },
              {
                title: "Consumer Goods",
                description: "Attractive and functional packaging for retail products",
                icon: <Factory className="w-8 h-8" />
              },
              {
                title: "Industrial Packaging",
                description: "Durable and efficient packaging for industrial applications",
                icon: <Shield className="w-8 h-8" />
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
    </div>
  );
};

export default Packaging; 