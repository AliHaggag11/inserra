import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const NatureprepKFP = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      title: "Modular Design",
      description: "Flexible configuration for different production volumes and requirements"
    },
    {
      title: "Continuous Production",
      description: "Non-stop fiber preparation for high-volume production"
    },
    {
      title: "Quality Control",
      description: "Integrated quality monitoring system for consistent output"
    },
    {
      title: "Resource Efficiency",
      description: "Optimized water and energy consumption with recycling capabilities"
    }
  ];

  const versions = [
    {
      name: "KFP S",
      output: "30 kg (virgin fiber)",
      type: "Batch",
      application: "Low production volume",
      footprint: "4.1 x 2.2 x 2.7 m",
      machines: "1 machine",
      description: "Perfect entry-level solution with small footprint and maximum mobility"
    },
    {
      name: "KFP M",
      output: "160 kg (virgin fiber)",
      type: "Continuous production",
      application: "Medium volume",
      footprint: "5.5 x 9.1 x 3.5 m",
      machines: "Up to 4 machines",
      description: "Non-stop continuous output for medium production volumes"
    },
    {
      name: "KFP L",
      output: "250 kg (recycled material)",
      type: "Continuous production",
      application: "High volume",
      footprint: "12.1 x 5.5 x 3.5 m",
      machines: "Up to 6 machines",
      description: "Non-stop preparation for high production volumes"
    }
  ];

  const materials = [
    {
      name: "CTMP",
      fullName: "(chemi-thermical mechanical pulp)"
    },
    {
      name: "NBSK",
      fullName: "(northern bleached softwood kraft)"
    },
    {
      name: "UKP",
      fullName: "(unbleached kraft pulp)"
    },
    {
      name: "ONP",
      fullName: "(old news print oder old news paper)"
    },
    {
      name: "OCC",
      fullName: "(old corrugated cardboard oder old corrugated containers)"
    },
    {
      name: "Some grades from annual plants"
    },
    {
      name: "Reject and scrap material from pulp and paper production"
    }
  ];

  const processSteps = [
    {
      title: "Material Input",
      description: "Flexible feeding system for various fiber materials"
    },
    {
      title: "Pulping",
      description: "Advanced pulping technology with optimized energy consumption"
    },
    {
      title: "Cleaning",
      description: "Multi-stage cleaning process for high-quality output"
    },
    {
      title: "Refining",
      description: "Precise fiber preparation for optimal product properties"
    },
    {
      title: "Storage",
      description: "Buffer storage system with level control"
    },
    {
      title: "Quality Control",
      description: "Continuous monitoring of fiber quality parameters"
    }
  ];

  const whyKFP = [
    {
      title: "Everything from one system provider",
      description: "Carefree packaging: Covering whole process incl. Fiber Preparation"
    },
    {
      title: "Small installation surface",
      description: "Compact system enables combination of all units & more output on small surface"
    },
    {
      title: "Full flexibility",
      description: "Configurable fiber prep for tailor-made solutions due to various sizes & modules e.g. refiner module, additive module and many more"
    },
    {
      title: "Fast Production Start",
      description: "No welding or grinding on-site; simple & fast assembly & production start at customer"
    },
    {
      title: "Flexible relocation",
      description: "Relative simple change of position due to smart design, therefore fast adjustment to market requirements & individual needs of growing companies"
    }
  ];

  const modules = [
    {
      title: "HD-Pulper",
      description: "High-density pulping system"
    },
    {
      title: "Deflaker",
      description: "Fiber separation and refinement"
    },
    {
      title: "Refiner module",
      description: "Advanced fiber processing"
    },
    {
      title: "Pressure screen",
      description: "Material separation and cleaning"
    },
    {
      title: "Additive module",
      description: "Chemical and additive integration"
    },
    {
      title: "LD-Cleaner",
      description: "Low-density cleaning system"
    },
    {
      title: "Watertank integrated",
      description: "Integrated water management"
    }
  ];

  const applications = [
    {
      sector: "Food Sector",
      description: "High-quality packaging solutions for food products"
    },
    {
      sector: "Logistics",
      description: "Durable and sustainable packaging for transport"
    },
    {
      sector: "Agriculture/Nursery",
      description: "Eco-friendly solutions for agricultural needs"
    },
    {
      sector: "High-tech Sector",
      description: "Precision packaging for technical components"
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
            <Link to="/industries/packaging" className="hover:text-primary">Packaging</Link>
            <span>/</span>
            <Link to="/industries/packaging/kiefel" className="hover:text-primary">Kiefel</Link>
            <span>/</span>
            <Link to="/industries/packaging/kiefel-fiber" className="hover:text-primary">Fiber</Link>
            <span>/</span>
            <span className="text-primary">NATUREPREP KFP</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[65vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"></div>
        
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <motion.div
              className="text-white text-left z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                NATUREPREP KFP
                <span className="block text-blue-300 text-3xl md:text-4xl mt-4">
                  High-quality Fiber Preparation
                </span>
              </h1>
              <div className="w-20 h-1 bg-blue-300 mb-6"></div>
              <p className="text-xl text-blue-100 max-w-2xl">
                Discover our solutions for the preparation of natural fibers to produce high-quality packaging
              </p>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg p-1">
                <div className="w-full h-full bg-gray-800/90 rounded-lg">
                  <img
                    src="/images/kiefel/kfpnature.webp"
                    alt="NATUREPREP KFP"
                    className="w-full h-full object-cover rounded-lg opacity-90"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Stats Cards */}
      <div className="relative -mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "250", unit: "kg/h", label: "Max Output" },
              { value: "100%", unit: "", label: "Recyclable" },
              { value: "7+", unit: "", label: "Modules Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-xl p-6 transform hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-4xl font-bold text-primary">{stat.value}</span>
                    <span className="text-lg text-primary">{stat.unit}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why NATUREPREP KFP?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your ecological fiber packaging from one provider: Fiber Preparation & Fiber Thermoforming machine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyKFP.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Process Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Machine Versions */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl font-bold mb-4">Versions of the NATUREPREP KFP</h2>
            <p className="text-xl text-gray-400">Kiefel Fiber Preparation</p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-6 py-3 text-left"></th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-blue-200">KFP S</th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-blue-200">KFP M</th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-blue-200">KFP L</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "Output per hour",
                    s: "30 kg (virgin fiber)",
                    m: "160 kg (virgin fiber)",
                    l: "250 kg (recycled material)"
                  },
                  {
                    label: "Output type",
                    s: "Batch",
                    m: "Continuous production",
                    l: "Continuous production"
                  },
                  {
                    label: "Application",
                    s: "Low production volume",
                    m: "Medium volume",
                    l: "High volume"
                  },
                  {
                    label: "Footprint",
                    s: "4.1 x 2.2 x 2.7 m",
                    m: "5.5 x 9.1 x 3.5 m",
                    l: "12.1 x 5.5 x 3.5 m"
                  },
                  {
                    label: "Recommended system configuration",
                    s: "1 machine",
                    m: "Up to 4 machines",
                    l: "Up to 6 machines"
                  }
                ].map((row, index) => (
                  <tr key={index} className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : ''}`}>
                    <td className="px-6 py-4 text-sm font-medium text-white">{row.label}</td>
                    <td className="px-6 py-4 text-sm text-blue-100">{row.s}</td>
                    <td className="px-6 py-4 text-sm text-blue-100">{row.m}</td>
                    <td className="px-6 py-4 text-sm text-blue-100">{row.l}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Materials Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Materials for Processing</h2>
            <p className="text-xl text-gray-600">Compatible materials for fiber preparation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3">{material.name}</h3>
                <p className="text-blue-100">{material.fullName}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Various Modules & Options */}
      <div className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Various Modules & Options</h2>
            <p className="text-xl text-blue-200">Comprehensive system components</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{module.title}</h3>
                <p className="text-blue-100">{module.description}</p>
              </motion.div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{application.sector}</h3>
                <p className="text-blue-100">{application.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Download */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Download</h2>
          <div className="max-w-xs mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">KFP series</h3>
              <a
                href="https://www.kiefel.com/downloaddata?id=Q080VEpMTEhLWWVhbEhXeW9wL1d3dz09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
              >
                <span className="mr-2">Download Brochure</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureprepKFP;