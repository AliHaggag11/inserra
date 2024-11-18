import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, CheckCircle, ArrowRight } from 'lucide-react';

const KiefelAppliance = () => {
    const [showModal, setShowModal] = useState(false);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [activeTab, setActiveTab] = useState('expertise');

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    const tabContentVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const toggleModal = () => {
        setShowModal(!showModal);
        setIframeLoaded(false);
    };

    const handleIframeLoad = () => {
        setIframeLoaded(true);
    };

    const tabs = [
        { id: 'expertise', label: 'Our Expertise' },
        { id: 'technology', label: 'Our Technology' },
        { id: 'benefits', label: 'Benefits' },
        { id: 'machines', label: 'Our Machines' },
    ];

    const tabContent = {
        expertise: [
            { title: 'Interior Liners', description: 'Precision-engineered solutions for refrigerator interiors' },
            { title: 'Door Liners', description: 'Customizable designs for optimal refrigerator door functionality' },
            { title: 'Complex Shapes', description: 'Advanced molding techniques for intricate component designs' },
        ],
        technology: [
            { title: 'Air Pressure Forming', description: 'State-of-the-art process for high-quality production' },
            { title: 'Plastic Roll Processing', description: 'Efficient method for creating inner door liners' },
            { title: 'Plastic Plate Processing', description: 'Specialized technique for inner container manufacturing' },
        ],
        benefits: [
            { title: 'Enhanced Efficiency', description: 'Streamlined production processes for faster output' },
            { title: 'Superior Quality', description: 'Precision engineering ensures top-tier component quality' },
            { title: 'Customization', description: 'Flexible solutions tailored to specific client needs' },
        ],
        machines: [
            {
                title: 'SHARPFORMER KID SPEED',
                description: 'High-performance production of door panels made of HIPS or ABS materials.',
                features: [
                    'Up to 20% less material with better quality through high-pressure thermoforming',
                    'Higher output due to multi-cavity forming tool with up to 6 cavities per tool',
                    'Forming & cutting in one cycle',
                    'Production speed up to 300 cycles/hour',
                ],
            },
            {
                title: 'SHARPFORMER KID PREMIUM & SMART',
                description: 'High quality and flexible thermoforming machines for inner linings of refrigerators.',
                features: [
                    'Suitable for small and medium-sized European refrigerators (PREMIUM)',
                    'Perfect for French Door appliances and American side-by-side refrigerators (SMART)',
                    'Higher production speed of refrigerator inner liners made of HIPS or ABS material',
                    'Full process control for best product quality',
                ],
            },
        ],
    };

    return (
        <div className="bg-gradient-to-br from-primary to-primary-dark min-h-screen text-white -mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 sm:pt-48 sm:pb-32">
                <motion.h1
                    className="text-5xl sm:text-6xl font-bold mb-8 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.5 }}
                >
                    Kiefel Appliance Solutions
                </motion.h1>

                <motion.h2
                    className="text-2xl sm:text-3xl font-semibold mb-20 text-center text-blue-200"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Revolutionizing Refrigerator Component Production
                </motion.h2>

                <motion.div
                    className="mb-20"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="flex justify-center mb-12 space-x-4 flex-wrap">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 mb-4 ${activeTab === tab.id
                                        ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                                        : 'bg-white text-primary hover:bg-blue-100 hover:scale-105'
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={tabContentVariants}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-lg shadow-xl p-8 text-gray-800"
                        >
                            <h3 className="text-3xl font-bold mb-8 text-primary">{tabs.find(tab => tab.id === activeTab).label}</h3>
                            {activeTab !== 'machines' ? (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                    {tabContent[activeTab].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <CheckCircle className="text-green-500 mb-4" size={40} />
                                            <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                                            <p className="text-gray-600">{item.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {tabContent.machines.map((machine, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <h4 className="text-2xl font-semibold mb-3 text-blue-600">{machine.title}</h4>
                                            <p className="text-gray-600 mb-4">{machine.description}</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                {machine.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="text-gray-700">{feature}</li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    className="flex justify-center mb-20"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <button
                        onClick={toggleModal}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 px-10 rounded-full inline-flex items-center transition duration-300 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Explore Kiefel Appliance Solutions
                        <ArrowRight className="ml-3 h-6 w-6" />
                    </button>
                </motion.div>

                {/* <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-2xl text-blue-200 mb-6">Ready to revolutionize your appliance production?</p>
          <a href="#contact" className="text-white text-xl underline hover:text-blue-200 transition duration-300">Contact us today</a>
        </motion.div> */}

                <AnimatePresence>
                    {showModal && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={modalVariants}
                        >
                            <div className="bg-white rounded-lg shadow-2xl w-11/12 h-5/6 md:w-4/5 md:h-5/6 relative flex flex-col">
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
