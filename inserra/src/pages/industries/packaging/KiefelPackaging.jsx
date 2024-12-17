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

  const machines = {
    steelRule: [
      {
        title: "SPEEDFORMER KMD",
        description: "Steel rule cutting machines",
        image: "/images/kiefel/kiefeloverview.webp",
        link: "/industries/packaging/kiefel/kmd"
      },
      {
        title: "Stacking & Automation",
        description: "Automated stacking solutions",
        image: "/images/kiefel/stacking.webp",
        link: "/industries/packaging/kiefel/stacking"
      },
      {
        title: "Upstream & Downstream",
        description: "Complete line solutions",
        image: "/images/kiefel/upstream.webp",
        link: "/industries/packaging/kiefel/upstream"
      },
      {
        title: "KMD Tooling",
        description: "Steel rule cutting tools",
        image: "/images/kiefel/kmdtooling.webp",
        link: "/industries/packaging/kiefel/tooling"
      }
    ],
    tilting: [
      {
        title: "SPEEDFORMER KTR",
        description: "Cup forming machines",
        image: "/images/kiefel/sfktr.webp",
        link: "/industries/packaging/kiefel/ktr"
      },
      {
        title: "KTR Stacking & Automation",
        description: "Automated handling systems",
        image: "/images/kiefel/ktrstack.webp",
        link: "/industries/packaging/kiefel/stacking-ktr"
      },
      {
        title: "Upstream & Downstream",
        description: "Complete line solutions",
        image: "/images/kiefel/upstream.webp",
        link: "/industries/packaging/kiefel/upstream"
      },
      {
        title: "Tilting Tools",
        description: "Advanced tilting tools",
        image: "/images/kiefel/Tilting tool.webp",
        link: "/industries/packaging/kiefel/tilting-tools"
      }
    ]
  };

  // Common card component style for both sections
  const CardComponent = ({ machine }) => (
    <Link to={machine.link} className="block h-full">
      <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
        <div className="aspect-w-16 aspect-h-12">
          <img
            src={machine.image}
            alt={machine.title}
            className="w-full h-full object-contain p-4"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {machine.title}
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">
            {machine.description}
          </p>
          <div className="flex items-center text-primary hover:text-primary-dark transition-colors mt-auto">
            Find out more
            <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );

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
              <motion.div 
                className="inline-block bg-white p-4 rounded-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <img 
                  src="/images/kiefel/kiefel-technologieslogo.svg"
                  alt="Kiefel Logo" 
                  className="h-16 w-auto"
                />
              </motion.div>
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
                    src="/images/kiefel/kiefeloverview.webp"
                    alt="Kiefel Packaging Machine Overview"
                    className="w-full h-full object-cover rounded-lg"
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
                KIEFEL's packaging solutions represent the benchmark of thermoforming technology, 
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
            {machines.steelRule.map((machine, index) => (
              <motion.div
                key={index}
                className="group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CardComponent machine={machine} />
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
            {machines.tilting.map((machine, index) => (
              <motion.div
                key={index}
                className="group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CardComponent machine={machine} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KiefelPackaging; 