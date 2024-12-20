import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Layers, Boxes, Wrench, Recycle, Factory, Gauge, Settings, Workflow, Filter, Cog, Wind, Download } from 'lucide-react';

const RecostarUniversal = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const specifications = [
    {
      title: "Material Range",
      value: "Multi-Polymer",
      description: "PE, PP, PS, PA, PES, PET, PPS, PLA",
      icon: <Layers className="w-8 h-8 text-gray-100" />
    },
    {
      title: "Processing Types",
      value: "Versatile",
      description: "Films, fibers, nonwovens, tapes, fabrics",
      icon: <Boxes className="w-8 h-8 text-gray-100" />
    },
    {
      title: "Special Features",
      value: "ACTIVE",
      description: "Innovative shredder technology",
      icon: <Settings className="w-8 h-8 text-gray-100" />
    },
    {
      title: "Filtration",
      value: "Advanced",
      description: "Multiple filter options with backflushing",
      icon: <Filter className="w-8 h-8 text-gray-100" />
    }
  ];

  const features = [
    {
      title: "ACTIVE Shredder",
      description: "Innovative process adaption for hard-to-grind materials",
      icon: <Cog className="w-12 h-12 text-primary" />,
      details: [
        "Processing of solid lumps",
        "Start-up scrap handling",
        "Injection molding parts processing"
      ]
    },
    {
      title: "Advanced Filtration",
      description: "Comprehensive melt filtration system",
      icon: <Filter className="w-12 h-12 text-primary" />,
      details: [
        "Optional backflushing function",
        "Power backflush capability",
        "Continuous filter options"
      ]
    },
    {
      title: "Degassing System",
      description: "Optional purification technology",
      icon: <Wind className="w-12 h-12 text-primary" />,
      details: [
        "Volatile contamination removal",
        "Monomer purification",
        "High-vacuum option for hygroscopic polymers"
      ]
    },
    {
      title: "Pelletising Options",
      description: "Multiple pelletising solutions",
      icon: <Layers className="w-12 h-12 text-primary" />,
      details: [
        "Water ring pelletiser",
        "Strand/automatic strand options",
        "Underwater pelletiser available"
      ]
    }
  ];

  const materialTypes = [
    {
      category: "Film & Fiber Materials",
      materials: [
        "Films and sheets",
        "Fibers and filaments",
        "Nonwovens",
        "Tapes and fabrics"
      ],
      icon: <Layers className="w-12 h-12" />
    },
    {
      category: "Solid Materials",
      materials: [
        "Lumps",
        "Start-up scrap",
        "Injection molding parts",
        "Various regrind types"
      ],
      icon: <Boxes className="w-12 h-12" />
    },
    {
      category: "Polymer Types",
      materials: [
        "PE, PP, PS",
        "PA, PES, PET",
        "PPS, PLA",
        "Other polymers"
      ],
      icon: <Workflow className="w-12 h-12" />
    }
  ];

  const machineComponents = [
    { number: "1", title: "Conveyor belt", description: "Material transport system" },
    { number: "2", title: "Nip roll feeder", description: "Material feeding control" },
    { number: "3", title: "Edge trim cyclone", description: "Trim collection system" },
    { number: "4", title: "ACTIVE shredder", description: "Size reduction unit" },
    { number: "5", title: "Extruder", description: "Primary processing unit" },
    { number: "6", title: "Degassing extruder", description: "Volatile removal" },
    { number: "7", title: "Melt filter, discontinuous", description: "Basic filtration" },
    { number: "8", title: "Melt filter without backflushing", description: "Standard filtration" },
    { number: "9", title: "Melt filter with backflushing", description: "Advanced filtration" },
    { number: "10", title: "Melt filter with power backflushing", description: "Premium filtration" },
    { number: "11", title: "Continuous melt filter", description: "Uninterrupted filtration" },
    { number: "12", title: "Waterring pelletiser", description: "Water-based pelletizing" },
    { number: "13", title: "Strand pelletiser", description: "Strand cutting system" },
    { number: "14", title: "Automatic strand pelletiser", description: "Automated pelletizing" },
    { number: "15", title: "Underwater pelletiser (UWP)", description: "Submerged pelletizing" },
    { number: "16", title: "UWP with inline crystallisation", description: "Integrated crystallization" },
    { number: "17", title: "Filling station", description: "Product packaging" }
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
            <span className="text-primary">recoSTAR universal</span>
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
                  recoSTAR universal
                  <span className="block text-white text-3xl md:text-4xl mt-4">
                    Multi-Purpose Recycling Solution
                  </span>
                </h1>
                <div className="w-20 h-1 bg-blue-300 mb-6"></div>
                <p className="text-xl text-blue-100 max-w-2xl">
                  One system for all your recycling needs - versatile, efficient, and reliable
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.div 
                    className="bg-gray-100 rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Boxes className="w-6 h-6 text-primary" />
                    <span className="text-gray-800">Multi-Material</span>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-100 rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Layers className="w-6 h-6 text-primary" />
                    <span className="text-gray-800">Modular Design</span>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-100 rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Settings className="w-6 h-6 text-primary" />
                    <span className="text-gray-800">Smart Control</span>
                  </motion.div>
                </div>

                <motion.a
                  href="https://www.starlinger.com/fileadmin/user_upload/Broschueren_pdf/recoSTAR_universal_6S_E4_24831_09V.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-gray-100 text-primary rounded-full hover:bg-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Download className="w-5 h-5" />
                  <span className="font-bold">Download Brochure</span>
                </motion.a>
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
                      src="/images/starlinger/recoSTAR_universal.jpg"
                      alt="recoSTAR universal"
                      className="w-full h-full object-cover rounded-lg opacity-90"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
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
              <div className="text-primary text-5xl mt-2">recoSTAR universal</div>
            </h2>

            <div className="space-y-6 text-lg">
              <p className="leading-relaxed">
                <span className="text-primary">State-of-the-art recycling technology</span>
                <span> with </span>
                <span className="text-primary">extended functionality</span>
                <span> and </span>
                <span className="text-primary">innovative process adaption through the ACTIVE shredder</span>
                <span>. Designed for processing </span>
                <span className="text-primary">films, fibres and filaments, nonwovens, tapes, fabrics</span>
                <span>, as well as solid </span>
                <span className="text-primary">lumps, start-up scrap, injection moulding parts</span>
                <span>, and any type of </span>
                <span className="text-primary">regrind</span>
                <span>, from materials such as </span>
                <span className="text-primary">PE, PP, PS, PA, PES, PET, PPS, PLA</span>
                <span>, and others.</span>
              </p>

              <p className="leading-relaxed">
                <span>The </span>
                <span className="text-primary">optional degassing extruder purifies</span>
                <span> the melt from </span>
                <span className="text-primary">volatile contamination and monomers</span>
                <span>. High-vacuum degassing for </span>
                <span className="text-primary">hygroscopic polymers</span>
                <span> is optionally available. </span>
                <span className="text-primary">Wear-resistant extruder</span>
                <span> design.</span>
              </p>

              <p className="leading-relaxed">
                <span>A variety of </span>
                <span className="text-primary">melt filters</span>
                <span> for removing </span>
                <span className="text-primary">solid contaminants</span>
                <span> is available. The optional </span>
                <span className="text-primary">backflushing reduces costs</span>
                <span> for filter screens and operator intervention. In case of </span>
                <span className="text-primary">higher contamination</span>
                <span> a </span>
                <span className="text-primary">power backflush</span>
                <span> or </span>
                <span className="text-primary">continuous filter</span>
                <span> is recommended.</span>
              </p>

              <p className="leading-relaxed">
                <span>The </span>
                <span className="text-primary">water ring pelletiser</span>
                <span> ensures </span>
                <span className="text-primary">exact cutting for high pellet quality</span>
                <span> and </span>
                <span className="text-primary">low operating costs</span>
                <span>. Alternatively, a </span>
                <span className="text-primary">strand, automatic strand, or underwater pelletiser</span>
                <span> can be used. The </span>
                <span className="text-primary">remote control panel</span>
                <span> at the pelletiser allows </span>
                <span className="text-primary">starting/stopping</span>
                <span> of the </span>
                <span className="text-primary">line</span>
                <span> also from this position.</span>
              </p>
            </div>

            {/* Key Features List */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "FOR PRODUCTION AND POST-INDUSTRIAL SCRAP",
                "INTEGRATED ACTIVE SHREDDER FOR HARD-TO-GRIND MATERIALS",
                "INNOVATIVE PROCESS ADAPTION",
                "FAST MATERIAL CHANGEOVER",
                "EASY MAINTENANCE",
                "HIGH-PERFORMANCE DESIGN"
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

            {/* Machine Image */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden">
                <img
                  src="/images/starlinger/recoSTAR_universal.jpg"
                  alt="recoSTAR universal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
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
                className="relative bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ translateY: -5 }}
              >
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 transition-transform group-hover:scale-110">
                  {spec.icon}
                </div>
                <div className="relative z-10">
                  {spec.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{spec.title}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{spec.value}</div>
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
            <p className="text-xl text-gray-600">What sets recoSTAR universal apart</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-primary/5 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
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

      {/* Material Types Section */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Material Types</h2>
            <p className="text-xl text-gray-100">Comprehensive material processing capabilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materialTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-xl p-8 text-primary-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6">
                  {React.cloneElement(type.icon, { className: "w-12 h-12 text-primary" })}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-primary-dark">{type.category}</h3>
                <ul className="space-y-4">
                  {type.materials.map((material, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0 text-primary" />
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Machine Configuration Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Machine Configuration</h2>
            <p className="text-xl text-gray-600">Comprehensive system components</p>
          </motion.div>

          <div className="mb-12">
            <div className="mb-8">
              <img 
                src="/images/starlinger/diag4.jpg"
                alt="recoSTAR universal configuration"
                className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {machineComponents.map((component, index) => (
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

          {/* Download Brochure Button */}
          <div className="text-center mt-16">
            <motion.a
              href="https://www.starlinger.com/fileadmin/user_upload/Broschueren_pdf/recoSTAR_universal_6S_E4_24831_09V.pdf"
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

export default RecostarUniversal; 