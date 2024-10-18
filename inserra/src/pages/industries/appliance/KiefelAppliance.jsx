import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const KiefelAppliance = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const iframeRef = useRef(null);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const toggleIframe = () => {
    if (iframeError) {
      // If there was an error loading the iframe, open in a new tab
      window.open("https://www.kiefel.com/en/Appliance", "_blank");
    } else {
      setShowIframe(!showIframe);
    }
  };

  const handleIframeError = () => {
    setIframeError(true);
    setShowIframe(false);
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
            onClick={toggleIframe}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
          >
            {iframeError ? 'Open' : (showIframe ? 'Hide' : 'Show')} Kiefel Appliance Website
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </motion.div>

        {showIframe && !iframeError && (
          <motion.div
            className="w-full h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '80vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              ref={iframeRef}
              src="https://www.kiefel.com/en/Appliance"
              title="Kiefel Appliance Website"
              className="w-full h-full border-0"
              allowFullScreen
              onError={handleIframeError}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default KiefelAppliance;
