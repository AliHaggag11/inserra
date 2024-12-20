import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Shield, CheckCircle, ArrowRight, Settings, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../../assets/plastic.png';

const StackingKTR = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      title: "SPEEDSTACKER",
      description: "Fully automatic stacking and packaging",
      details: [
        "Max. Speed & Performance for production",
        "Fast and easy change of format parts",
        "Optimized product transfer",
        "Intelligent systems for efficient format change"
      ]
    },
    {
      title: "SPEEDSTACKER COMPACT",
      description: "Integrated carton filling solution",
      details: [
        "Fully automatic carton filling",
        "Optional return conveyor",
        "Up to 30 cup stacks per minute",
        "Hygienic and efficient operation"
      ]
    },
    {
      title: "Vertisleever",
      description: "Efficient & hygienic sleeving",
      details: [
        "Up to 20 stacks per minute",
        "Easy access to film rolls",
        "Compact and flexible design",
        "Automated sleeving process"
      ]
    }
  ];

  const specifications = [
    {
      title: "SPEEDSTACKER Technical Highlights",
      specs: [
        "Max. cycles/stacks: 50 per min/25 per min",
        "Product dimensions: Ø 37 - 150 mm",
        "Product height: 25 - 200 mm",
        "Stack length: 500 - 780 mm",
        "Box dimensions: min. 300 x 340 x 210 mm (l/w/h)",
        "Box dimensions: max. 800 x 800 x 600 mm (l/w/h)",
        "Format changeover time: < 1 hour"
      ]
    },
    {
      title: "Vertisleever Technical Highlights",
      specs: [
        "Stacks max: 20 stacks/min",
        "Stack length: 350 - 650 mm",
        "Film length max: 800 mm",
        "Film thickness: 0.017 - 0.024 mm",
        "Material: LD-PE (other materials on demand)"
      ]
    }
  ];

  const heroContent = {
    title: "Stacking & Automation Solutions",
    subtitle: "for tilting machines",
    description: "We provide you with the right stacking & automation solutions for your SPEEDFORMER KTR, from stacking solutions such as the SPEEDSTACKER or the Pick-Up Stacker to intelligent automation such as the Modular Cup Packer (MCP), the RIMMROLLER or the Vertipacker."
  };

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
            <span className="text-primary">KTR Stacking & Automation</span>
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
                    src="/images/kiefel/ktrstack.webp"
                    alt="KTR Stacking & Automation System"
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
              Automation Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions for KTR series machines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                  {index === 0 && <Factory className="w-10 h-10 text-primary" />}
                  {index === 1 && <Settings className="w-10 h-10 text-primary" />}
                  {index === 2 && <Shield className="w-10 h-10 text-primary" />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-100 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-100">
                      <CheckCircle className="w-5 h-5 text-gray-100 mr-3 flex-shrink-0" />
                      <span>{detail}</span>
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
            <h2 className="text-3xl font-bold mb-4">Technical Highlights</h2>
            <p className="text-xl text-gray-100">Specifications & capabilities</p>
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
            <p className="text-xl text-gray-600">Advantages of our automation solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Increased Efficiency",
                description: "Optimize production throughput with automated handling",
                icon: <Zap className="w-8 h-8 text-primary" />
              },
              {
                title: "Consistent Quality",
                description: "Ensure reliable and repeatable product handling",
                icon: <Shield className="w-8 h-8 text-primary" />
              },
              {
                title: "Flexible Integration",
                description: "Seamless integration with KTR series machines",
                icon: <Settings className="w-8 h-8 text-primary" />
              }
            ].map((benefit, index) => (
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

export default StackingKTR; 