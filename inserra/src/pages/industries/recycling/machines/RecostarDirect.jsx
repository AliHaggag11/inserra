import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Gauge, Minimize2, Timer, Zap, Repeat, Factory, LineChart, Workflow, Layers, Scale, Monitor, Award, ArrowDownToLine, Disc, Settings, Filter, Download } from 'lucide-react';

const RecostarDirect = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const specifications = [
    {
      title: "Material Range",
      value: "Multi-Polymer",
      description: "PE, PP, PS, PA and PLA",
      icon: <Layers className="w-8 h-8 text-gray-100" />
    },
    {
      title: "Bulk Density",
      value: "> 300 g/l",
      description: "High density regrind processing",
      icon: <Scale className="w-8 h-8 text-gray-100" />
    },
    {
      title: "Control System",
      value: "Touch-screen",
      description: "RFID chip-controlled operation",
      icon: <Monitor className="w-8 h-8 text-gray-100" />
    },
    {
      title: "Output Quality",
      value: "Virgin-like",
      description: "100% reusable pellets",
      icon: <Award className="w-8 h-8 text-gray-100" />
    }
  ];

  const features = [
    {
      title: "Direct Feeding System",
      description: "Efficient material input process",
      icon: <ArrowDownToLine className="w-12 h-12 text-primary" />,
      details: [
        "Top-mounted feeding screw",
        "Masterbatch dosing capability",
        "Additives integration possible"
      ]
    },
    {
      title: "Smart Control Interface",
      description: "User-friendly operation system",
      icon: <Monitor className="w-12 h-12 text-primary" />,
      details: [
        "RFID chip-controlled access",
        "Recipe management system",
        "USB data export capability"
      ]
    },
    {
      title: "Advanced Filtration",
      description: "Comprehensive melt cleaning system",
      icon: <Filter className="w-12 h-12 text-primary" />,
      details: [
        "Optional backflushing system",
        "Power backflush capability",
        "Continuous rotation filter option"
      ]
    },
    {
      title: "Superior Pelletising",
      description: "Patented pelletising technology",
      icon: <Disc className="w-12 h-12 text-primary" />,
      details: [
        "Water ring pelletiser system",
        "Exact cutting mechanism",
        "Multiple pelletising options"
      ]
    }
  ];

  const benefits = [
    {
      title: "Production Efficiency",
      stats: [
        { label: "Material Reuse", value: "Up to 100%" },
        { label: "Quality Level", value: "Virgin-like" },
        { label: "Operation", value: "One-button" }
      ],
      icon: <Factory className="w-16 h-16" />
    },
    {
      title: "Cost Benefits",
      stats: [
        { label: "Filter Costs", value: "Reduced" },
        { label: "Knife Wear", value: "Minimal" },
        { label: "Energy Usage", value: "Optimized" }
      ],
      icon: <LineChart className="w-16 h-16" />
    },
    {
      title: "System Features",
      stats: [
        { label: "Control", value: "Touch-screen" },
        { label: "Maintenance", value: "User-friendly" },
        { label: "Integration", value: "Flexible" }
      ],
      icon: <Settings className="w-16 h-16" />
    }
  ];

  const machineComponents = [
    { number: "1", title: "Hopper with feeding screw", description: "Material input system" },
    { number: "2", title: "Extruder", description: "Primary processing unit" },
    { number: "3", title: "Venting extruder", description: "Degassing system" },
    { number: "4", title: "Melt filter without backflush", description: "Basic filtration" },
    { number: "5", title: "Melt filter with backflush", description: "Advanced filtration" },
    { number: "6", title: "Discontinuous melt filter", description: "Periodic filtration" },
    { number: "7", title: "Power backflushing filter", description: "Enhanced cleaning" },
    { number: "8", title: "Water ring pelletiser", description: "Water-based pelletizing" },
    { number: "9", title: "Underwater pelletiser", description: "Submerged pelletizing" },
    { number: "10", title: "(Automatic) strand pelletiser", description: "Strand cutting system" },
    { number: "11", title: "Storage silo", description: "Product storage" }
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
            <span className="text-primary">recoSTAR direct</span>
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
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  recoSTAR direct
                  <span className="block text-white text-3xl md:text-4xl mt-4">
                    Inline Production Waste Recycling
                  </span>
                </h1>
                <div className="w-20 h-1 bg-blue-300 mb-6"></div>
                <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
                  Efficient direct processing of production waste - immediate material recovery
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.div 
                    className="bg-gray-100 rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Factory className="w-6 h-6 text-primary" />
                    <span className="text-gray-800">Inline Processing</span>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-100 rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Minimize2 className="w-6 h-6 text-primary" />
                    <span className="text-gray-800">Space Saving</span>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-100 rounded-lg p-4 flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Timer className="w-6 h-6 text-primary" />
                    <span className="text-gray-800">Quick Response</span>
                  </motion.div>
                </div>

                <motion.a
                  href="https://www.starlinger.com/fileadmin/user_upload/Broschueren_pdf/recoSTAR_direct_24821_08V.pdf"
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
                      src="/images/starlinger/directhero.jpg"
                      alt="recoSTAR direct"
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
              <div className="text-primary text-5xl mt-2">recoSTAR direct</div>
            </h2>

            <div className="space-y-6 text-lg">
              <p className="leading-relaxed">
                <span className="text-primary">State-of-the-art recycling technology</span>
                <span> for the </span>
                <span className="text-primary">cost-effective processing</span>
                <span> of </span>
                <span className="text-primary">regrind with high bulk density (&gt; 300 g/l)</span>
                <span>: production and </span>
                <span className="text-primary">post-industrial scrap</span>
                <span> from materials such as </span>
                <span className="text-primary">PE, PP, PS, PA</span>
                <span> and </span>
                <span className="text-primary">PLA</span>
                <span>.</span>
              </p>

              <p className="leading-relaxed">
                <span>The </span>
                <span className="text-primary">direct feeding</span>
                <span> of the input material is done by a </span>
                <span className="text-primary">feeding screw mounted on top of the extruder</span>
                <span>. Additional dosing of </span>
                <span className="text-primary">masterbatches</span>
                <span> or </span>
                <span className="text-primary">additives</span>
                <span> is possible.</span>
              </p>

              <p className="leading-relaxed">
                <span>The </span>
                <span className="text-primary">user-friendly touch-screen</span>
                <span> allows simple operation with </span>
                <span className="text-primary">RFID chip-controlled user levels, alarm history, recipe management, maintenance control</span>
                <span>, etc. Screenshots can be </span>
                <span className="text-primary">downloaded via USB-port</span>
                <span>.</span>
              </p>

              <p className="leading-relaxed">
                <span>A variety of </span>
                <span className="text-primary">different melt filters</span>
                <span> for </span>
                <span className="text-primary">dirt particle removal</span>
                <span> are available. The </span>
                <span className="text-primary">optional backflushing reduces costs for filter screens</span>
                <span> and operator intervention. For higher contamination, a </span>
                <span className="text-primary">power backflush</span>
                <span> or </span>
                <span className="text-primary">continuous rotation filter</span>
                <span> is recommended.</span>
              </p>

              <p className="leading-relaxed">
                <span>The </span>
                <span className="text-primary">patented water ring pelletiser</span>
                <span> ensures </span>
                <span className="text-primary">exact cutting</span>
                <span> for </span>
                <span className="text-primary">increased pellet quality</span>
                <span> and </span>
                <span className="text-primary">reduced wear of knives</span>
                <span>. Alternatively, </span>
                <span className="text-primary">strand, automatic strand, or under-water pelletisers</span>
                <span> can be used.</span>
              </p>

              <p className="leading-relaxed">
                <span>The produced </span>
                <span className="text-primary">uniform high-quality pellets have flow characteristics like virgin resin</span>
                <span> and can be </span>
                <span className="text-primary">reused up to 100 %</span>
                <span> in the same application or upcycled for other uses.</span>
              </p>
            </div>

            {/* Key Features List */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "FOR PRODUCTION AND POST-INDUSTRIAL SCRAP",
                "REGRIND WITH HIGH BULK DENSITY",
                "WIDE RANGE OF THERMOPLASTICS",
                "SPACE AND ENERGY SAVING",
                "ONE-BUTTON START/STOP",
                "COST-EFFECTIVE RECYCLING SOLUTION"
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
                  src="/images/starlinger/directhero.jpg"
                  alt="recoSTAR direct"
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
            <p className="text-xl text-gray-600">What sets recoSTAR direct apart</p>
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

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Business Benefits</h2>
            <p className="text-xl text-gray-100">Measurable advantages for your production</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-xl p-8 text-primary-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center mb-6 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-6 text-primary-dark">{benefit.title}</h3>
                <div className="space-y-4">
                  {benefit.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className="font-bold text-primary-dark">{stat.value}</span>
                    </div>
                  ))}
                </div>
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
                src="/images/starlinger/directdiag.jpg"
                alt="recoSTAR direct configuration"
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
              href="https://www.starlinger.com/fileadmin/user_upload/Broschueren_pdf/recoSTAR_direct_24821_08V.pdf"
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

export default RecostarDirect; 