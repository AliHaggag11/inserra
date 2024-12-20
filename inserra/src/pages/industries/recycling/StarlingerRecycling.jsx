import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../../assets/plastic.png';

const StarlingerRecycling = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const technologies = [
    {
      title: "recoSTAR PET ART",
      description: "Specialized for PET recycling",
      features: [
        "Bottle to Bottle Recycling Line",
        "Highest Purity with lowest VOCs",
        "Highest Energy Efficiency",
        "Approved by Multinational Brand Owners"
      ],
      image: "/images/starlinger/recopet hero.jpg",
      path: "/industries/recycling/starlinger-recycling/recostar-pet"
    },
    {
      title: "recoSTAR dynamic",
      description: "For post-consumer and post-industrial plastic waste",
      features: [
        "Inhouse & washed post consumer materials; PE, PP, PET, PES, PA, PLA, PS, PPS",
        "SMART Feeder technology & dynamic automation package",
        "Increased Energy Efficiency",
        "Wide Range of Applications"
      ],
      image: "/images/starlinger/recoSTAR_dynamic.jpg",
      path: "/industries/recycling/starlinger-recycling/recostar-dynamic"
    },
    {
      title: "recoSTAR universal",
      description: "Universal recycling solution",
      features: [
        "Recycling of post industrial scrap; ; PE, PP, PET, PES, PA, PLA, PS, PPS",
        "Designed for processing films, fibers & filaments, nomwovens, tapes, fabrics as well as solid lumps",
        "Integrated active shredder for hard to grind materials",
        "Easy operation & maintenance"
      ],
      image: "/images/starlinger/recoSTAR_universal.jpg",
      path: "/industries/recycling/starlinger-recycling/recostar-universal"
    },
    {
      title: "recoSTAR direct",
      description: "Direct processing of production waste",
      features: [
        "Cost-effective recycling of regrind with high bulk density (>300 g/l)",
        "For production & Post-industrial scrap",
        "Space & Energy saving",
        "Operator & Maintenance Friendly"
      ],
      image: "/images/starlinger/directhero.jpg",
      path: "/industries/recycling/starlinger-recycling/recostar-direct"
    }
  ];

  const applications = [
    {
      title: "Post-Consumer Waste",
      items: [
        "PET bottles and thermoforms",
        "PE/PP packaging",
        "Agricultural films",
        "Post-consumer films"
      ]
    },
    {
      title: "Post-Industrial Waste",
      items: [
        "Production waste",
        "Edge trim",
        "Fiber waste",
        "Lumps and purge"
      ]
    },
    {
      title: "Special Applications",
      items: [
        "Battery cases",
        "Big bags",
        "Automotive parts",
        "Electronic waste"
      ]
    }
  ];

  const features = [
    {
      title: "Smart Technology",
      description: "Intelligent process control for consistent output quality"
    },
    {
      title: "Energy Efficiency",
      description: "Optimized energy consumption with heat recovery systems"
    },
    {
      title: "Flexibility",
      description: "Adaptable to various input materials and quality requirements"
    },
    {
      title: "Quality Output",
      description: "High-quality recyclate suitable for demanding applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <span>/</span>
            <Link to="/industries/recycling" className="hover:text-primary">Recycling</Link>
            <span>/</span>
            <span className="text-primary">Starlinger Recycling</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[65vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"></div>
        
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <img 
                    src="/images/starlinger/starlinger-logo.svg"
                    alt="Starlinger Logo" 
                    className="h-24 w-auto"
                  />
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Starlinger Recycling
                  <span className="block text-gray-300 text-3xl md:text-4xl mt-4">
                    Advanced Plastic Recycling Technology
                  </span>
                </h1>
                <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                  Turn plastic waste into high-quality recyclates
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Our Technologies</h2>
            <p className="text-xl text-gray-600">Complete solutions for plastic recycling</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-3">{tech.title}</h3>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={tech.path}
                    className="mt-auto bg-primary text-white py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Applications</h2>
            <p className="text-xl text-gray-200">Wide range of recycling solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="bg-gray-50/95 rounded-xl p-8 hover:bg-white transition-all duration-300 transform hover:-translate-y-1 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-800">{app.title}</h3>
                </div>
                <ul className="space-y-4">
                  {app.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ArrowRight className="w-4 h-4 mr-3 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">What sets us apart</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                  <span className="text-2xl font-bold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarlingerRecycling; 