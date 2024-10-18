import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const KiefelAppliance = () => {
  const [showModal, setShowModal] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    setIframeLoaded(false);
  };

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark min-h-screen text-white -mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 sm:pt-48 sm:pb-32">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          Machines for the production of refrigerator components
        </motion.h1>
        
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-blue-200"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Interior or door liners of refrigerators or freezers
        </motion.h2>
        
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 text-gray-800 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="mb-4">
            One of the main focuses of our forming technology is <strong>machines for the production of refrigerator components.</strong>
          </p>
          <p className="mb-4">
            Whether for refrigerators or freezers, whether <strong>inner or door liners</strong>, whether single or combined, even complex shapes and designs can be processed with the most intelligent solutions thanks to the powerful thermoforming machines.
          </p>
          <p className="mb-4">
            The production of inner door liners is carried out from plastic rolls, plastic plates are used for the production of inner containers.
          </p>
          <p className="mb-4">
            For high-quality production of inner door panels and inner containers, the so-called <strong>air pressure forming process</strong> is used as standard.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button 
            onClick={toggleModal}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
          >
            Open Kiefel Appliance Website
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </motion.div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={modalVariants}
            >
              <div className="bg-white rounded-lg shadow-lg w-11/12 h-5/6 md:w-4/5 md:h-5/6 relative flex flex-col">
                <button
                  onClick={toggleModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                >
                  <X size={24} />
                </button>
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                )}
                <iframe
                  src="https://www.kiefel.com/en/Appliance"
                  title="Kiefel Appliance Website"
                  className="w-full h-full rounded-lg"
                  onLoad={handleIframeLoad}
                  style={{ display: iframeLoaded ? 'block' : 'none' }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default KiefelAppliance;
