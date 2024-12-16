import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const KiefelFiber = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const machines = [
    {
      title: "NATUREPREP KFP",
      description: "Preparation of natural fibers to produce high-quality packaging",
      image: "/images/kiefel/kfpnature.webp",
      link: "/industries/packaging/kiefel-fiber/natureprep"
    },
    {
      title: "NATUREFORMER KFT",
      description: "Standard solution for a wide variety of fiber packaging",
      image: "/images/kiefel/fiberkft.webp",
      link: "/industries/packaging/kiefel-fiber/kft"
    },
    {
      title: "NATUREFORMER KFL",
      description: "Fiber thermoforming system for high-end lids & portion cups",
      image: "/images/kiefel/kflhero.webp",
      link: "/industries/packaging/kiefel-fiber/kfl"
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
            <Link to="/industries/packaging/kiefel" className="hover:text-primary">Kiefel</Link>
            <span>/</span>
            <span className="text-primary">Fiber</span>
          </div>
        </div>
      </div>

      {/* Machines Grid Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Fiber Processing Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {machines.map((machine, index) => (
                <motion.div
                  key={index}
                  className="group h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={machine.link} className="block h-full">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                      <div className="aspect-w-16 aspect-h-12">
                        <div className="w-full h-full bg-white/10 backdrop-blur-lg p-1">
                          <div className="w-full h-full bg-gray-800/90 rounded-lg">
                            <img
                              src={machine.image}
                              alt={machine.title}
                              className="w-full h-full object-contain p-4 rounded-lg opacity-90"
                            />
                          </div>
                        </div>
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KiefelFiber;