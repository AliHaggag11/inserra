import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cog, Gauge, Wrench } from 'lucide-react';

const MillingAndSizing = () => {
  const products = [
    {
      title: "Conical Mills (Under-Driven)",
      image: "/images/hanningfield/conical under.jpg",
      description: "The Hanningfield Uni-Mill U-Series utilizes the current industry standard under-driven cone mill design, featuring a gearbox-driven impeller, rotating inside a screen.",
      features: [
        "Gearbox-driven impeller",
        "Industry standard design",
        "Rotating screen system",
        "Precise particle size control"
      ],
      link: "/industries/pharmaceutical/hanningfield/uni-mill-u-series"
    },
    {
      title: "Conical Mills (Over-Driven)",
      image: "/images/hanningfield/product-canical-under-driven.jpg",
      description: "The Hanningfield Uni-Mill B-Series utilises the current industry standard over-driven conical mill design, featuring a belt-driven impeller, rotating inside a screen.",
      features: [
        "Belt-driven impeller",
        "Over-driven design",
        "Efficient processing",
        "Versatile application"
      ],
      link: "/industries/pharmaceutical/hanningfield/uni-mill-b-series"
    },
    {
      title: "Sifters (Centrifugal Screening)",
      image: "/images/hanningfield/sifters.jpg",
      description: "The Hanningfield Kwik-Sift offers fast and effective powder screening, helping to guarantee material integrity through the capture of alien objects.",
      features: [
        "Fast powder screening",
        "Material integrity guarantee",
        "Alien object capture",
        "Efficient processing"
      ],
      link: "/industries/pharmaceutical/hanningfield/kwik-sift"
    },
    {
      title: "Pre-Breakers",
      image: "/images/hanningfield/prebreakers.jpg",
      description: "Hanningfield Pre-Breakers offer fast and effective breaking of materials for initial sizing.",
      features: [
        "Fast material breaking",
        "Initial sizing capability",
        "Efficient processing",
        "Robust construction"
      ],
      link: "/industries/pharmaceutical/hanningfield/pre-breakers"
    },
    {
      title: "Particle Sizing Solution",
      image: "/images/hanningfield/product-particle-sizing-solution-460x308.jpg",
      description: "The Hanningfield Particle Sizing Solution offers a cost-effective and flexible solution for achieving milling and sifting processes on one machine.",
      features: [
        "Combined milling & sifting",
        "Cost-effective solution",
        "Process flexibility",
        "Space-efficient design"
      ],
      link: "/industries/pharmaceutical/hanningfield/particle-sizing-solution"
    },
    {
      title: "Lump Breakers",
      image: "/images/hanningfield/lump.jpg",
      description: "The Hanningfield LumpBreaker is designed for the simple deagglomeration of compacted material into smaller particles.",
      features: [
        "Simple deagglomeration",
        "Compact design",
        "Efficient processing",
        "Easy maintenance"
      ],
      link: "/industries/pharmaceutical/hanningfield/lump-breakers"
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
            <h1 className="text-5xl font-bold mb-6">Milling & Sizing</h1>
            <p className="text-xl text-blue-100 mb-8">
              High integrity machines for achieving various particle sizing processes; handling everything from bulk agglomerates to micronized material.
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
              <p className="text-gray-600">Explore our range of milling and sizing solutions</p>
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
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1 h-1 rounded-full bg-primary/60 mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {product.link ? (
                      <Link
                        to={product.link}
                        className="mt-4 text-primary text-sm font-medium flex items-center hover:text-primary-dark transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    ) : (
                      <button 
                        className="mt-4 text-primary text-sm font-medium flex items-center hover:text-primary-dark transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - make it more compact */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
            <p className="text-lg text-blue-100 mb-6">
              Contact us to discuss your specific milling and sizing requirements
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

export default MillingAndSizing; 