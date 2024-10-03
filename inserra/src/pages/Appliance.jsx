import React from 'react';
import { motion } from 'framer-motion';

const Appliance = () => {
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
          Appliance Industry Solutions
        </motion.h1>
        
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 text-gray-800"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Appliance Industry Expertise</h2>
          <p className="mb-4">
            Inserra provides cutting-edge solutions for the appliance industry, focusing on innovative materials, efficient manufacturing processes, and sustainable practices. Our expertise spans across various appliance categories, from kitchen appliances to smart home devices.
          </p>
          <p className="mb-4">
            We offer a range of services and products tailored to meet the unique challenges of appliance manufacturing, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>High-performance plastics for durable appliance components</li>
            <li>Energy-efficient materials for improved appliance sustainability</li>
            <li>Advanced molding and fabrication techniques</li>
            <li>Quality control and testing solutions</li>
          </ul>
          <p>
            Our commitment to innovation and quality ensures that we deliver solutions that enhance the performance, durability, and eco-friendliness of modern appliances.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Appliance;