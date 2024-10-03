import React from 'react';
import { motion } from 'framer-motion';

const PackagingRecycling = () => {
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
          Packaging & Recycling
        </motion.h1>
        
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 text-gray-800"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Packaging & Recycling Solutions</h2>
          <p className="mb-4">
            At Inserra, we are committed to providing innovative packaging solutions while promoting sustainable recycling practices. Our state-of-the-art technologies and processes ensure that we deliver high-quality packaging products while minimizing environmental impact.
          </p>
          <p className="mb-4">
            Our packaging solutions cater to various industries, offering customized options that meet specific requirements while adhering to eco-friendly standards. We also focus on developing advanced recycling technologies to support a circular economy and reduce waste.
          </p>
          <p>
            From biodegradable materials to efficient recycling systems, we are at the forefront of the packaging and recycling industry, driving positive change and sustainability.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PackagingRecycling;