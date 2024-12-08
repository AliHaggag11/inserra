import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../../../../assets/plastic.png';

const NatureformerKFL = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      title: "High-end quality technology for high output",
      description: "Up to 280 lids/min thanks to Kiefel's advanced Steam Flow Technology, precise temperature control, improved tool layout, optimized HMI interface, and fast tool change."
    },
    {
      title: "High efficiency: market standard tests are an easy game",
      description: "Our production system not only meets but consistently surpasses quality benchmarks, thanks to its reliability and well-proven performance."
    },
    {
      title: "Lowest energy consumption",
      description: "Lowest energy consumption per kg on the market."
    },
    {
      title: "Versatility for customized product design",
      description: "According to your requirements, fiber-based lids and portion cups up to 40 mm height can be customized to various shapes, fits and applications."
    },
    {
      title: "Improved product quality",
      description: "Optimized production process for shallow parts at significant lower production costs."
    }
  ];

  const geometries = [
    {
      title: "Circular for hot & cold drinks",
      description: "Perfect for beverages of all temperatures",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Circular+Drinks"
    },
    {
      title: "Rectangular for food containers",
      description: "Ideal for various food storage needs",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Rectangular+Containers"
    },
    {
      title: "Portion cups",
      description: "Versatile cups for various applications",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Portion+Cups"
    }
  ];

  const uniqueQualities = [
    {
      number: "1",
      title: "Recyclable or biodegradable",
      description: "Environmentally friendly materials"
    },
    {
      number: "2",
      title: "Leak-proof, functional snap-fit",
      description: "Secure and reliable sealing"
    },
    {
      number: "3",
      title: "Water and heat resistant",
      description: "For cold and hot food and drinks"
    },
    {
      number: "4",
      title: "Wide range of geometries",
      description: "Multiple fits possible"
    },
    {
      number: "5",
      title: "Pleasant feel",
      description: "Excellent surface quality"
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
            <Link to="/industries/packaging/kiefel" className="hover:text-primary">Kiefel</Link>
            <span>/</span>
            <Link to="/industries/packaging/kiefel-fiber" className="hover:text-primary">Fiber</Link>
            <span>/</span>
            <span className="text-primary">NATUREFORMER KFL</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[65vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"></div>
        
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center px-4 pb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-6">
                NATUREFORMER KFL 90.1
                <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
                  High-end Fiber Thermoforming
                </span>
              </h1>
              <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Fiber thermoforming system for high-end lids & portion cups production
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Stats Cards */}
      <div className="relative -mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "280", unit: "lids/min", label: "Max Output" },
              { value: "40", unit: "mm", label: "Max Height" },
              { value: "100%", unit: "", label: "Recyclable" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-xl p-6 transform hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-4xl font-bold text-primary">{stat.value}</span>
                    <span className="text-lg text-primary">{stat.unit}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Geometries Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#666666]">Flexible </span>
              <span className="text-primary">geometries</span>
              <span className="text-[#666666]"> & </span>
              <span className="text-primary">applications</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {geometries.map((item, index) => (
              <motion.div
                key={index}
                className="group relative h-80 overflow-hidden rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Why is the KFL 90.1 your solution?</h2>
            <p className="text-xl text-blue-200">Advanced technology for superior performance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Unique Qualities Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#666666]">The unique qualities of our </span>
              <span className="text-primary">fiber lids</span>
              <span className="text-[#666666]"> and </span>
              <span className="text-primary">portion cups</span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <img 
              src="https://placehold.co/800x400/e2e8f0/1e293b?text=Lid+Diagram"
              alt="Lid Features"
              className="w-full mb-12"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uniqueQualities.map((quality, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white/20 rounded-full p-4 w-12 h-12 flex items-center justify-center mb-6">
                    <span className="text-xl font-bold">{quality.number}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{quality.title}</h3>
                  <p className="text-blue-100">{quality.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureformerKFL;