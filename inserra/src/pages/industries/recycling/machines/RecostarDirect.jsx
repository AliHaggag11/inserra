import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Gauge, Minimize2, Timer, Zap, Repeat, Factory, LineChart, Workflow } from 'lucide-react';
import heroImage from '../../../../assets/plastic.png';

const RecostarDirect = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const specifications = [
    {
      title: "Processing Capacity",
      value: "100 - 1,200 kg/h",
      description: "Direct inline recycling",
      icon: <Gauge className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Space Efficiency",
      value: "Compact",
      description: "Minimal footprint",
      icon: <Minimize2 className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Response Time",
      value: "Immediate",
      description: "Quick material changes",
      icon: <Timer className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Energy Usage",
      value: "Optimized",
      description: "Efficient operation",
      icon: <Zap className="w-8 h-8 text-blue-300" />
    }
  ];

  const features = [
    {
      title: "Direct Processing",
      description: "Immediate recycling of production waste",
      icon: <Factory className="w-12 h-12 text-primary" />,
      details: [
        "No intermediate storage",
        "Reduced handling costs",
        "Immediate material recovery"
      ]
    },
    {
      title: "Space Optimization",
      description: "Compact design for production integration",
      icon: <Minimize2 className="w-12 h-12 text-primary" />,
      details: [
        "Small footprint",
        "Flexible positioning",
        "Easy integration"
      ]
    },
    {
      title: "Process Efficiency",
      description: "Optimized energy and resource usage",
      icon: <LineChart className="w-12 h-12 text-primary" />,
      details: [
        "Low energy consumption",
        "Minimal material loss",
        "High output quality"
      ]
    },
    {
      title: "Quick Changes",
      description: "Fast adaptation to production needs",
      icon: <Repeat className="w-12 h-12 text-primary" />,
      details: [
        "Rapid color changes",
        "Fast material transitions",
        "Minimal downtime"
      ]
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      stats: [
        { label: "Material Savings", value: "Up to 30%" },
        { label: "Energy Savings", value: "Up to 20%" },
        { label: "Labor Cost", value: "Minimal" }
      ],
      icon: <LineChart className="w-16 h-16" />
    },
    {
      title: "Production Efficiency",
      stats: [
        { label: "Setup Time", value: "Minutes" },
        { label: "Material Changes", value: "Quick" },
        { label: "Maintenance", value: "Simple" }
      ],
      icon: <Factory className="w-16 h-16" />
    },
    {
      title: "Quality Control",
      stats: [
        { label: "Output Quality", value: "High" },
        { label: "Consistency", value: "Excellent" },
        { label: "Contamination", value: "Minimal" }
      ],
      icon: <Workflow className="w-16 h-16" />
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
            <span className="text-primary">recoSTAR direct</span>
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
                  recoSTAR direct
                  <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
                    Inline Production Waste Recycling
                  </span>
                </h1>
                <div className="w-20 h-1 bg-blue-300 mb-6"></div>
                <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
                  Efficient direct processing of production waste - immediate material recovery
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Factory className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Inline Processing</span>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Minimize2 className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Space Saving</span>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Timer className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Quick Response</span>
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
            <p className="text-xl text-gray-600">What sets recoSTAR direct apart</p>
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
            <h2 className="text-4xl font-bold mb-4">Business Benefits</h2>
            <p className="text-xl text-blue-200">Measurable advantages for your production</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">{benefit.title}</h3>
                <div className="space-y-4">
                  {benefit.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="text-blue-200">{stat.label}</span>
                      <span className="font-bold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecostarDirect; 