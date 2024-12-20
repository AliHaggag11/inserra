import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Award, Zap, Microscope } from 'lucide-react';

const KiefelMedical = () => {
  const navigate = useNavigate();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const products = [
    {
      title: "Bioprocess Bags",
      description: "Advanced solutions for bioprocessing applications",
      image: "/images/kiefel/Bioprocess_Bag.webp",
      features: [
        "High-quality materials",
        "Sterile processing",
        "Customizable designs",
        "Process optimization"
      ],
      path: "/industries/pharmaceutical/kiefel-medical-pharma/bioprocess-bags"
    },
    {
      title: "Blood, Plasma, Transfusion",
      description: "Specialized bags for medical fluid storage and transfer",
      image: "/images/kiefel/Blood bags@2x.webp",
      features: [
        "Medical-grade materials",
        "Precise volume control",
        "Safety features",
        "Long-term storage capability"
      ],
      path: "/industries/pharmaceutical/kiefel/blood-plasma"
    },
    {
      title: "Ostomy Pouches",
      description: "Innovative solutions for ostomy care",
      image: "/images/kiefel/Bild 07_Kolostony bags quer038@2x.webp",
      features: [
        "Comfort-focused design",
        "Secure sealing",
        "Advanced materials",
        "Patient-friendly features"
      ],
      path: "/industries/pharmaceutical/kiefel/ostomy-pouches"
    }
  ];

  const features = [
    {
      title: "High-quality Products",
      description: "Systems for producing pharmaceutical and medical specialty bags",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Industry Leader",
      description: "Leader in high-frequency and thermo-contact welding",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Reliable Solutions",
      description: "Ensuring success and steadiness in the market",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Advanced Technology",
      description: "Cutting-edge solutions for medical applications",
      icon: <Microscope className="w-6 h-6" />
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
            <span className="text-primary">Medical, Pharma, Bioprocess</span>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Medical, Pharma &
                <span className="text-white block mt-2">
                  Bioprocess Solutions
                </span>
              </h1>
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-1 w-20 bg-gray-100"></div>
                <p className="text-xl text-gray-100">
                  Innovative Medical Technology
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-100 backdrop-blur-lg rounded-lg p-4">
                  <h3 className="text-primary font-semibold mb-2">Applications</h3>
                  <p className="text-sm text-gray-600">Medical & pharmaceutical bags</p>
                </div>
                <div className="bg-gray-100 backdrop-blur-lg rounded-lg p-4">
                  <h3 className="text-primary font-semibold mb-2">Technology</h3>
                  <p className="text-sm text-gray-600">High-frequency & thermo-contact welding</p>
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
                <img
                  src="/images/kiefel/Bioprocess_Bag.webp"
                  alt="Kiefel Bioprocess Bag"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">30+</div>
                      <div className="text-xs text-gray-600">years experience</div>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <div className="text-lg font-bold text-primary">100%</div>
                      <div className="text-xs text-gray-600">quality control</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">24/7</div>
                      <div className="text-xs text-gray-600">support</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Solutions</h2>
            <p className="text-gray-600">Explore our range of medical and pharmaceutical products</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  if (product.path) {
                    navigate(product.path);
                  }
                }}
              >
                <div className="relative h-48 w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover p-4 bg-white"
                  />
                </div>
                <div className="p-6 group-hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex justify-end">
                    <span className="text-primary font-semibold flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
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
              Contact us to learn more about our medical and pharmaceutical solutions
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

export default KiefelMedical; 