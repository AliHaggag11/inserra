import React from 'react';
import { motion } from 'framer-motion';

const FoodPharmaceutical = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark min-h-screen text-white -mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          Food & Pharmaceutical Solutions
        </motion.h1>
        
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 text-gray-800"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Food & Pharmaceutical Industry Services</h2>
          <p className="mb-4">
            Inserra is a leading provider of specialized solutions for the food and pharmaceutical industries. We understand the critical importance of safety, quality, and compliance in these sectors and offer a comprehensive range of products and services to meet these exacting standards.
          </p>
          <p className="mb-4">
            Our offerings for the food and pharmaceutical industries include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>FDA-compliant packaging materials</li>
            <li>Sterile manufacturing environments</li>
            <li>Advanced contamination control solutions</li>
            <li>Temperature-controlled packaging for sensitive products</li>
            <li>Traceability and quality assurance systems</li>
          </ul>
          <p>
            We are committed to innovation and continuous improvement, ensuring that our solutions meet the evolving needs of the food and pharmaceutical industries while adhering to the highest standards of safety and quality.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FoodPharmaceutical;