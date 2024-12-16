import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Shield, Factory, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/plastic.png';

const KiefelFiber = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const machines = [
    {
      title: "NATUREPREP KFP",
      description: "Preparation of natural fibers to produce high-quality packaging",
      image: "/path/to/kfp-image.jpg",
      link: "/industries/packaging/kiefel-fiber/natureprep"
    },
    {
      title: "NATUREFORMER KFT",
      description: "Standard solution for a wide variety of fiber packaging",
      image: "/path/to/kft-image.jpg",
      link: "/industries/packaging/kiefel-fiber/kft"
    },
    {
      title: "NATUREFORMER KFL",
      description: "Fiber thermoforming system for high-end lids & portion cups",
      image: "/path/to/kfl-image.jpg",
      link: "/industries/packaging/kiefel-fiber/kfl"
    }
  ];

  const benefits = [
    {
      title: "Sustainability",
      description: "100% recyclable and biodegradable solutions",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      title: "Efficiency",
      description: "High-speed production with optimal resource usage",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Quality",
      description: "Premium fiber products with consistent quality",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Cutting-edge fiber processing technology",
      icon: <Factory className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Identifier */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <span>/</span>
            <Link to="/industries/packaging" className="hover:text-primary">Packaging</Link>
            <span>/</span>
            <Link to="/industries/packaging/kiefel" className="hover:text-primary">Kiefel</Link>
            <span>/</span>
            <span className="text-primary">Fiber</span>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              <motion.div 
                className="inline-block bg-white p-4 rounded-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <img 
                  src="/images/kiefel/kiefel-technologieslogo.svg"
                  alt="Kiefel Logo" 
                  className="h-16 w-auto"
                />
              </motion.div>
              <span className="text-blue-300 font-semibold mb-4 block tracking-wider">KIEFEL FIBER SOLUTIONS</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Sustainable Fiber
                <span className="text-gray-300 block mt-2">
                  Technology
                </span>
              </h1>
              <div className="w-20 h-1 bg-blue-300/30 mb-6"></div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Innovative fiber-based packaging solutions for a sustainable future, combining 
                eco-friendly materials with cutting-edge technology.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <h3 className="text-blue-300 font-semibold mb-2">Eco-friendly</h3>
                  <p className="text-sm text-blue-100">100% recyclable and biodegradable materials</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <h3 className="text-blue-300 font-semibold mb-2">Versatile</h3>
                  <p className="text-sm text-blue-100">Wide range of packaging applications</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg p-1">
                <div className="w-full h-full bg-gray-800/90 rounded-lg">
                  <img
                    src="/images/kiefel/kiefelfiberhero.webp"
                    alt="Kiefel Fiber Technology"
                    className="w-full h-full object-cover rounded-lg opacity-90"
                  />
                </div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">Sustainable</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">60+</div>
                    <div className="text-sm text-gray-600">Solutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Revolutionary Fiber Technology
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Our fiber thermoforming technology represents a breakthrough in sustainable 
                packaging, offering eco-friendly alternatives without compromising on quality 
                or performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Eco-Friendly",
                    description: "100% biodegradable solutions"
                  },
                  {
                    title: "Versatile",
                    description: "Multiple packaging applications"
                  },
                  {
                    title: "Efficient",
                    description: "Optimized production process"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Machines Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Fiber Processing Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={machine.link} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={machine.image}
                        alt={machine.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x225?text=Machine+Image';
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {machine.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {machine.description}
                      </p>
                      <div className="flex items-center text-primary group-hover:text-primary-dark transition-colors">
                        Find out more
                        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-200">Why choose our fiber technology</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50/95 rounded-xl p-8 hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-primary/10 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KiefelFiber; 