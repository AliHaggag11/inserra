import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Settings, Gauge, Shield } from 'lucide-react';

const OstomyPouches = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    {
      number: "300M+",
      label: "Ostomy bags produced annually",
      description: "on Kiefel machines worldwide"
    },
    {
      number: "100%",
      label: "Quality focus",
      description: "Comfort and reliability"
    },
    {
      number: "3",
      label: "Pouch types",
      description: "Colostomy, ileostomy, urostomy"
    },
    {
      number: "24/7",
      label: "Production capability",
      description: "Automated manufacturing"
    }
  ];

  const features = [
    {
      title: "Comprehensive Solutions",
      description: "All areas of ostomy pouch production covered",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Advanced Technology",
      description: "Fully and semi-automatic systems available",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "High Output",
      description: "Optimized production rates with quality assurance",
      icon: <Gauge className="w-6 h-6" />
    }
  ];

  const productTypes = [
    "Closed or open bags",
    "Inspection windows",
    "Activated charcoal filters",
    "Venting and odor prevention",
    "Soft adhesive adapters",
    "Hard plastic flanges",
    "Different materials and film layers",
    "Label applications"
  ];

  const benefits = [
    {
      title: "High production rates and optimal product quality",
      description: "Ensuring efficient manufacturing while maintaining the highest standards"
    },
    {
      title: "Optimized footprint",
      description: "Highest output per m² of cleanroom space"
    },
    {
      title: "Outstanding article variety and flexibility",
      description: "High flexibility on the same machine"
    },
    {
      title: "Most accurate welding process",
      description: "Highest welding precision and quality through smart welding force control"
    },
    {
      title: "Maximum precision tool design",
      description: "Engineered for optimal performance and consistency"
    },
    {
      title: "Quick tool changes",
      description: "Quick & easy welding tool change mechanism for fast change-over and less downtime"
    },
    {
      title: "Quality control systems",
      description: "Control systems for quality assurance and reject part management"
    },
    {
      title: "Self-diagnosis system",
      description: "Self-diagnosis system for highest user friendliness"
    },
    {
      title: "Efficient maintenance",
      description: "Machines designed for efficient maintenance and easy operator access"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <span>/</span>
            <Link to="/industries/pharmaceutical/kiefel-medical-pharma" className="hover:text-primary">
              Medical, Pharma, Bioprocess
            </Link>
            <span>/</span>
            <span className="text-primary">Ostomy Pouches</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
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
            <h1 className="text-5xl font-bold mb-6">
              Ostomy Pouches
              <span className="block text-2xl mt-4 text-blue-100">
                Colostomy bags, ileostomy bags, urostomy bags
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We understand the sensitivity of issues relating to ostomy bags for the user. They must be 
              comfortable and inconspicuous; they must be odor-free and never leak.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-10 z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Showcase Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Manufacturing Excellence</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                With this in mind, we manufacture our systems to produce ostomy bags with the utmost focus 
                on quality, comfort and reliability.
              </p>
            </div>
            
            {/* Machine Image */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-12">
              <img
                src="/images/kiefel/KIEFEL_ostomy bag machine@2x.webp"
                alt="Kiefel Ostomy Pouch Manufacturing Machine"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Image */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/kiefel/Bild 07_Kolostony bags quer038@2x.webp"
                alt="Ostomy Pouches Products"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-primary mb-4 transform hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Types Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Product Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our know-how covers all areas of ostomy pouch production
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {productTypes.map((type, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700">{type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Your Kiefel Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our innovative and sustainable solutions provide you with industry-leading advantages
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Production?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to learn more about our ostomy pouch manufacturing solutions
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 flex items-center"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OstomyPouches; 