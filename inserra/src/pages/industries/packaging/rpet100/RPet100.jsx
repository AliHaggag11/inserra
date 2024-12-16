// Required assets (to be replaced with actual images):
// - Logo: /images/viscotec/logo.svg
// - Product images: /images/viscotec/rpet100-products.png

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Thermometer, Recycle, Settings, Leaf, Gauge } from 'lucide-react';

const RPet100 = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    { 
      title: "Heat resistant",
      icon: <Thermometer className="w-6 h-6" />
    },
    { 
      title: "Fully recyclable",
      icon: <Recycle className="w-6 h-6" />
    },
    { 
      title: "One stage thermoforming process",
      icon: <Settings className="w-6 h-6" />
    },
    { 
      title: "100% recycling content possible",
      icon: <Gauge className="w-6 h-6" />
    },
    { 
      title: "Lowest CO₂ footprint",
      icon: <Leaf className="w-6 h-6" />
    }
  ];

  const applications = [
    {
      title: "HOT CUPS",
      image: "hot-cups.png",
      description: "Heat-resistant cups for hot beverages"
    },
    {
      title: "DAIRY PRODUCTS",
      image: "dairy-products.png",
      description: "Packaging for dairy items"
    },
    {
      title: "INSTANT SOUPS",
      image: "instant-soups.png",
      description: "Containers for instant meals"
    },
    {
      title: "TO-GO MEALS",
      image: "to-go-meals.png",
      description: "Ready-meal containers"
    },
    {
      title: "COFFEE LIDS",
      image: "coffee-lids.png",
      description: "Heat-resistant lids"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <span>/</span>
            <Link to="/industries/packaging" className="hover:text-primary">Packaging</Link>
            <span>/</span>
            <Link to="/industries/packaging/viscotec" className="hover:text-primary">Viscotec</Link>
            <span>/</span>
            <span className="text-primary">rPET100</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              <motion.img 
                src="/images/viscotec/logo.svg"
                alt="Viscotec Logo" 
                className="h-12 w-auto mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              <h1 className="text-5xl font-bold mb-6">rPET<sup>100</sup></h1>
              <p className="text-2xl text-blue-100 mb-6">
                Heat resistant and fully recyclable: white rPET<sup>100</sup> packaging for dairy, hot drinks and ready meals
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Made from recycled material and designed for recycling: the new material to make packaging 
                for dairy and hot-fill products fully recyclable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300 flex items-center"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm p-4">
                <img
                  src="/images/viscotec/rpethero.png"
                  alt="rPET100 Products"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">Recyclable</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">Heat</div>
                    <div className="text-sm text-gray-600">Resistant</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">UV</div>
                    <div className="text-sm text-gray-600">Protected</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">rPET<sup>100</sup> Benefits</h2>
            <p className="text-gray-600">Advanced features for sustainable packaging</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Applications</h2>
            <p className="text-gray-600">Versatile solutions for various packaging needs</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/viscotec/rpetapps.png"
                alt="rPET100 Applications"
                className="w-full h-auto object-contain rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-6">
                rPET<sup>100</sup> combines the environmental advantages of recycled PET with easy material 
                processability and opens opportunities for new circular packaging solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Food packaging for applications like dairy, hot drinks, instant soups, and ready-meals must 
                withstand higher temperatures during the production process and consumption. Additionally, 
                dairy products require packaging with optimal light and gas barrier for longer shelf life. 
                The new rPET<sup>100</sup> sheet combines these benefits and adds new ones: it is heat resistant, 
                made from mono-material, and its white colour protects the product from UV light. Once used, 
                the packaging can be 100% recycled because it contains no other polymer additives.
              </p>
              <p className="text-gray-600">
                Trays, cups, and food containers made from white rPET<sup>100</sup> are the fully recyclable 
                alternative to single-use cups made from materials like polypropylene (PP) or polystyrene (PS). 
                Post-consumer recycled PET fulfils all requirements of the European Food Safety Agency (efsa) 
                when it has been super-cleaned with Starlinger viscotec technology. PET/rPET has outstanding 
                material properties that can be restored in the recycling process, which makes PET a truly 
                circular packaging material.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Packaging?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to learn more about how rPET<sup>100</sup> can revolutionize your packaging solutions
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

export default RPet100; 