import React from 'react';
import { motion } from 'framer-motion';
import { Package, Settings, Wrench, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/plastic.png';

const KiefelPackaging = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const machines = [
    {
      title: "SPEEDFORMER KMD",
      description: "For high quality inner doors",
      image: "/path/to/kmd-image.jpg",
      link: "/industries/packaging/kiefel/kmd"
    },
    {
      title: "Stacking & Automation",
      description: "Automated stacking solutions",
      image: "/path/to/stacking-image.jpg",
      link: "/industries/packaging/kiefel/stacking"
    },
    {
      title: "Upstream & Downstream",
      description: "Complete line solutions",
      image: "/path/to/upstream-image.jpg",
      link: "/industries/packaging/kiefel/upstream"
    },
    {
      title: "KMD Tooling",
      description: "Steel rule cutting tools",
      image: "/path/to/tooling-image.jpg",
      link: "/industries/packaging/kiefel/tooling"
    },
    {
      title: "SPEEDFORMER KTR",
      description: "For high quality inner containers",
      image: "/path/to/ktr-image.jpg",
      link: "/industries/packaging/kiefel/ktr"
    },
    {
      title: "KTR Stacking & Automation",
      description: "Automated handling systems",
      image: "/path/to/stacking2-image.jpg",
      link: "/industries/packaging/kiefel/stacking-ktr"
    },
    {
      title: "Tilting Tools",
      description: "Advanced tilting tools",
      image: "/path/to/tilting-tools-image.jpg",
      link: "/industries/packaging/kiefel/tilting-tools"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Identifier */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <span>/</span>
            <Link to="/industries/packaging" className="hover:text-primary">Packaging</Link>
            <span>/</span>
            <span className="text-primary">Kiefel</span>
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
              <span className="text-blue-300 font-semibold mb-4 block tracking-wider">KIEFEL PACKAGING SOLUTIONS</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Advanced Thermoforming
                <span className="text-blue-300 block mt-2">
                  Technology
                </span>
              </h1>
              <div className="w-20 h-1 bg-blue-300/30 mb-6"></div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Industry-leading solutions for packaging manufacturing, offering superior quality, 
                efficiency, and sustainability in thermoforming processes.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <h3 className="text-blue-300 font-semibold mb-2">Experience</h3>
                  <p className="text-sm text-blue-100">30+ years of innovation in thermoforming technology</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <h3 className="text-blue-300 font-semibold mb-2">Global Presence</h3>
                  <p className="text-sm text-blue-100">Worldwide service and support network</p>
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
                <div className="w-full h-full bg-gray-800 rounded-lg">
                  <img
                    src="/path/to/machine-image.jpg" // Add actual image path
                    alt="Kiefel Packaging Machine"
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x450?text=Kiefel+Machine';
                    }}
                  />
                </div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">300+</div>
                    <div className="text-sm text-gray-600">Installations</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-gray-600">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Setting New Standards in Packaging Technology
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                KIEFEL's packaging solutions represent the pinnacle of thermoforming technology, 
                combining German engineering excellence with innovative design to deliver 
                unparalleled performance and reliability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Sustainability",
                    description: "Eco-friendly solutions reducing material waste"
                  },
                  {
                    title: "Innovation",
                    description: "Cutting-edge technology for optimal performance"
                  },
                  {
                    title: "Reliability",
                    description: "Robust systems ensuring consistent quality"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Machines Grid */}
      <div className="container mx-auto px-4 py-16">
        {/* Steel Rule Cutting Machines Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Technology for steel rule cutting machines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {machines.slice(0, 4).map((machine, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={machine.link} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={machine.image}
                        alt={machine.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x225?text=Machine+Image';
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {machine.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {machine.description}
                      </p>
                      <div className="flex items-center text-primary group-hover:text-primary-dark transition-colors">
                        Find out more
                        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tilting Machines Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Technology for tilting machines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {machines.slice(4).map((machine, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={machine.link} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={machine.image}
                        alt={machine.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x225?text=Machine+Image';
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {machine.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {machine.description}
                      </p>
                      <div className="flex items-center text-primary group-hover:text-primary-dark transition-colors">
                        Find out more
                        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KiefelPackaging; 