import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ConveyingAndTransfer = () => {
  const products = [
    {
      title: "Vacuum Conveyors",
      image: "/images/hanningfield/Uni-Vac.jpg",
      description: "Hanningfield Uni-Vac vacuum conveyors are designed as a safe and convenient method for transferring powder.",
      features: [
        "Safe powder transfer",
        "Convenient operation",
        "Efficient processing",
        "Hygienic design"
      ],
      link: "/industries/pharmaceutical/hanningfield/vacuum-conveyors"
    },
    {
      title: "Sack Tip Stations",
      image: "/images/hanningfield/Sack_Tip.jpg",
      description: "The Hanningfield sack tip station is a simple method for the emptying of sacks, bags etc. while controlling the dust.",
      features: [
        "Dust control",
        "Easy operation",
        "Safe material handling",
        "Efficient emptying"
      ],
      link: "/industries/pharmaceutical/hanningfield/sack-tip-stations"
    },
    {
      title: "Capsule Conveyors",
      image: "/images/hanningfield/CapsuJet.jpg",
      description: "The Hanningfield CapsuleJet capsule transfer system is a proven method for the gentle conveying of hard-shelled gelatin capsules.",
      features: [
        "Gentle capsule handling",
        "Proven technology",
        "Efficient transfer",
        "Minimal product damage"
      ],
      link: "/industries/pharmaceutical/hanningfield/capsule-conveyors"
    },
    {
      title: "Powder Flow Control Systems",
      image: "/images/hanningfield/Powder_Flow_Control_System.jpg",
      description: "The Powder Flow Control System is designed for controlling the gravity transfer of powder from one process to another.",
      features: [
        "Controlled transfer",
        "Process integration",
        "Precise flow control",
        "Reliable operation"
      ],
      link: "/industries/pharmaceutical/hanningfield/powder-flow-control"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Conveying & Transfer</h1>
            <p className="text-xl text-blue-100 mb-8">
              Transfer everything from powders and granules to tablets and capsules.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Products</h2>
              <p className="text-gray-600">Explore our range of conveying and transfer solutions</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain p-4 bg-gray-50"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-primary mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    <ul className="space-y-1.5">
                      {product.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {product.link && (
                      <Link
                        to={product.link}
                        className="mt-4 text-primary text-sm font-medium flex items-center hover:text-primary-dark transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
            <p className="text-lg text-blue-100 mb-6">
              Contact us to discuss your specific conveying and transfer requirements
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary px-6 py-2.5 rounded-full font-medium hover:bg-blue-50 transition duration-300 inline-flex items-center text-sm"
            >
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConveyingAndTransfer; 