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
      image: "https://placehold.co/600x400/e2e8f0/475569?text=Bioprocess+Bags&font=roboto",
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
      image: "https://placehold.co/600x400/e2e8f0/475569?text=Blood+and+Plasma+Bags&font=roboto",
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
      image: "https://placehold.co/600x400/e2e8f0/475569?text=Ostomy+Pouches&font=roboto",
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

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
          >
            <img 
              src="https://placehold.co/200x50/e2e8f0/475569?text=KIEFEL&font=roboto"
              alt="Kiefel Logo"
              className="h-16 w-auto bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-8"
            />
            <h1 className="text-5xl font-bold mb-6">
              KIEFEL
              <span className="block mt-2">Medical, Pharma, Bioprocess</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Reliable partner for innovative solutions in the medical and pharmaceutical industry
            </p>
            <p className="text-lg text-blue-100">
              The medical and pharmaceutical sector demand the highest standards. Kiefel's systems for producing 
              pharmaceutical and medical specialty bags and special application units guarantee high-quality products 
              in these important sectors.
            </p>
          </motion.div>
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
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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