import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Gauge, BarChart, Cpu, Workflow, ChevronRight, Cog, Power, ArrowDownCircle, Flame, Filter, Wind, Layers, Download, Settings, Scissors, RefreshCw, RotateCw, Thermometer } from 'lucide-react';
import heroImage from '../../../../assets/plastic.png';

const RecostarDynamic = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const specifications = [
    {
      title: "Material Range",
      value: "Multi-polymer",
      description: "PE, PP, PET, PES, PA, PLA, PS, PPS",
      icon: <Layers className="w-8 h-8 text-white" />
    },
    {
      title: "Smart Features",
      value: "SMART Feeder",
      description: "Dynamic automation package",
      icon: <Cpu className="w-8 h-8 text-white" />
    },
    {
      title: "Processing Types",
      value: "Versatile",
      description: "Films, fibers, and thermoplastics",
      icon: <Settings className="w-8 h-8 text-white" />
    },
    {
      title: "Filtration",
      value: "Advanced",
      description: "Multiple filtration options available",
      icon: <Filter className="w-8 h-8 text-white" />
    }
  ];

  const features = [
    {
      title: "Advanced Extrusion System",
      description: "Wear-resistant extruders with specialized modules",
      icon: <Settings className="w-12 h-12 text-primary" />,
      details: [
        "In-house manufactured extruders",
        "Optional degassing functionality",
        "C-VAC and H-VAC modules available"
      ]
    },
    {
      title: "Smart Filtration",
      description: "Comprehensive melt filtration system",
      icon: <Filter className="w-12 h-12 text-primary" />,
      details: [
        "Continuous contaminant removal",
        "Optional backflushing function",
        "Power backflush capability"
      ]
    },
    {
      title: "Flexible Pelletising",
      description: "Multiple pelletising options",
      icon: <Workflow className="w-12 h-12 text-primary" />,
      details: [
        "Automatic strand pelletising",
        "Manual strand options",
        "Water ring and underwater systems"
      ]
    },
    {
      title: "Material Versatility",
      description: "Wide range of processable materials",
      icon: <Layers className="w-12 h-12 text-primary" />,
      details: [
        "Post-consumer waste processing",
        "Production scrap handling",
        "Hygroscopic and wet materials"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Material Input",
      description: "Flexible feeding system for various materials",
      icon: <ArrowDownCircle className="w-8 h-8" />,
      details: "Handles flakes, pellets, and agglomerates"
    },
    {
      title: "Pre-heating",
      description: "Efficient material preparation",
      icon: <Flame className="w-8 h-8" />,
      details: "Optimized temperature control"
    },
    {
      title: "Extrusion",
      description: "High-performance plasticizing",
      icon: <Cog className="w-8 h-8" />,
      details: "Advanced screw technology"
    },
    {
      title: "Filtration",
      description: "Superior melt cleaning",
      icon: <Filter className="w-8 h-8" />,
      details: "Continuous filtration system"
    },
    {
      title: "Degassing",
      description: "Efficient contaminant removal",
      icon: <Wind className="w-8 h-8" />,
      details: "Multi-stage degassing"
    },
    {
      title: "Pelletizing",
      description: "Precise pellet formation",
      icon: <Layers className="w-8 h-8" />,
      details: "Uniform pellet quality"
    }
  ];

  const machineComponents = [
    {
      number: "1",
      title: "Conveyor belt/screw",
      description: "Material transport system"
    },
    {
      number: "2",
      title: "Single-shaft cutter, stand-alone",
      description: "Size reduction unit"
    },
    {
      number: "3",
      title: "Conveyor belt with metal detector",
      description: "Contamination detection"
    },
    {
      number: "4",
      title: "Nip roll feeder",
      description: "Material feeding control"
    },
    {
      number: "5",
      title: "Edge trim cyclone",
      description: "Trim collection system"
    },
    {
      number: "6",
      title: "SMART feeder",
      description: "Intelligent feeding system"
    },
    {
      number: "7",
      title: "Extruder",
      description: "Primary processing unit"
    },
    {
      number: "8",
      title: "Degassing extruder",
      description: "Volatile removal"
    },
    {
      number: "9",
      title: "Melt filtration, discontinuous",
      description: "Contaminant removal"
    },
    {
      number: "10",
      title: "Melt filter without backflushing",
      description: "Basic filtration system"
    },
    {
      number: "11",
      title: "Melt filter with backflushing",
      description: "Advanced filtration system"
    },
    {
      number: "12",
      title: "Melt filter with power backflushing",
      description: "Premium filtration system"
    },
    {
      number: "13",
      title: "Continuous melt filter",
      description: "Uninterrupted filtration"
    },
    {
      number: "14",
      title: "Band filter",
      description: "Specialized filtration"
    },
    {
      number: "15",
      title: "C-VAC degassing extruder",
      description: "Advanced degassing system"
    },
    {
      number: "16",
      title: "Water ring pelletiser",
      description: "Water-based pellet formation"
    },
    {
      number: "17",
      title: "Strand pelletiser",
      description: "Strand cutting system"
    },
    {
      number: "18",
      title: "Automatic strand pelletiser",
      description: "Automated pellet production"
    },
    {
      number: "19",
      title: "Underwater pelletiser (UWP)",
      description: "Submerged pelletizing"
    },
    {
      number: "20",
      title: "UWP with inline crystallisation",
      description: "Integrated crystallization"
    },
    {
      number: "21",
      title: "Filling station",
      description: "Product packaging system"
    }
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
            <span className="text-primary">recoSTAR dynamic</span>
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
                  recoSTAR dynamic
                  <span className="block text-white text-3xl md:text-4xl mt-4">
                    Universal Recycling System
                  </span>
                </h1>
                <div className="w-20 h-1 bg-blue-300 mb-6"></div>
                <p className="text-xl text-blue-100 max-w-2xl">
                  High-performance recycling for a wide range of plastics with maximum flexibility
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.div 
                    className="bg-gray-100 rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Gauge className="w-6 h-6 text-primary" />
                    <span className="text-gray-800">Up to 3,300 kg/h</span>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-100 rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Workflow className="w-6 h-6 text-primary" />
                    <span className="text-gray-800">Multi-polymer Processing</span>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-100 rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Cpu className="w-6 h-6 text-primary" />
                    <span className="text-gray-800">Smart Control</span>
                  </motion.div>
                </div>

                <motion.a
                  href="https://www.starlinger.com/fileadmin/user_upload/Broschueren_pdf/recoSTAR_dynamic_24821_08V.pdf"
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
                      src="/images/starlinger/recoSTAR_dynamic.jpg"
                      alt="recoSTAR dynamic"
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
              <div className="text-primary text-5xl mt-2">recoSTAR dynamic</div>
            </h2>

            <div className="space-y-6 text-lg">
              <p className="leading-relaxed">
                <span className="text-primary">State-of-the-art recycling technology</span>
                <span> with extended functionalities such as </span>
                <span className="text-primary">SMART feeder</span>
                <span> and </span>
                <span className="text-primary">dynamic automation package</span>
                <span>. Designed for processing </span>
                <span className="text-primary">film, fibres, thermoplastic</span>
                <span> in-house production scrap and washed post-consumer waste from materials such as </span>
                <span className="text-primary">PE, PP, PET, PES, PA, PLA, PS, PPS</span>
                <span> as well as foamed products. The most efficient solution for </span>
                <span className="text-primary">hygroscopic and wet materials</span>
                <span>.</span>
              </p>

              <p className="leading-relaxed">
                <span>The </span>
                <span className="text-primary">wear-resistant extruders</span>
                <span> are designed and manufactured in-house. The optional </span>
                <span className="text-primary">degassing</span>
                <span> extruder </span>
                <span className="text-primary">purifies</span>
                <span> the melt from volatile contaminants and monomers. Highly </span>
                <span className="text-primary">printed</span>
                <span>, very </span>
                <span className="text-primary">humid</span>
                <span> or organically contaminated input material requires the </span>
                <span className="text-primary">C-VAC module</span>
                <span>, hygroscopic input material the </span>
                <span className="text-primary">H-VAC module</span>
                <span>.</span>
              </p>

              <p className="leading-relaxed">
                <span>A </span>
                <span className="text-primary">melt filter</span>
                <span> continuously removes solid contaminants. The optional </span>
                <span className="text-primary">backflushing function</span>
                <span> reduces costs for filter screens and operator intervention. In case of higher contamination, a </span>
                <span className="text-primary">power backflush</span>
                <span> or </span>
                <span className="text-primary">continuous melt filter</span>
                <span> is recommended.</span>
              </p>

              <p className="leading-relaxed">
                <span>The </span>
                <span className="text-primary">pelletising system</span>
                <span> is chosen with regard to polymer type and preferred pellet shape. In case of an </span>
                <span className="text-primary">automatic strand pelletiser</span>
                <span>, broken strands are automatically inserted into the strand pelletiser without operator interference. Alternatively, </span>
                <span className="text-primary">manual strand, water ring, or underwater pelletisers</span>
                <span> are available.</span>
              </p>
            </div>

            {/* Key Features List */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "FOR POST-CONSUMER WASTE AND PRODUCTION SCRAP",
                "WIDE RANGE OF APPLICATIONS",
                "INLINE RECYCLING",
                "SUPERIOR FUNCTIONALITY WITH SMART FEEDER",
                "DYNAMIC AUTOMATION PACKAGE FOR HIGHER OUTPUT",
                "INCREASED ENERGY EFFICIENCY"
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
            <p className="text-xl text-gray-600">What sets recoSTAR dynamic apart</p>
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

      {/* Process Steps Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Process Steps</h2>
            <p className="text-xl text-gray-600">Advanced recycling process</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <p className="text-sm text-gray-500">{step.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Machine Diagram Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Machine Components</h2>
            <p className="text-xl text-gray-600">Comprehensive system overview</p>
          </motion.div>

          <div className="mb-16 max-w-4xl mx-auto">
            <img 
              src="/images/starlinger/recodynadiag.jpg"
              alt="recoSTAR dynamic diagram"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {machineComponents.map((component, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors"
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
      </div>

      {/* SMART Feeder Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <h2 className="text-4xl font-bold mb-8">
                <span className="text-primary">SMART</span> feeder
              </h2>

              <p className="text-lg text-gray-600 mb-12">
                for ideal material preparation prior to extrusion through performing simultaneously the following steps:
              </p>

              <div className="space-y-6 pl-4">
                {[
                  {
                    letter: "S",
                    text: "shrink & cut",
                    color: "text-primary"
                  },
                  {
                    letter: "M",
                    text: "mix & homogenize",
                    color: "text-blue-600"
                  },
                  {
                    letter: "A",
                    text: "active feed & control",
                    color: "text-primary"
                  },
                  {
                    letter: "R",
                    text: "rotate & friction",
                    color: "text-blue-600"
                  },
                  {
                    letter: "T",
                    text: "temperature & dry",
                    color: "text-primary"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 group">
                      <span className={`text-2xl font-bold ${step.color} transition-transform duration-300 group-hover:scale-110`}>
                        {step.letter}
                      </span>
                      <span className={`${step.color} transform transition-transform duration-300 group-hover:translate-x-1`}>
                        →
                      </span>
                      <span className="text-lg font-medium text-gray-700 transition-colors duration-300 group-hover:text-primary">
                        {step.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Download Brochure Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://www.starlinger.com/fileadmin/user_upload/Broschueren_pdf/recoSTAR_dynamic_24821_08V.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors font-semibold"
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RecostarDynamic; 