import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Layers, Boxes, Wrench, Recycle, Factory, Gauge, Settings, Workflow } from 'lucide-react';
import heroImage from '../../../../assets/plastic.png';

const RecostarUniversal = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const specifications = [
    {
      title: "Processing Capacity",
      value: "150 - 1,500 kg/h",
      description: "Flexible output range",
      icon: <Gauge className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Material Types",
      value: "Multiple Polymers",
      description: "Universal application",
      icon: <Boxes className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Configuration",
      value: "Modular",
      description: "Adaptable setup",
      icon: <Layers className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Operation",
      value: "Automated",
      description: "Smart control system",
      icon: <Settings className="w-8 h-8 text-blue-300" />
    }
  ];

  const features = [
    {
      title: "Versatile Processing",
      description: "Handle various types of plastics and forms",
      icon: <Boxes className="w-12 h-12 text-primary" />,
      details: [
        "Multiple polymer compatibility",
        "Various input forms accepted",
        "Wide processing window"
      ]
    },
    {
      title: "Modular Design",
      description: "Flexible configuration options",
      icon: <Layers className="w-12 h-12 text-primary" />,
      details: [
        "Customizable setup",
        "Easy upgrades",
        "Space-efficient layout"
      ]
    },
    {
      title: "Smart Operation",
      description: "Intelligent control and monitoring",
      icon: <Settings className="w-12 h-12 text-primary" />,
      details: [
        "Automated process control",
        "Real-time monitoring",
        "Data-driven optimization"
      ]
    },
    {
      title: "Easy Maintenance",
      description: "User-friendly service design",
      icon: <Wrench className="w-12 h-12 text-primary" />,
      details: [
        "Quick access points",
        "Minimal downtime",
        "Simple cleaning process"
      ]
    }
  ];

  const materialTypes = [
    {
      category: "Post-Industrial",
      materials: [
        "Production waste",
        "Edge trim",
        "Start-up lumps",
        "Fiber waste"
      ],
      icon: <Factory className="w-12 h-12" />
    },
    {
      category: "Post-Consumer",
      materials: [
        "Mixed plastics",
        "Sorted fractions",
        "Film waste",
        "Rigid plastics"
      ],
      icon: <Recycle className="w-12 h-12" />
    },
    {
      category: "Special Materials",
      materials: [
        "Technical polymers",
        "Engineering plastics",
        "Fiber materials",
        "Composites"
      ],
      icon: <Workflow className="w-12 h-12" />
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
            <span className="text-primary">recoSTAR universal</span>
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
                  recoSTAR universal
                  <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
                    Multi-Purpose Recycling Solution
                  </span>
                </h1>
                <div className="w-20 h-1 bg-blue-300 mb-6"></div>
                <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
                  One system for all your recycling needs - versatile, efficient, and reliable
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Boxes className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Multi-Material</span>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Layers className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Modular Design</span>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Settings className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Smart Control</span>
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
                className="relative bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ translateY: -5 }}
              >
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 transition-transform group-hover:scale-110">
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
            <p className="text-xl text-gray-600">What sets recoSTAR universal apart</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-primary/5 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
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

      {/* Material Types Section */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Material Types</h2>
            <p className="text-xl text-blue-200">Comprehensive material processing capabilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materialTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/20 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6">{type.category}</h3>
                <ul className="space-y-4">
                  {type.materials.map((material, idx) => (
                    <li key={idx} className="flex items-center text-blue-100">
                      <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecostarUniversal; 