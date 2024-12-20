import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ContainmentAndControl = () => {
  const products = [
    {
      title: "Cyclones",
      image: "/images/hanningfield/Pharmaceutical_Cyclone_Compression_Machine-460x308.jpg",
      description: "Hanningfield cyclones are designed for the efficient separation of powders from air streams in pharmaceutical and food processing applications.",
      features: [
        "High efficiency separation",
        "Sanitary design",
        "Easy cleaning",
        "GMP compliant"
      ],
      link: "/industries/pharmaceutical/hanningfield/cyclones"
    },
    {
      title: "Hygienic Valves",
      image: "/images/hanningfield/Sterivalve_Rotodoser_Rotary_Dosing_Valve_Image_1-460x308.jpg",
      description: "Our range of hygienic valves ensures controlled powder flow and maintains system containment in pharmaceutical processing.",
      features: [
        "Sanitary construction",
        "Easy maintenance",
        "Reliable operation",
        "Dust-free transfer"
      ],
      link: "/industries/pharmaceutical/hanningfield/hygienic-valves"
    },
    {
      title: "Silicone Dust Caps",
      image: "/images/hanningfield/dustcap.jpg",
      description: "Hanningfield silicone dust caps provide a simple yet effective solution for containing powder during transfer operations.",
      features: [
        "Powder containment",
        "FDA compliant materials",
        "Easy installation",
        "Reusable design"
      ],
      link: "/industries/pharmaceutical/hanningfield/silicone-dust-caps"
    },
    {
      title: "Silicone Connector Sleeves",
      image: "/images/hanningfield/connectorsleeve.jpg",
      description: "Flexible silicone connector sleeves ensure dust-free connections between process equipment and containers.",
      features: [
        "Flexible connection",
        "Dust-free transfer",
        "FDA approved materials",
        "Various sizes available"
      ],
      link: "/industries/pharmaceutical/hanningfield/connector-sleeves"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 mt-16 sm:mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Containment & Control</h1>
            <p className="text-xl text-blue-100 mb-8">
              Advanced solutions for powder containment and process control in pharmaceutical manufacturing
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
              <p className="text-gray-600">Explore our range of containment and control solutions</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              Contact us to discuss your specific containment and control requirements
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

export default ContainmentAndControl; 