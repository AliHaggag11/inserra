import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Filter, Droplets, ArrowRight, Factory, Settings, Leaf } from 'lucide-react';
import heroImage from '../../../assets/plastic.png';

const Recycling = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const solutions = [
    {
      title: "Starlinger Recycling",
      description: "Complete plastic recycling systems for optimal material recovery",
      features: [
        "High-performance recycling",
        "Material recovery",
        "Quality output",
        "Process efficiency"
      ],
      link: "/industries/recycling/starlinger-recycling"
    },
    {
      title: "Washing Solutions",
      description: "Advanced washing technology for thorough material cleaning",
      features: [
        "Thorough cleaning",
        "Water efficiency",
        "Contaminant removal",
        "Process optimization"
      ],
      link: "/industries/recycling/washing"
    },
    {
      title: "Sorting Technology",
      description: "Precise material separation systems for maximum purity",
      features: [
        "Accurate sorting",
        "Multiple materials",
        "High throughput",
        "Quality control"
      ],
      link: "/industries/recycling/sorting"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Collection & Sorting",
      description: "Initial material separation and categorization"
    },
    {
      number: "02",
      title: "Washing & Cleaning",
      description: "Thorough cleaning and contaminant removal"
    },
    {
      number: "03",
      title: "Processing",
      description: "Material transformation and enhancement"
    },
    {
      number: "04",
      title: "Quality Control",
      description: "Final inspection and quality assurance"
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
                Recycling
                <span className="block text-blue-300">Solutions</span>
              </h1>
              <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Complete systems for efficient plastic recycling
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
              Comprehensive recycling solutions for sustainable material recovery
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
                    {index === 0 && <Recycle className="w-10 h-10" />}
                    {index === 1 && <Droplets className="w-10 h-10" />}
                    {index === 2 && <Filter className="w-10 h-10" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-blue-100 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-blue-100">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3"></div>
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

      {/* Process Steps */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">The Recycling Process</h2>
            <p className="text-xl text-blue-200">From waste to valuable resources</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-300/20 transform -translate-y-1/2 z-0"></div>
                )}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 relative z-10">
                  <div className="text-4xl font-bold text-blue-300 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-blue-200">{step.description}</p>
                </div>
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
            <p className="text-xl text-gray-600">Serving diverse recycling needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Post-Consumer Waste",
                description: "Processing of consumer plastic waste",
                icon: <Recycle className="w-8 h-8" />
              },
              {
                title: "Industrial Scrap",
                description: "Recycling of production waste",
                icon: <Factory className="w-8 h-8" />
              },
              {
                title: "Special Materials",
                description: "Custom recycling solutions",
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

export default Recycling; 