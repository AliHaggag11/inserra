import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Settings, CheckCircle, Zap, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../../assets/plastic.png';

const UpstreamDownstream = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const upstreamSolutions = [
    {
      title: "Unreeling Unit KA",
      description: "The KA unreeling unit enables sophisticated control of film rolls --> no stop & go.",
      features: [
        "Indicates the end of the film",
        "Can be modularly extended by a lifting device",
        "Ultrasonic joining unit",
        "Sophisticated control system"
      ]
    },
    {
      title: "Preheating KVH",
      description: "The preheater KVH has a sophisticated control of the film loops -> no stop & go.",
      features: [
        "Efficient film heating",
        "Power consumption can be kept low",
        "Can also score as an independent unit",
        "Compatible with non-Kiefel machines"
      ]
    }
  ];

  const downstreamSolutions = [
    {
      title: "SPEEDGRINDER (KSG)",
      description: "A so-called 'skeleton grinder' which grinds the residual skeleton which is produced in the thermoforming process after the finished parts have been punched out. The ground material can be fed back into the extrusion process and thus be processed into plastic film again.",
      features: [
        "Low dust and noise levels due to low rotor speed",
        "Best material quality due to optimum feed speed and rotor cutting speed",
        "Good accessibility for maintenance and cleaning",
        "Closed-loop recycling management"
      ]
    },
    {
      title: "Technical Highlights",
      description: "SPEEDGRINDER specifications",
      features: [
        "KSG 90-200: short-term 900 kg/hour, long-term 450 kg/hour",
        "KSG 50-200: short-term 750 kg/hour, long-term 600 kg/hour",
        "Motor power: 22 kW (Max.)",
        "Infeed opening: 600 mm",
        "Max. noise level: 80 dB (real production)",
        "Rotor speed: 420 rpm"
      ]
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Optimize production flow and reduce downtime",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Quality Assurance",
      description: "Consistent product quality through integrated control",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Process Integration",
      description: "Seamless connection of all production steps",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Automation",
      description: "Reduced manual handling and increased productivity",
      icon: <Factory className="w-8 h-8" />
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
            <span className="text-primary">Upstream & Downstream</span>
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
                Upstream & Downstream
                <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
                  Complete Processing Solutions
                </span>
              </h1>
              <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Integrated solutions for material handling and processing
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
                    src="/images/kiefel/upstream.webp"
                    alt="Upstream & Downstream Solutions"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Upstream Solutions */}
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
              Upstream Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced material handling and preparation systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upstreamSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-lg p-4 mr-6">
                    <Factory className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-blue-100 mb-6">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-blue-100">
                          <CheckCircle className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Downstream Solutions */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Downstream Solutions</h2>
            <p className="text-xl text-blue-200">Post-processing and packaging systems</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downstreamSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 text-primary-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-lg p-4 mr-6">
                    <Settings className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
            <p className="text-xl text-gray-600">Advantages of integrated line solutions</p>
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

export default UpstreamDownstream; 