import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Factory, Settings, Shield, FileCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-100">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Hanningfield = () => {
  const productCategories = [
    {
      title: "Milling & Sizing",
      image: "/images/hanningfield/milling.jpg",
      path: "/industries/pharmaceutical/hanningfield/milling-sizing",
      products: [
        "Conical Mills (Under-Driven)",
        "Conical Mills (Over-Driven)",
        "Sifters (Centrifugal Screening)",
        "Pre-Breakers",
        "Particle Sizing Solution",
        "Lump Breakers"
      ]
    },
    {
      title: "Conveying & Transfer",
      image: "/images/hanningfield/conv.jpg",
      path: "/industries/pharmaceutical/hanningfield/conveying-and-transfer",
      products: [
        "Vacuum Conveyors",
        "Sack Tip Stations",
        "Capsule Conveyors",
        "Powder Flow Control Systems"
      ]
    },
    {
      title: "Lifting & Handling",
      image: "/images/hanningfield/lifting.jpg",
      path: "/industries/pharmaceutical/hanningfield/lifting-and-handling",
      products: [
        "Hoists (Lift Systems)",
        "Bin Blenders",
        "Drum Tumblers",
        "Drum Tippers",
        "IBCs",
        "Tablet IBCs",
        "Stainless Steel Drums",
        "R & D Blenders"
      ]
    },
    {
      title: "Containment & Control",
      image: "/images/hanningfield/cont.jpg",
      products: [
        "Cyclones",
        "Hygienic Valves",
        "Silicone Dust Caps",
        "Silicone Connector Sleeves"
      ]
    }
  ];

  const navigate = useNavigate();

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
            <Link to="/industries/food-and-beverage" className="hover:text-primary">Food and Beverage</Link>
            <span>/</span>
            <span className="text-primary">Hanningfield</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img 
              src="/images/hanningfield/hanningfield logo.svg"
              alt="Hanningfield Logo"
              className="h-20 w-auto mb-12 bg-white p-4 rounded-lg"
            />
            <h1 className="text-5xl font-bold mb-6">Powder Processing Solutions</h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert design and manufacture of powder handling and processing systems
            </p>
          </motion.div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Product Range</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for powder processing, handling, and containment
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {productCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => category.path && navigate(category.path)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-primary mb-3 flex items-center">
                      {category.title}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-70" />
                    </h3>
                    <ul className="space-y-1.5">
                      {category.products.map((product, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center text-sm text-gray-600 hover:text-primary cursor-pointer group"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2 group-hover:bg-primary"></div>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to discuss your powder processing requirements
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center"
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

export default Hanningfield; 