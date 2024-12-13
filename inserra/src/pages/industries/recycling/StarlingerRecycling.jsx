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
      title: "recoSTAR dynamic",
      description: "For post-consumer and post-industrial plastic waste",
      features: [
        "Processing capacity from 100 to 3,300 kg/h",
        "For all types of plastics (PET, PE, PP, PA, PS, etc.)",
        "Smart technology for consistent high quality output",
        "Energy-efficient design"
      ],
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=recoSTAR+dynamic",
      path: "/industries/recycling/starlinger-recycling/recostar-dynamic"
    },
    {
      title: "recoSTAR PET",
      description: "Specialized for PET recycling",
      features: [
        "Food-grade rPET production",
        "Super-clean technology",
        "Solid state polycondensation (SSP)",
        "Bottle-to-bottle recycling"
      ],
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=recoSTAR+PET",
      path: "/industries/recycling/starlinger-recycling/recostar-pet"
    },
    {
      title: "recoSTAR universal",
      description: "Universal recycling solution",
      features: [
        "Versatile application range",
        "Compact design",
        "High-quality output",
        "Easy operation"
      ],
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=recoSTAR+universal",
      path: "/industries/recycling/starlinger-recycling/recostar-universal"
    },
    {
      title: "recoSTAR direct",
      description: "Direct processing of production waste",
      features: [
        "Inline recycling",
        "Space-saving design",
        "Energy efficient",
        "Quick material changes"
      ],
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=recoSTAR+direct",
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
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img 
                src="https://placehold.co/200x80?text=Starlinger&font=roboto"
                alt="Starlinger Logo" 
                className="h-16 w-auto mb-8 mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Starlinger Recycling
                <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
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
                className="bg-white rounded-xl shadow-lg overflow-hidden"
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
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{tech.title}</h3>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ArrowRight className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={tech.path}
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors w-full"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
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
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarlingerRecycling; 