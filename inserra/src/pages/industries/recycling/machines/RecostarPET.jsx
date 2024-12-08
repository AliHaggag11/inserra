import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Zap, Settings, Gauge, ChevronRight } from 'lucide-react';
import heroImage from '../../../../assets/plastic.png';

const RecostarPET = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const specifications = [
    {
      title: "Processing Capacity",
      value: "300 - 2,000 kg/h",
      description: "High throughput for bottle-to-bottle recycling",
      icon: <Gauge className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Material Types",
      value: "PET bottles & trays",
      description: "Specialized for PET recycling",
      icon: <Beaker className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Output Quality",
      value: "Food-grade rPET",
      description: "Meets FDA & EFSA standards",
      icon: <Settings className="w-8 h-8 text-blue-300" />
    },
    {
      title: "IV Value",
      value: "Up to 0.85 dl/g",
      description: "High intrinsic viscosity",
      icon: <Zap className="w-8 h-8 text-blue-300" />
    }
  ];

  const features = [
    {
      title: "Super-Clean Technology",
      description: "Advanced decontamination for food-grade quality",
      icon: <Beaker className="w-12 h-12 text-primary" />,
      details: [
        "Multi-stage decontamination process",
        "Continuous quality monitoring",
        "Automated contamination removal"
      ]
    },
    {
      title: "SSP Integration",
      description: "Solid state polycondensation for IV boost",
      icon: <Zap className="w-12 h-12 text-primary" />,
      details: [
        "Controlled crystallization",
        "Precise temperature regulation",
        "Optimized residence time"
      ]
    },
    {
      title: "Smart Operation",
      description: "Automated process control and monitoring",
      icon: <Settings className="w-12 h-12 text-primary" />,
      details: [
        "Real-time process monitoring",
        "Automated parameter adjustment",
        "Predictive maintenance"
      ]
    },
    {
      title: "Energy Recovery",
      description: "Efficient heat recovery system",
      icon: <Gauge className="w-12 h-12 text-primary" />,
      details: [
        "Heat exchange optimization",
        "Energy consumption reduction",
        "Sustainable operation"
      ]
    }
  ];

  const applications = [
    {
      title: "Beverage bottles",
      description: "Food-grade recycling for bottle-to-bottle applications",
      image: "https://placehold.co/600x400/1e40af/ffffff?text=Beverage+Bottles"
    },
    {
      title: "Food containers",
      description: "High-quality rPET for food packaging",
      image: "https://placehold.co/600x400/1e40af/ffffff?text=Food+Containers"
    },
    {
      title: "Thermoform sheets",
      description: "Premium material for thermoforming applications",
      image: "https://placehold.co/600x400/1e40af/ffffff?text=Thermoform+Sheets"
    },
    {
      title: "Strapping materials",
      description: "High-strength recycled PET for industrial use",
      image: "https://placehold.co/600x400/1e40af/ffffff?text=Strapping"
    },
    {
      title: "Technical fibers",
      description: "Quality fibers for textile applications",
      image: "https://placehold.co/600x400/1e40af/ffffff?text=Technical+Fibers"
    },
    {
      title: "Food packaging",
      description: "Safe and sustainable packaging solutions",
      image: "https://placehold.co/600x400/1e40af/ffffff?text=Food+Packaging"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/industries/recycling" className="hover:text-primary">Recycling</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/industries/recycling/starlinger-recycling" className="hover:text-primary">Starlinger Recycling</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary">recoSTAR PET</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  recoSTAR PET
                  <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
                    Food-Grade PET Recycling
                  </span>
                </h1>
                <div className="w-20 h-1 bg-blue-300 mb-6"></div>
                <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
                  Advanced bottle-to-bottle recycling technology with superior decontamination performance
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Gauge className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Up to 2,000 kg/h</span>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Beaker className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Food-grade Quality</span>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Settings className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Smart Operation</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">Advanced features for optimal performance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ translateY: -5 }}
              >
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                  {spec.icon}
                </div>
                <div className="relative z-10">
                  {spec.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{spec.title}</h3>
                  <div className="text-3xl font-bold text-blue-300 mb-2">{spec.value}</div>
                  <p className="text-blue-100">{spec.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">What sets recoSTAR PET apart</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-primary/5 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Applications</h2>
            <p className="text-xl text-blue-200">Wide range of processing capabilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                  <p className="text-blue-200">{app.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecostarPET; 