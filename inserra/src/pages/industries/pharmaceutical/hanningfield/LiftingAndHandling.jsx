import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LiftingAndHandling = () => {
  const products = [
    {
      title: "Hoists (Lift Systems)",
      image: "/images/hanningfield/Uni-Hoist_HES_Image55.jpg",
      description: "Hanningfield Uni-Hoist lift systems are designed for the handling of containers such as Intermediate Bulk Containers (IBCs), drums, containers and bins.",
      features: [
        "Safe container handling",
        "IBC compatible",
        "Drum handling",
        "Efficient operation"
      ],
      link: "/industries/pharmaceutical/hanningfield/hoists"
    },
    {
      title: "Bin Blenders",
      image: "/images/hanningfield/Bin_Blender_1-460x308.jpg",
      description: "The Hanningfield Uni-Blend bin blenders are designed for the gentle tumbling of IBCs and drums, helping to create uniform batches.",
      features: [
        "Gentle tumbling",
        "Uniform mixing",
        "IBC compatible",
        "Drum blending"
      ],
      link: "/industries/pharmaceutical/hanningfield/bin-blenders"
    },
    {
      title: "Drum Tumblers",
      image: "/images/hanningfield/Drum_Tumbler_18-460x308.jpg",
      description: "Hanningfield's Drum Tumblers are designed for the gentle tumbling of drums to create uniform batches.",
      features: [
        "Gentle tumbling",
        "Uniform batches",
        "Easy operation",
        "Efficient mixing"
      ],
      link: "/industries/pharmaceutical/hanningfield/drum-tumblers"
    },
    {
      title: "Drum Tippers",
      image: "/images/hanningfield/Drum_Tipper_Image_Manual_Tip_1-460x308.jpg",
      description: "Eliminate manual processes and reduce operator strain Repeatable positioning for high integrity applications (e.g. docking to inflatable seal on isolator)",
      features: [
        "Reduced manual handling",
        "Operator safety",
        "Repeatable positioning",
        "High integrity"
      ],
      link: "/industries/pharmaceutical/hanningfield/drum-tippers"
    },
    {
      title: "IBCs",
      image: "/images/hanningfield/1500_Litre_IBC-460x308.jpg",
      description: "Hanningfield is able to supply stainless steel Intermediate Bulk Containers (IBCs) for use in the pharmaceutical, food and allied industries.",
      features: [
        "Stainless steel construction",
        "Pharmaceutical grade",
        "Food industry compatible",
        "Various sizes available"
      ],
      link: "/industries/pharmaceutical/hanningfield/ibcs"
    },
    {
      title: "Tablet IBCs",
      image: "/images/hanningfield/Tablet_IBC_Image8-460x308.jpg",
      description: "For the gentle handling of tablets, Hanningfield offer a specifically designed IBC.",
      features: [
        "Gentle tablet handling",
        "Specialized design",
        "Product protection",
        "Easy cleaning"
      ],
      link: "/industries/pharmaceutical/hanningfield/tablet-ibcs"
    },
    {
      title: "Stainless Steel Drums",
      image: "/images/hanningfield/A126-range-460x308.jpg",
      description: "Hanningfield supplies a wide range of stainless steel drums for the contained, convenient and reusable storage of high-value powders.",
      features: [
        "High-value powder storage",
        "Contained storage",
        "Reusable design",
        "Various sizes"
      ],
      link: "/industries/pharmaceutical/hanningfield/stainless-steel-drums"
    },
    {
      title: "R & D Blenders",
      image: "/images/hanningfield/rdblenders.jpg",
      description: "The Hannningfield Vario Blend Module performs multiple blending functions on a single drive unit – IBC, V-Shell, Double Cone and Drum.",
      features: [
        "Multiple blending functions",
        "Single drive unit",
        "Versatile operation",
        "Research applications"
      ],
      link: "/industries/pharmaceutical/hanningfield/rd-blenders"
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
            <h1 className="text-5xl font-bold mb-6">Lifting & Handling</h1>
            <p className="text-xl text-blue-100 mb-8">
              We provide a wide range of systems for the lifting, blending and handling of containers and drums.
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
              <p className="text-gray-600">Explore our range of lifting and handling solutions</p>
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
              Contact us to discuss your specific lifting and handling requirements
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

export default LiftingAndHandling; 