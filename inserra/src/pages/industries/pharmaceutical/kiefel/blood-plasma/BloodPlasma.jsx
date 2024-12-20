import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Settings, Gauge, Beaker } from 'lucide-react';

const BloodPlasma = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
      title: "Wide article variety and high flexibility",
      description: "High flexibility on the same machine"
    },
    {
      title: "Reduced particulate matter generation",
      description: "Clean and efficient production process"
    },
    {
      title: "Most accurate welding process",
      description: "Highest available welding precision and welding quality through smart welding force control"
    },
    {
      title: "Protection of tooling",
      description: "Ultra-fast arc suppression system"
    },
    {
      title: "Quick tool changes",
      description: "Quick and easy welding tool change mechanism"
    },
    {
      title: "Automatic film web control",
      description: "Advanced automation for consistent production"
    },
    {
      title: "Highest-precision tool design",
      description: "Precision engineered for optimal performance"
    },
    {
      title: "Quality control systems",
      description: "Control systems for quality assurance and reject part management"
    },
    {
      title: "Self-diagnosis system",
      description: "Self-diagnosis system for highest user-friendliness"
    },
    {
      title: "Efficient maintenance",
      description: "Machines designed for efficient maintenance and easy operator access"
    },
    {
      title: "Innovative technology",
      description: "Innovative crossfield-welding technology"
    }
  ];

  const features = [
    {
      title: "Material Flexibility",
      description: "Compatible with PVC and EVA materials",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Comprehensive Solutions",
      description: "From blood transfusion to plasma and separation products",
      icon: <Beaker className="w-6 h-6" />
    },
    {
      title: "High Volume Production",
      description: "Over 600 million blood-related products annually",
      icon: <Gauge className="w-6 h-6" />
    }
  ];

  const applications = [
    "Blood transfusion",
    "Blood plasma",
    "Platelet storage",
    "Red blood cells",
    "Cord blood",
    "Stem cells",
    "Special separations",
    "CPD and SAGM solutions"
  ];

  const stats = [
    {
      number: "600M+",
      label: "Blood-related products produced annually",
      description: "on Kiefel machines worldwide"
    },
    {
      number: "2",
      label: "Material options",
      description: "PVC and EVA materials supported"
    },
    {
      number: "100%",
      label: "Quality assurance",
      description: "with advanced control systems"
    },
    {
      number: "24/7",
      label: "Production capability",
      description: "with automated systems"
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
            <span className="text-primary">Blood & Plasma Bags</span>
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
              Blood & Plasma Bags, Blood Filters
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              The need of any kind of blood product is high and shelf life is limited; which makes it crucial that not a single drop is lost.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section - New */}
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

      {/* Machine Showcase Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
              Blood & Plasma Bag Machine
            </h2>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-md">
              <img
                src="/images/kiefel/Blood bag machine_KIR63@2x.webp"
                alt="Kiefel Blood & Plasma Bag Machine KIR63"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Product Showcase Section - Updated */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Leukoreduction Blood Filter */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leukoreduction Blood Filter</h3>
                <p className="text-gray-600 mb-4">
                  Kiefel has state-of-the-art, flexible inline and tray machine concepts for the manufacture 
                  of blood filters. These solutions together with our years of experience in the medical and 
                  pharmaceutical field as well as in high frequency welding, allow us to deliver leukoreduction 
                  blood filter products produced in large quantities and complying with the highest product quality standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mr-2" />
                    High production rates
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mr-2" />
                    Optimal product quality
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mr-2" />
                    Reduced particulate matter generation
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg bg-gray-100 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/kiefel/Blood filter@2x.webp"
                    alt="Leukoreduction Blood Filter"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Blood Bags & Separation Products */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg bg-gray-100 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/kiefel/Blood bags@2x.webp"
                  alt="Blood Bags & Separation Products"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Blood Bags & Separation Products</h3>
                <p className="text-gray-600 mb-4">
                  As an experienced market leader, we are your reliable and competent partner for the entire range 
                  of blood bags and separation or filtration products. Whether your bag is made of PVC or EVA materials, 
                  we provide solutions for sampling bags, top and/or bottom connections, and special separation and storage designs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mr-2" />
                    Wide article variety
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mr-2" />
                    High flexibility on same machine
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-primary w-5 h-5 mr-2" />
                    Advanced welding technology
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid - Updated with hover effects */}
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

      {/* Benefits Section - Updated with new styling */}
      <div className="py-16 bg-white">
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
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
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

      {/* Applications Section - Updated with new design */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Applications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for blood and plasma applications
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700">{app}</span>
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
              Contact us to learn more about our blood and plasma solutions
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

export default BloodPlasma; 