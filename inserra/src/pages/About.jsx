import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lightbulb, Users, Network, Cpu, HeartHandshake, ClipboardCheck,
         HeadphonesIcon, AwardIcon, ShieldCheckIcon, ClockIcon, LightbulbIcon, TrendingUpIcon } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('vision');
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const keyStrengths = [
    { icon: <HeadphonesIcon className="w-10 h-10" />, title: "Prompt Aftersales Support", description: "Providing quick and efficient support" },
    { icon: <Users className="w-10 h-10" />, title: "Strong Relationships", description: "Having strong relationships with our customers and partners" },
    { icon: <AwardIcon className="w-10 h-10" />, title: "Renowned Reputation", description: "Known for our excellence and quality in the industries we serve" },
    { icon: <ShieldCheckIcon className="w-10 h-10" />, title: "Trustworthiness", description: "Building trust through consistent reliability and integrity" },
    { icon: <ClockIcon className="w-10 h-10" />, title: "Reliability", description: "Consistently delivering on our promises and commitments" },
    { icon: <LightbulbIcon className="w-10 h-10" />, title: "Industry Knowledge", description: "Deep understanding of market and industry dynamics" },
    { icon: <TrendingUpIcon className="w-10 h-10" />, title: "Technology Developments", description: "Well-versed in market and technology advancements" },
  ];

  const coreValues = [
    { icon: <Shield className="w-12 h-12" />, title: "Integrity", description: "We uphold the highest ethical standards, fostering trust and transparency in all our interactions." },
    { icon: <Lightbulb className="w-12 h-12" />, title: "Innovation", description: "We embrace a culture of continuous improvement, encouraging creativity and innovation in all aspects of our business and always looking for more sustainable solutions." },
    { icon: <Users className="w-12 h-12" />, title: "Customer-Oriented", description: "Our customers are at the heart of everything we do. We are committed to understand their needs, exceed expectations, and build lasting relationships." },
    { icon: <Network className="w-12 h-12" />, title: "Collaboration", description: "We believe in the power of collaboration and we thrive on teamwork. By working as a team, we encourage diverse perspectives to achieve collective success and solve complex challenges." },
    { icon: <Cpu className="w-12 h-12" />, title: "Adaptability", description: "In a dynamic business environment, we embrace change and demonstrate flexibility. We are agile in responding to new opportunities and challenges." },
    { icon: <HeartHandshake className="w-12 h-12" />, title: "Social Responsibility", description: "We are committed to making a positive impact on society and the environment. Through responsible business practices, we contribute to the well-being of communities and the planet." },
    { icon: <ClipboardCheck className="w-12 h-12" />, title: "Accountability", description: "We take ownership of our actions and decisions. Accountability is the foundation of our reliability and the key to building a culture of trust." },
  ];

  const tabContent = {
    vision: "Our vision is to continuously offer innovative solutions that drive a positive change in the industry to enhance the well-being of communities and create a more sustainable and eco-friendly world.",
    
    mission: "At INSERA, our mission is to be the leading partner in providing know-how and supplying cutting-edge technology, setting the standard for unparalleled quality in every aspect along with our detail-oriented services. Our commitment extends beyond meeting client expectations; we aspire to consistently exceed them. Through partnering with worldwide technology leaders, we strive to empower industries with reliable, high-performance production lines and machines that guarantee success and develop progress. At the heart of our mission is the solid pursuit of reliability, setting our position as the trusted partner for those who demand nothing but state of the art technology.",
    
    strategy: "Our strategy is to leverage our partnerships with global technology leaders to deliver  innovative, tailored solutions across the industries we serve."
  };

  return (
    <div className="min-h-screen text-white -mt-20">
      {/* Hero Section - Dark gradient background */}
      <div className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/shutterstock_2174669625.jpg')` }}
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary-dark/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About INSERA</h1>
            <em className="text-2xl md:text-3xl">"Partners for Growth"</em>
          </motion.div>
        </div>
      </div>

      {/* Company Overview - Light background */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-primary">About Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2017, INSERA has quickly established itself as a leading force 
              in the industrial sector, representing global manufacturers of advanced
               production lines and machinery to serve the packaging, recycling, and food
                and pharmaceutical industries. We are committed to innovation, sustainability,
                 and supporting industries that shape the future. From project development to
                  implementation and ongoing after-sales support, we partner closely with clients 
                  to provide tailored solutions that drive their success. Built on principles
                   of integrity, reliability, and persistent strive for perfection, INSERA is
                    dedicated to advancing manufacturing standards and fostering enduring
                     relationships that empower progress and innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Strengths Section - Dark gradient background */}
      <div className="bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div className="mb-0">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Key Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                {keyStrengths.slice(0, 6).map((strength, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <div className="text-primary">{strength.icon}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-primary">{strength.title}</h3>
                    </div>
                    <p className="text-gray-600">{strength.description}</p>
                  </motion.div>
                ))}
              </div>
              {/* Last item centered */}
              <div className="col-span-1 md:col-span-3 flex justify-center">
                <motion.div
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full md:w-1/3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <div className="text-primary">{keyStrengths[6].icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{keyStrengths[6].title}</h3>
                  </div>
                  <p className="text-gray-600">{keyStrengths[6].description}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vision/Mission/Strategy Tabs - Light background */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Guiding Principles</h2>
            <div className="flex justify-center mb-12 space-x-4 flex-wrap">
              {['vision', 'mission', 'strategy'].map((tab) => (
                <button
                  key={tab}
                  className={`px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 mb-4 ${
                    activeTab === tab
                      ? 'bg-primary text-white shadow-lg transform scale-105'
                      : 'bg-white text-primary hover:bg-blue-100 hover:scale-105'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={tabVariants}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-lg p-12"
              >
                <h3 className="text-3xl font-bold mb-8 text-white">
                  Our {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h3>
                <p className="text-xl text-blue-100">{tabContent[activeTab]}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Background Image Section - Full width image */}
      <motion.div 
        className="relative h-[50vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url('/images/shutterstock_2174669625.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary-dark/50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Leading Industrial Innovation</h2>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Delivering cutting-edge solutions and world-class machinery to empower industries across the MENA region
            </p>
          </div>
        </div>
      </motion.div>

      {/* Core Values - Dark gradient background */}
      <div className="bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div className="mb-0">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                {coreValues.slice(0, 6).map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50/95 rounded-lg p-6 hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="text-primary mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
              {/* Last item centered */}
              <div className="col-span-1 md:col-span-3 flex justify-center">
                <motion.div
                  className="bg-gray-50/95 rounded-lg p-6 hover:bg-white transition-all duration-300 transform hover:-translate-y-1 w-full md:w-1/3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <div className="text-primary mb-4">{coreValues[6].icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{coreValues[6].title}</h3>
                  <p className="text-gray-600">{coreValues[6].description}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Final CTA Section - Light background */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Work Together?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help your business grow with our innovative solutions.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition duration-300"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
