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
        formingArea: "620 x 470 mm",
        toolDimensions: "640 x 490 mm",
        heightFormedPart: "120 mm",
        filmWidth: "670 mm",
        filmThickness: "0.2 - 1.8 mm",
        punchingForceBFS: "500 kN",
        punchingForceStation: "500 kN",
        productionSpeed: "50 (BFS: 45) c/min"
      }
    },
    {
      name: "KMD 78 Smart",
      specs: {
        formingArea: "760 x 580 mm",
        toolDimensions: "780 x 600 mm",
        heightFormedPart: "130 mm",
        filmWidth: "810 mm",
        filmThickness: "0.2 - 1.8 mm",
        punchingForceBFS: "550 kN",
        punchingForceStation: "550 kN",
        productionSpeed: "45 (BFS: 40) c/min"
      }
    },
    {
      name: "KMD 78.2 Premium",
      specs: {
        formingArea: "760 x 580 mm",
        toolDimensions: "780 x 600 mm",
        heightFormedPart: "150 mm",
        filmWidth: "810 mm",
        filmThickness: "0.2 - 1.8 mm",
        punchingForceBFS: "550 kN",
        punchingForceStation: "550 kN",
        productionSpeed: "45 (BFS: 40) c/min"
      }
    },
    {
      name: "KMD 78.2 Speed",
      specs: {
        formingArea: "760 x 580 mm",
        toolDimensions: "780 x 600 mm",
        heightFormedPart: "120 mm",
        filmWidth: "810 mm",
        filmThickness: "0.2 - 1.8 mm",
        punchingForceBFS: "650 kN",
        punchingForceStation: "600 kN",
        productionSpeed: "50 (BFS: 45) c/min"
      }
    },
    {
      name: "KMD 78.2 Power",
      specs: {
        formingArea: "760 x 580 mm",
        toolDimensions: "780 x 600 mm",
        heightFormedPart: "150 mm",
        filmWidth: "810 mm",
        filmThickness: "0.2 - 2.0 mm",
        punchingForceBFS: "700 kN",
        punchingForceStation: "650 kN",
        productionSpeed: "45 (BFS: 40) c/min"
      }
    },
    {
      name: "KMD 85 Speed",
      specs: {
        formingArea: "850 x 600 mm",
        toolDimensions: "870 x 620 mm",
        heightFormedPart: "130 mm",
        filmWidth: "900 mm",
        filmThickness: "0.2 - 2.0 mm",
        punchingForceBFS: "750 kN",
        punchingForceStation: "700 kN",
        productionSpeed: "45 (BFS: 40) c/min"
      }
    },
    {
      name: "KMD 90 Smart",
      specs: {
        formingArea: "900 x 650 mm",
        toolDimensions: "920 x 670 mm",
        heightFormedPart: "150 mm",
        filmWidth: "950 mm",
        filmThickness: "0.2 - 2.0 mm",
        punchingForceBFS: "800 kN",
        punchingForceStation: "750 kN",
        productionSpeed: "40 (BFS: 35) c/min"
      }
    },
    {
      name: "KMD 90.1 Premium",
      specs: {
        formingArea: "900 x 650 mm",
        toolDimensions: "920 x 670 mm",
        heightFormedPart: "150 mm",
        filmWidth: "950 mm",
        filmThickness: "0.2 - 2.0 mm",
        punchingForceBFS: "850 kN",
        punchingForceStation: "800 kN",
        productionSpeed: "40 (BFS: 35) c/min"
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
      icon: <Factory className="w-8 h-8" />
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
      icon: <Settings className="w-8 h-8" />
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
      icon: <Shield className="w-8 h-8" />
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
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const applications = [
    {
      title: "Food Packaging",
      description: "High-quality containers and trays for food industry",
      image: "/path/to/food-packaging.jpg"
    },
    {
      title: "Medical Packaging",
      description: "Sterile packaging solutions for medical devices",
      image: "/path/to/medical-packaging.jpg"
    },
    {
      title: "Industrial Packaging",
      description: "Durable packaging for industrial products",
      image: "/path/to/industrial-packaging.jpg"
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
                <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
                  Steel Rule Cutting Machines
                </span>
              </h1>
              <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
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
            {/* Main Machine Image - More Compact */}
            <div className="max-w-3xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={machineImages.main}
                  alt="SPEEDFORMER KMD"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x450?text=KMD+Machine';
                  }}
                />
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
              food or non-food sector, and are versatile for materials such as PET, PP, PS, PLA, PE.
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
                <div className="bg-white/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-blue-100">
                      <CheckCircle className="w-4 h-4 text-blue-300 mr-2 flex-shrink-0" />
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
            <p className="text-xl text-blue-200">Technical specifications and capabilities</p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-4 py-2 text-left text-blue-200">Specifications</th>
                  {models.map(model => (
                    <th key={model.name} className="px-4 py-2 text-left text-blue-200">{model.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(models[0].specs).map((spec, index) => (
                  <tr key={spec} className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : ''}`}>
                    <td className="px-4 py-2 font-semibold text-white">{spec.replace(/([A-Z])/g, ' $1').trim()}</td>
                    {models.map(model => (
                      <td key={`${model.name}-${spec}`} className="px-4 py-2 text-blue-100">{model.specs[spec]}</td>
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
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={application.image}
                      alt={application.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x225?text=${application.title.replace(' ', '+')}`;
                      }}
                    />
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{application.title}</h3>
                    <p className="text-blue-100">{application.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
                icon: <Factory className="w-8 h-8" />
              },
              {
                title: "Upstream & Downstream",
                description: "Complete line integration solutions",
                link: "/industries/packaging/kiefel/upstream",
                icon: <Settings className="w-8 h-8" />
              },
              {
                title: "KMD Tooling",
                description: "High-quality tools for optimal production",
                link: "/industries/packaging/kiefel/tooling",
                icon: <Wrench className="w-8 h-8" />
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
                    <div className="bg-white/20 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-blue-100 mb-6">{solution.description}</p>
                    <div className="flex items-center text-blue-300 group-hover:text-white transition-colors">
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