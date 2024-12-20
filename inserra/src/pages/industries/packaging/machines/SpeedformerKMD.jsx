import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shield, CheckCircle, ArrowRight, Settings, Factory, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../../assets/plastic.png';

const SpeedformerKMD = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Data from Kiefel website
  const models = [
    {
      name: "KMD 64.2 Speed",
      specs: {
        formingAreaMax: "620 x 470 mm",
        toolDimensionsMax: "640 x 490 mm",
        heightFormedPartMax: "120 mm",
        filmWidthMax: "670 mm",
        filmThickness: "0,2 - 1,8 mm",
        punchingForceBFS: "500 kN",
        punchingForcePunchingStation: "500 kN",
        productionSpeedMax: "50 (BFS: 45) c/min"
      }
    },
    {
      name: "KMD 78 Smart",
      specs: {
        formingAreaMax: "760 x 580 mm",
        toolDimensionsMax: "780 x 600 mm",
        heightFormedPartMax: "150 mm",
        filmWidthMax: "810 mm",
        filmThickness: "0,2 - 1,8 mm",
        punchingForceBFS: "450 kN",
        punchingForcePunchingStation: "500 kN",
        productionSpeedMax: "40 (BFS: 35) c/min"
      }
    },
    {
      name: "KMD 78.2 Premium",
      specs: {
        formingAreaMax: "760 x 580 mm",
        toolDimensionsMax: "780 x 600 mm",
        heightFormedPartMax: "150 mm",
        filmWidthMax: "810 mm",
        filmThickness: "0,2 - 1,8 mm",
        punchingForceBFS: "550 kN",
        punchingForcePunchingStation: "550 kN",
        productionSpeedMax: "45 (BFS: 40) c/min"
      }
    },
    {
      name: "KMD 78.2 Speed",
      specs: {
        formingAreaMax: "760 x 580 mm",
        toolDimensionsMax: "780 x 600 mm",
        heightFormedPartMax: "120 mm",
        filmWidthMax: "810 mm",
        filmThickness: "0,2 - 1,8 mm",
        punchingForceBFS: "650 kN",
        punchingForcePunchingStation: "600 kN",
        productionSpeedMax: "50 (BFS: 45) c/min"
      }
    },
    {
      name: "KMD 78.2 Power",
      specs: {
        formingAreaMax: "760 X 580 mm",
        toolDimensionsMax: "780 x 600 mm",
        heightFormedPartMax: "120 mm",
        filmWidthMax: "810 mm",
        filmThickness: "0,2 - 1,8 mm",
        punchingForceBFS: "650 kN",
        punchingForcePunchingStation: "600 kN",
        productionSpeedMax: "50 (BFS: 45) c/min"
      }
    },
    {
      name: "KMD 85 Speed",
      specs: {
        formingAreaMax: "825 x 675 mm",
        toolDimensionsMax: "850 x 700 mm",
        heightFormedPartMax: "150 mm",
        filmWidthMax: "900 mm",
        filmThickness: "0,2 - 1,8 mm",
        punchingForceBFS: "800 kN",
        punchingForcePunchingStation: "800 kN",
        productionSpeedMax: "45 (BFS: 40) c/min"
      }
    },
    {
      name: "KMD 90 Smart",
      specs: {
        formingAreaMax: "870 x 920 mm",
        toolDimensionsMax: "890 x 940 mm",
        heightFormedPartMax: "160 mm",
        filmWidthMax: "925 mm",
        filmThickness: "0,2 - 1,8 mm",
        punchingForceBFS: "/",
        punchingForcePunchingStation: "850 kN",
        productionSpeedMax: "30 c/min"
      }
    },
    {
      name: "KMD 90.1 Premium",
      specs: {
        formingAreaMax: "870 x 920 mm",
        toolDimensionsMax: "890 x 940 mm",
        heightFormedPartMax: "160 mm",
        filmWidthMax: "925 mm",
        filmThickness: "0,2 - 1,8 mm",
        punchingForceBFS: "/",
        punchingForcePunchingStation: "850 kN",
        productionSpeedMax: "30 c/min"
      }
    }
  ];

  const keyFeatures = [
    {
      title: "Maximum output & efficiency",
      description: "Servo motor drives - toggle with needle bearing, tables and yokes made of cast steel",
      details: [
        "High-speed production capability",
        "Optimized servo motor control",
        "Robust cast steel construction",
        "Energy-efficient operation"
      ],
      icon: <Factory className="w-8 h-8 text-primary" />
    },
    {
      title: "Maximum machine availability",
      description: "Unique KISS-CUT system for highest quality cutting results & trouble-free stacking",
      details: [
        "Innovative KISS-CUT technology",
        "Precise cutting control",
        "Minimal maintenance required",
        "Quick tool changes"
      ],
      icon: <Settings className="w-8 h-8 text-primary" />
    },
    {
      title: "Highest product quality",
      description: "Perfect process control due to separately driven plug assist",
      details: [
        "Independent plug assist control",
        "Optimized material distribution",
        "Consistent part quality",
        "Advanced process monitoring"
      ],
      icon: <Shield className="w-8 h-8 text-primary" />
    },
    {
      title: "Efficient & sustainable",
      description: "Film temperature measurement with closed-loop control, drives with energy recovery system",
      details: [
        "Energy recovery system",
        "Precise temperature control",
        "Reduced material waste",
        "Environmental sustainability"
      ],
      icon: <Zap className="w-8 h-8 text-primary" />
    }
  ];

  const applications = [
    {
      title: "Food",
      description: "Food packaging applications and materials",
      details: [
        "Patisserie, Delicatessen",
        "Fruit, Vegetables, Salads, Eggs",
        "Cups & Coffee capsules",
        "Baby food",
        "Bakery Prodcts; Chococlate, Ready Meals, Margarine",
        "Meat, Chicken & Seafood",
      ]
    },
    {
      title: "Technical Packaging",
      description: "Specialized technical packaging solutions",
      details: [
        "Medicine",
        "Agriculture",
        "Engineering & Electronics",
        "Transportation",
        "Cosmetics"
      ]
    },
    {
      title: "Materials for Processing",
      description: "Wide range of materials for packaging production",
      details: [
        "PET, PP, PS, PLA, PE",
      ]
    }
  ];

  const machineImages = {
    main: "/path/to/kmd-main.jpg",
    gallery: [
      "/path/to/kmd-detail-1.jpg",
      "/path/to/kmd-detail-2.jpg",
      "/path/to/kmd-detail-3.jpg",
      "/path/to/kmd-detail-4.jpg"
    ]
  };

  // Update the table headers to match the image labels
  const specLabels = {
    formingAreaMax: "Forming area max.",
    toolDimensionsMax: "Tool dimensions max.",
    heightFormedPartMax: "Height formed part max.",
    filmWidthMax: "Film width max.",
    filmThickness: "Film thickness",
    punchingForceBFS: "Punching force BFS",
    punchingForcePunchingStation: "Punching force punching station",
    productionSpeedMax: "Production speed max."
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <span>/</span>
            <Link to="/industries/packaging" className="hover:text-primary">Packaging</Link>
            <span>/</span>
            <Link to="/industries/packaging/kiefel" className="hover:text-primary">Kiefel</Link>
            <span>/</span>
            <span className="text-primary">SPEEDFORMER KMD</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"></div>
        
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                SPEEDFORMER KMD
                <span className="block text-white text-3xl md:text-4xl mt-4">
                  Steel Rule Cutting Machines
                </span>
              </h1>
              <div className="w-20 h-1 bg-gray-100 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Thermoforming at its best: Maximum Output and Efficiency
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Machine Showcase - Updated Design */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            {/* Main Machine Image */}
            <div className="max-w-3xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-white/10 backdrop-blur-lg p-1">
                <div className="w-full h-full bg-gray-800 rounded-lg">
                  <img
                    src="/images/kiefel/kiefeloverview.webp"
                    alt="SPEEDFORMER KMD Overview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why SPEEDFORMER KMD?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Steel rule cutting machines of the SPEEDFORMER KMD series are effective in mass production 
              and economical even for small quantities. They can be deployed flexibly, whether in the 
              food or non-food sector, and are versatile for materials such as PET, PP, PS, PLA, PE. The modular design offers maximum flexibility.

The high degree of automation and the sophisticated tool change are as much part of the mature concept as the steel rule cutting and the integrated stacking station.

Robust and precise, whether as a standard system or expanded with options. Simple and safe operation.

Kiefel is your reliable partner for turnkey solutions:
First class thermoforming equipment – cost saving automation – premium steel-rule cutting tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-100 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-100">
                      <CheckCircle className="w-4 h-4 text-gray-100 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Models Specifications */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Models of the SPEEDFORMER KMD</h2>
            <p className="text-xl text-gray-100">Technical specifications and capabilities</p>
          </motion.div>

          <div className="bg-black/10 backdrop-blur-lg rounded-xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-400/20">
                  <th className="px-4 py-2 text-left text-gray-100"></th>
                  {models.map(model => (
                    <th key={model.name} className="px-4 py-2 text-left text-gray-100">{model.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(specLabels).map(([key, label], index) => (
                  <tr key={key} className={`border-b border-gray-400/20 ${index % 2 === 0 ? 'bg-black/5' : ''}`}>
                    <td className="px-4 py-2 font-semibold text-white">{label}</td>
                    {models.map(model => (
                      <td key={`${model.name}-${key}`} className="px-4 py-2 text-gray-100">
                        {model.specs[key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Applications</h2>
            <p className="text-xl text-gray-600">Versatile solutions for various industries</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 h-full">
                  <div className="bg-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                    <div className="text-3xl font-bold text-primary">{index + 1}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{application.title}</h3>
                  <p className="text-gray-100 mb-6">{application.description}</p>
                  <ul className="space-y-3">
                    {application.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-100">
                        <CheckCircle className="w-4 h-4 text-gray-100 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* KMI 2.0 Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Kiefel Driving Digital – KMI 2.0
              </h2>
              <h3 className="text-2xl text-primary mb-6">Intuitive machine operation</h3>
              <p className="text-lg text-gray-600 mb-6">
                Dive into the world of thermoforming 2.0 with the new machine interface 
                generation KMI 2.0! The <span className="font-semibold">intuitive machine operation simplifies your 
                thermoforming processes</span> and supports you in many ways:
              </p>
              <ul className="space-y-3">
                {[
                  "Short training time",
                  "Fast recipe optimization",
                  "Fast error handling",
                  "Guided maintenance system"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/images/kiefel/reddot.webp"
                alt="Red Dot Award 2020"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related Solutions */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Complete Solution Package</h2>
            <p className="text-xl text-gray-600">Everything from one single source</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Stacking & Automation",
                description: "Automated solutions for efficient product handling",
                link: "/industries/packaging/kiefel/stacking",
                icon: <Factory className="w-8 h-8 text-primary" />
              },
              {
                title: "Upstream & Downstream",
                description: "Complete line integration solutions",
                link: "/industries/packaging/kiefel/upstream",
                icon: <Settings className="w-8 h-8 text-primary" />
              },
              {
                title: "KMD Tooling",
                description: "High-quality tools for optimal production",
                link: "/industries/packaging/kiefel/tooling",
                icon: <Wrench className="w-8 h-8 text-primary" />
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={solution.link} className="block">
                  <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white h-full transform transition-all duration-300 group-hover:scale-105">
                    <div className="bg-white rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-gray-100 mb-6">{solution.description}</p>
                    <div className="flex items-center text-gray-100 group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedformerKMD; 