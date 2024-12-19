import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Zap, Settings, Gauge, ChevronRight } from 'lucide-react';

const RecostarPET = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const specifications = [
    {
      title: "Product Line",
      value: "Three Versions",
      description: "All systems with FIFO pre-drying and single-screw extrusion",
      icon: <Settings className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Process Type",
      value: "FIFO Pre-drying",
      description: "Single-stage drying with hot, desiccant air",
      icon: <Beaker className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Energy Efficiency",
      value: "High Recovery",
      description: "Available for pre-heater and final pellets",
      icon: <Zap className="w-8 h-8 text-blue-300" />
    },
    {
      title: "Layout Options",
      value: "L, U, or Line",
      description: "Flexible setup with minimal footprint",
      icon: <Gauge className="w-8 h-8 text-blue-300" />
    }
  ];

  const features = [
    {
      title: "Food-Contact Quality",
      description: "Outstanding decontamination for food-grade rPET",
      icon: <Beaker className="w-12 h-12 text-primary" />,
      details: [
        "Approved for food-contact PET regranulate",
        "Melt-filtrated, uniform granulate",
        "Highest purity with lowest VOCs"
      ]
    },
    {
      title: "FIFO Process",
      description: "Optimized material preparation system",
      icon: <Settings className="w-12 h-12 text-primary" />,
      details: [
        "First-In-First-Out principle",
        "Single-screw extrusion",
        "Short melt phase"
      ]
    },
    {
      title: "Energy Efficiency",
      description: "Multiple energy-saving features",
      icon: <Zap className="w-12 h-12 text-primary" />,
      details: [
        "Energy recovery system",
        "Alternative energy sources available",
        "Cost-friendly heating options"
      ]
    },
    {
      title: "Compact Design",
      description: "Flexible layout configurations",
      icon: <Gauge className="w-12 h-12 text-primary" />,
      details: [
        "L, U, or line layout options",
        "Minimal footprint design",
        "Easy maintenance access"
      ]
    }
  ];

  const advantages = [
    "Outstanding food-contact decontamination",
    "Adjustable IV increase",
    "FIFO procedure ensures uniform treatment",
    "Low energy consumption",
    "Small machine footprint",
    "Convenient operation and maintenance"
  ];

  const fgFeatures = [
    "For production and post-consumer scrap, preforms, bottle and sheet flakes",
    "Integrated pre-drying",
    "Dust-free processing",
    "Energy-efficient",
    "High ROI",
    "Full automation"
  ];

  const petArtComponents = [
    { number: "1", title: "Screw conveyor", description: "Material transport system" },
    { number: "2", title: "Metal separator", description: "Contaminant removal" },
    { number: "3", title: "Combined drying unit", description: "Material preparation" },
    { number: "4", title: "Extruder", description: "Primary processing unit" },
    { number: "5", title: "Melt pump", description: "Flow control system" },
    { number: "6", title: "Melt filter with backflush", description: "Filtration system" },
    { number: "7", title: "Underwater pelletizer with inline crystallization", description: "Pellet formation" },
    { number: "8", title: "Post-crystallization unit", description: "Crystal structure development" },
    { number: "9", title: "Separate vacuum feeding system", description: "Material handling" },
    { number: "10", title: "SSP preheater", description: "Temperature preparation" },
    { number: "11", title: "Heat exchanger for preheater", description: "Thermal management" },
    { number: "12", title: "SSP reactor", description: "Solid state processing" },
    { number: "13", title: "Discharge unit", description: "Material output" },
    { number: "14", title: "Heat exchanger for pellets", description: "Temperature control" },
    { number: "15", title: "Pellet water cooler", description: "Cooling system" },
    { number: "16", title: "Storage silo", description: "Product storage" }
  ];

  const recoStarFGComponents = [
    { number: "1", title: "Feeding screw", description: "Material input" },
    { number: "2", title: "Hot air drying unit", description: "Moisture removal" },
    { number: "3a/b", title: "Pre-drying unit/pre-drying unit under vacuum", description: "Advanced drying" },
    { number: "4", title: "Extruder", description: "Material processing" },
    { number: "5", title: "High-vacuum degassing extruder", description: "Contaminant removal" },
    { number: "6", title: "Melt filter without backflushing", description: "Basic filtration" },
    { number: "7", title: "Melt filter with backflushing", description: "Advanced filtration" },
    { number: "8", title: "Strand pelletiser", description: "Pellet formation" },
    { number: "9", title: "Automatic strand pelletiser", description: "Automated cutting" },
    { number: "10", title: "Underwater pelletiser", description: "Submerged processing" },
    { number: "11", title: "Underwater pelletiser with inline crystallisation", description: "Integrated crystallization" },
    { number: "12", title: "Storage silo", description: "Final storage" }
  ];

  const recoStarFGPlusComponents = [
    { number: "1", title: "Feeding screw", description: "Material input" },
    { number: "2", title: "Hot air drying unit", description: "Moisture removal" },
    { number: "3a/b", title: "Pre-drying unit/pre-drying unit under vacuum", description: "Advanced drying" },
    { number: "4", title: "Extruder", description: "Material processing" },
    { number: "5", title: "High-vacuum degassing extruder", description: "Contaminant removal" },
    { number: "6", title: "Melt filter without backflushing", description: "Basic filtration" },
    { number: "7", title: "Melt filter with backflushing", description: "Advanced filtration" },
    { number: "8", title: "Strand pelletiser", description: "Pellet formation" },
    { number: "9", title: "Automatic strand pelletiser", description: "Automated cutting" },
    { number: "10", title: "Underwater pelletiser", description: "Submerged processing" },
    { number: "11", title: "Underwater pelletiser with inline crystallisation", description: "Integrated crystallization" },
    { number: "12", title: "Storage silo", description: "Final storage" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/industries/recycling" className="hover:text-primary">Recycling</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/industries/recycling/starlinger-recycling" className="hover:text-primary">Starlinger Recycling</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary">recoSTAR PET</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="text-white z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  recoSTAR PET
                  <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
                    High-end bottle-to-bottle recycling
                  </span>
                </h1>
                <div className="w-20 h-1 bg-blue-300 mb-6"></div>
                <p className="text-xl text-blue-100 max-w-2xl">
                  State-of-the-art recycling technology for post-consumer bottle flakes
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Gauge className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Up to 2,000 kg/h</span>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Beaker className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Food-grade Quality</span>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Settings className="w-6 h-6 text-blue-300" />
                    <span className="text-white">Smart Operation</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="relative hidden lg:block z-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg p-1">
                  <div className="w-full h-full bg-gray-800/90 rounded-lg">
                    <img
                      src="/images/starlinger/recopet hero.jpg"
                      alt="recoSTAR PET"
                      className="w-full h-full object-cover rounded-lg opacity-90"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section - Moved and Restyled */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">
              Recycling line
              <div className="text-primary text-5xl mt-2">recoSTAR PET</div>
            </h2>
            
            <p className="text-lg leading-relaxed mb-12">
              <span>This product line is available in </span>
              <span className="text-primary">three different versions</span>
              <span>. All systems are equipped with </span>
              <span className="text-primary">FIFO pre-drying and single-screw extrusion</span>
              <span> and differ in terms of </span>
              <span className="text-primary">IV</span>
              <span> increase and </span>
              <span className="text-primary">VOC</span>
              <span> reduction. </span>
              <span className="text-primary">All versions are approved for the production of food-contact PET regranulate.</span>
            </p>

            <div className="mt-16">
              <h3 className="text-3xl text-primary font-bold mb-8">recoSTAR PET art</h3>
              <div className="space-y-8">
                <p className="text-lg leading-relaxed">
                  <span className="text-primary">High-end bottle-to-bottle recycling line</span>
                  <span> for the recycling of </span>
                  <span className="text-primary">post-consumer bottle flakes</span>
                  <span> after the washing process. The end product is </span>
                  <span className="text-primary">melt-filtrated</span>
                  <span>, uniform granulate of highest purity with lowest VOCs.</span>
                </p>

                <p className="text-lg leading-relaxed">
                  <span className="text-primary">FIFO pre-drying</span>
                  <span> of the PET bottle flakes ensures optimal preparation for subsequent extrusion. Single-stage drying with hot, dessicant air according to the </span>
                  <span className="text-primary">First-In First-Out principle</span>
                  <span>. </span>
                  <span className="text-primary">Single-screw extrusion</span>
                  <span> with short </span>
                  <span className="text-primary">melt phase</span>
                  <span>. The melt </span>
                  <span className="text-primary">pump</span>
                  <span> increases the overall output, stabilizes the melt pressure and ensures a </span>
                  <span className="text-primary">stable process</span>
                  <span> and consistent </span>
                  <span className="text-primary">melt quality</span>
                  <span>.</span>
                </p>

                <p className="text-lg leading-relaxed">
                  <span className="text-primary">Highest energy efficiency</span>
                  <span> is ensured by various design features. </span>
                  <span className="text-primary">Energy recovery</span>
                  <span> is available for the pre-heater of the SSP and the final pellets. Alternative energy sources such as natural gas or steam can be used as a cost-friendly alternative for heating.</span>
                </p>

                <p className="text-lg leading-relaxed">
                  <span className="text-primary">Compact design</span>
                  <span>: The set-up of the recycling </span>
                  <span className="text-primary">line</span>
                  <span> is flexible, the most popular options are L, U, or </span>
                  <span className="text-primary">line</span>
                  <span> layout. Each layout option utilizes </span>
                  <span className="text-primary">minimal footprint</span>
                  <span> while maintaining access to relevant operation and maintenance points.</span>
                </p>
              </div>

              {/* Key Features List */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "FOR POST-CONSUMER PET BOTTLE FLAKES",
                  "FIFO PRE-DRYING, SINGLE-SCREW EXTRUSION",
                  "FIFO SOLID-STATE POLYCONDENSATION (SSP)",
                  "HIGH-END BOTTLE-TO-BOTTLE RECYCLING",
                  "AUTOMATIC FOOD-GRADE QUALITY MONITORING",
                  "APPROVED BY MULTINATIONAL BEVERAGE BRAND OWNERS"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm font-semibold">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image and Advantages Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="rounded-xl overflow-hidden shadow-xl bg-white p-2">
                <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img
                    src="/images/starlinger/recopet hero.jpg"
                    alt="recoSTAR PET"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Advantages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                Advantages 
                <span className="text-primary">recoSTAR PET art</span>
              </h2>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    bold: "Outstanding",
                    text: "food-contact decontamination",
                    icon: <Beaker className="w-5 h-5 text-primary" />
                  },
                  {
                    bold: "Adjustable",
                    text: "IV increase",
                    icon: <ArrowRight className="w-5 h-5 text-primary" />
                  },
                  {
                    bold: "FIFO",
                    text: "procedure ensures uniform treatment",
                    icon: <Settings className="w-5 h-5 text-primary" />
                  },
                  {
                    bold: "Low",
                    text: "energy consumption",
                    icon: <Zap className="w-5 h-5 text-primary" />
                  },
                  {
                    bold: "Small",
                    text: "machine footprint",
                    icon: <Gauge className="w-5 h-5 text-primary" />
                  },
                  {
                    bold: "Convenient",
                    text: "operation and maintenance",
                    icon: <Settings className="w-5 h-5 text-primary" />
                  }
                ].map((advantage, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                      {advantage.icon}
                    </div>
                    <div>
                      <span className="font-bold text-primary">{advantage.bold}</span>
                      <span className="text-gray-600"> {advantage.text}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: num * 0.1 }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-2">
                    <div className="relative w-full pb-[56.25%]"> {/* 16:9 aspect ratio */}
                      <div className="absolute inset-0">
                        <img
                          src={`https://via.placeholder.com/800x450/2563eb/FFFFFF?text=Image+${num}`}
                          alt={`recoSTAR PET Process ${num}`}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* recoSTAR PET FG/FG+ Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-primary">
                recoSTAR PET FG/FG<sup>+</sup>
              </h2>

              <div className="space-y-6 text-lg">
                <p className="leading-relaxed">
                  <span className="text-primary">State-of-the-art recycling technology</span>
                  <span> for the </span>
                  <span className="text-primary">in-house recycling of PET flakes</span>
                  <span> from bottles, preforms, strapping bands and sheets, as well as for the </span>
                  <span className="text-primary">recycling of post-consumer bottle flakes</span>
                  <span> after the washing process. The </span>
                  <span className="text-primary">end product is melt-filtrated, uniform granulate</span>
                  <span> that can be used for a wide range of food-contact applications.</span>
                </p>

                <p className="leading-relaxed">
                  <span>recoSTAR FG and FG+ recycling lines are cost-effective </span>
                  <span className="text-primary">recycling systems for producing food-grade rPET pellets</span>
                  <span> with </span>
                  <span className="text-primary">compact footprint, minimal energy consumption</span>
                  <span> and moderate </span>
                  <span className="text-primary">IV increase</span>
                  <span>.</span>
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  "FOR PRODUCTION AND POST-CONSUMER SCRAP, PREFORMS, BOTTLE AND SHEET FLAKES",
                  "INTEGRATED PRE-DRYING",
                  "DUST-FREE PROCESSING",
                  "ENERGY-EFFICIENT",
                  "HIGH ROI",
                  "FULL AUTOMATION"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Advantages FG/FG+ */}
              <div className="mt-16">
                <h3 className="text-3xl font-bold mb-8">
                  Advantages <span className="text-primary">recoSTAR PET FG/FG<sup>+</sup></span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      text: "Food-contact decontamination",
                      icon: <Beaker className="w-5 h-5 text-primary" />
                    },
                    {
                      text: "FIFO ensures uniform treatment",
                      icon: <ArrowRight className="w-5 h-5 text-primary" />
                    },
                    {
                      text: "Direct processing Flake to Product",
                      icon: <Settings className="w-5 h-5 text-primary" />
                    },
                    {
                      text: "Improved production efficiency",
                      icon: <Gauge className="w-5 h-5 text-primary" />
                    },
                    {
                      text: "User-friendly touchscreen and high automation",
                      icon: <Settings className="w-5 h-5 text-primary" />
                    },
                    {
                      text: "Modular design provides flexibility",
                      icon: <Zap className="w-5 h-5 text-primary" />
                    }
                  ].map((advantage, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
                        {advantage.icon}
                      </div>
                      <span className="text-gray-700">{advantage.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Video Section */}
              <div className="mt-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <h2 className="text-3xl font-bold text-center mb-12">
                    See <span className="text-primary">recoSTAR PET</span> in Action
                  </h2>

                  <a 
                    href="https://vimeo.com/760224052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group relative rounded-xl overflow-hidden bg-white shadow-xl"
                  >
                    <div className="relative pb-[56.25%] bg-gray-900">
                      {/* Thumbnail/Preview Image */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                        <div className="relative z-10 text-center">
                          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                              <svg 
                                className="w-8 h-8 text-primary translate-x-0.5" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <p className="text-white text-lg font-semibold">
                            Watch Video on Vimeo
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <div className="text-center mt-8">
                    <p className="text-gray-600 text-lg">
                      Watch how our recoSTAR PET recycling line transforms post-consumer PET bottles into high-quality food-grade rPET.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* CTA button */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                >
                  <span className="font-bold">Request More Information</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">Advanced features for optimal performance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ translateY: -5 }}
              >
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                  {spec.icon}
                </div>
                <div className="relative z-10">
                  {spec.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{spec.title}</h3>
                  <div className="text-3xl font-bold text-blue-300 mb-2">{spec.value}</div>
                  <p className="text-blue-100">{spec.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">What sets recoSTAR PET apart</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-primary/5 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Diagrams Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Process Configurations</h2>
            <p className="text-xl text-gray-600">Multiple setup options for different requirements</p>
          </motion.div>

          {/* PET art Configuration */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-primary">PET art Configuration</h3>
            <div className="mb-6">
              <img 
                src="/images/starlinger/diag1pet.jpg"
                alt="PET art configuration diagram"
                className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {petArtComponents.map((component, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {component.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{component.title}</h3>
                    <p className="text-gray-600 text-xs">{component.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* recoSTAR FG Configuration */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-primary">recoSTAR FG Configuration</h3>
            <div className="mb-8">
              <img 
                src="/images/starlinger/diag2pet.jpg"
                alt="recoSTAR FG configuration diagram"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recoStarFGComponents.map((component, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {component.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{component.title}</h3>
                    <p className="text-gray-600 text-sm">{component.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* recoSTAR FG+ Configuration */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">recoSTAR FG+ Configuration</h3>
            <div className="mb-8">
              <img 
                src="/images/starlinger/diag3pet.jpg"
                alt="recoSTAR FG+ configuration diagram"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recoStarFGPlusComponents.map((component, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {component.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{component.title}</h3>
                    <p className="text-gray-600 text-sm">{component.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Brochure Button */}
          <div className="text-center mt-16">
            <motion.a
              href="https://www.starlinger.com/fileadmin/user_upload/Broschueren_pdf/recoSTAR_direct_E4_24871_04U.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-bold">Download Technical Brochure</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecostarPET; 