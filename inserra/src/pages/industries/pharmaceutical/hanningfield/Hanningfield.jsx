import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const customers = [
    {
      name: "Givaudan",
      logo: "https://www.givaudan.com/themes/custom/givaudan/logo.svg"
    },
    {
      name: "ABInBev",
      logo: "https://www.ab-inbev.com/content/dam/abinbev/logos/ABI_Logo_RGB_Horizontal.png"
    },
    {
      name: "Kelloggs",
      logo: "https://www.kelloggs.com/content/dam/kelloggs/kelloggs-logo.png"
    },
    {
      name: "Kraft Heinz",
      logo: "https://www.kraftheinzcompany.com/images/kraft_heinz_logo.png"
    },
    {
      name: "Nestle",
      logo: "https://www.nestle.com/sites/default/files/nestle-logo-white.png"
    },
    {
      name: "P&G",
      logo: "https://us.pg.com/-/media/project/pg/pg-com/design-system/logo.png"
    },
    {
      name: "Reckitt Benckiser",
      logo: "https://www.reckitt.com/static/rb-logo-black.svg"
    },
    {
      name: "Tetley",
      logo: "https://www.tetley.co.uk/themes/custom/tetley_theme/logo.svg"
    },
    {
      name: "Unilever",
      logo: "https://www.unilever.com/Images/unilever-logo-2_tcm244-545507_w400.png"
    }
  ];

  const features = [
    {
      title: "GMP Standards",
      description: "All equipment manufactured to hygienic food-grade standards",
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: "Custom Solutions",
      description: "Fully customizable equipment to suit your requirements",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Food Safety",
      description: "Equipment designed to meet food safety standards",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Certification",
      description: "3.1 mill certificates provided",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const carouselImages = [
    {
      url: "https://placehold.co/800x450/e2e8f0/475569?text=Powder+Handling+Equipment&font=roboto",
      alt: "Powder Handling Equipment"
    },
    {
      url: "https://placehold.co/800x450/e2e8f0/475569?text=Processing+Systems&font=roboto",
      alt: "Processing Systems"
    },
    {
      url: "https://placehold.co/800x450/e2e8f0/475569?text=Containment+Solutions&font=roboto",
      alt: "Containment Solutions"
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
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
          >
            <img 
              src="https://placehold.co/300x100/e2e8f0/475569?text=Hanningfield+Logo&font=roboto"
              alt="Hanningfield Logo"
              className="h-20 w-auto mb-12 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
            />
            <h1 className="text-5xl font-bold mb-6">Hanningfield F&B</h1>
            <p className="text-xl text-blue-100 mb-8">
              Hanningfield is an expert in the design, manufacture and supply of powder handling and powder 
              processing systems for the food industry.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Solutions</h2>
            <p className="text-gray-600">Explore our range of pharmaceutical equipment</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Hanningfield offer a wide range of hygienic food-grade stainless steel machinery for powder handling, 
              powder processing and powder containment suitable for the food and beverage industry.
            </h2>
            <p className="text-gray-600 mb-8">
              Alongside our standard range of equipment, we are capable of supplying fully integrated and installed 
              systems for your project in the food and beverage industry. As a manufacturer, and not just a supplier, 
              Hanningfield can design and fabricate the necessary interfaces between processes and can also build 
              custom-designed special purpose machinery to satisfy any requirement.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
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

      {/* Customers Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Customers</h2>
            <p className="text-gray-600">Trusted by leading pharmaceutical companies worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.name}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 filter brightness-0"
                />
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
              Contact us to learn more about our pharmaceutical solutions
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

export default Hanningfield; 