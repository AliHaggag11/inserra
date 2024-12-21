import React from 'react';
import { motion } from 'framer-motion';
import { Refrigerator, Settings, Shield, ArrowRight } from 'lucide-react';
import heroImage from '../../../assets/plastic.png';

const Appliance = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const applications = [
    {
      title: "Interior Liners",
      description: "High-quality interior linings for refrigerators",
      features: [
        "Precise thermoforming",
        "Optimal material distribution",
        "Superior surface quality",
        "Efficient production"
      ]
    },
    {
      title: "Door Components",
      description: "Advanced door liner manufacturing solutions",
      features: [
        "Complex geometries",
        "High-speed production",
        "Material efficiency",
        "Consistent quality"
      ]
    },
    {
      title: "Special Components",
      description: "Custom solutions for unique requirements",
      features: [
        "Flexible manufacturing",
        "Custom designs",
        "Quality assurance",
        "Technical support"
      ]
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
                Appliance
                <span className="block text-blue-300">Manufacturing</span>
              </h1>
              <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Advanced solutions for appliance component production
              </p>
            </motion.div>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for appliance manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((application, index) => (
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
                    <Refrigerator className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{application.title}</h3>
                  <p className="text-blue-100 mb-6">{application.description}</p>
                  <ul className="space-y-3 mb-8">
                    {application.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-blue-100">
                        <Shield className="w-5 h-5 mr-3 text-blue-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Solution */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Featured Solution</h2>
            <p className="text-xl text-blue-200">Discover our advanced appliance manufacturing technology</p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">KIEFEL Appliance Solutions</h3>
                <p className="text-blue-100 mb-6">
                  Industry-leading technology for appliance component manufacturing,
                  offering superior quality and efficiency.
                </p>
                <a
                  href="/industries/appliance/kiefel-appliance"
                  className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="md:w-1/2 bg-white/5 rounded-lg p-8 flex items-center justify-center">
                <img 
                  src="/images/kiefel/kiefel-technologieslogo.svg" 
                  alt="Kiefel Technologies"
                  className="w-full h-auto max-w-[240px] brightness-0 invert opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appliance; 