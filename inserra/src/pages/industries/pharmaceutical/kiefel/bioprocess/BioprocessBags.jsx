import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Settings, Gauge, Beaker } from 'lucide-react';

const BioprocessBags = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      title: "Fully- and semi-automated",
      description: "Bag manufacturing equipment for flexible and fast production",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Size Range",
      description: "From 20 ml 2D bags to multi-thousand-liter 3D container designs",
      icon: <Gauge className="w-6 h-6" />
    },
    {
      title: "Customization",
      description: "Including mixer, bioreactor and fermenter bags",
      icon: <Beaker className="w-6 h-6" />
    }
  ];

  const applications = [
    "Media and buffer preparation",
    "Cell culture",
    "Sampling",
    "Storage and transport",
    "Cryopreservation bags",
    "Cell and Gene therapy applications"
  ];

  const options = [
    {
      range: "20 mL - 50 L",
      type: "2D Bag",
      is3D: false
    },
    {
      range: "50 L - 3,000 L",
      type: "3D Bag",
      is3D: true
    }
  ];

  const benefits = [
    {
      title: "High bag quality",
      description: "Ensured by the choice of the best process determined in our Customer Innovation Center at the start of a project, followed by the design of the most reliable equipment plus the use of innovative servo drive systems and process control systems that continuously monitor every parameter."
    },
    {
      title: "Flexibility in bag design & production",
      description: "Customized machine equipment & product design tailored to bag requirements combined with quick and easy welding tool change for rapid product production switching and less downtime."
    },
    {
      title: "Significant production time saving",
      description: "Semi-automatic and fully automatic solutions available for greater efficiency and labor cost optimization."
    },
    {
      title: "Reliable manufacturing",
      description: "Constant heat or impulse welding in combination with advanced servo motors and closed loop load cell system. Quality assurance with process control systems."
    },
    {
      title: "Efficient maintenance & easy operator access",
      description: "Thanks to our ergonomic machine design."
    },
    {
      title: "Sustainable solutions",
      description: "We apply sustainable practices throughout our operations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <span>/</span>
            <Link to="/industries/pharmaceutical/kiefel-medical-pharma" className="hover:text-primary">
              Medical, Pharma, Bioprocess
            </Link>
            <span>/</span>
            <span className="text-primary">Bioprocess Bags</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
          >
            <img 
              src="https://placehold.co/200x50/e2e8f0/475569?text=KIEFEL&font=roboto"
              alt="Kiefel Logo"
              className="h-16 w-auto bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-8"
            />
            <h1 className="text-5xl font-bold mb-6">
              Flexible solutions for producing highest-quality bioprocess bags & containers
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Our fully- and semi-automated bag manufacturing equipment allows flexible and fast production 
              of highest-quality single-use bioprocess bags, ranging from 20 ml 2D bags to multi-thousand-liter 
              3D container designs, including mixer, bioreactor and fermenter bags.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Machine Showcase Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
              Bioprocess bag machine
            </h2>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-md bg-gray-100">
              <img
                src="https://placehold.co/1200x675/e2e8f0/64748b?text=Bioprocess+Bag+Machine&font=roboto"
                alt="Kiefel Bioprocess Bag Manufacturing Machine"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-8">
                With over 60 years of experience in machinery construction and expertise in TC and RF welding 
                technology, whether you opt for non-PVC (PE, PP) or EVA as the container material, we can offer 
                you the ideal welding process, customized production technology and automation grade for the 
                efficient production of 2D and 3D single-use consumables to help you fulfill your customer 
                expectations "on time and in full" (OTIF).
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Options Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Your Options</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-6 py-3 text-left">Volume Range</th>
                    <th className="px-6 py-3 text-center">2D Bag</th>
                    <th className="px-6 py-3 text-center">3D Bag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-gray-50">
                    <td className="px-6 py-4">20 mL - 50 L</td>
                    <td className="px-6 py-4 text-center">✓</td>
                    <td className="px-6 py-4 text-center"></td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4">50 L - 3,000 L</td>
                    <td className="px-6 py-4 text-center"></td>
                    <td className="px-6 py-4 text-center">✓</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-6 py-4">Semi-automatic production</td>
                    <td className="px-6 py-4 text-center">✓</td>
                    <td className="px-6 py-4 text-center">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4">Fully automatic production</td>
                    <td className="px-6 py-4 text-center">✓</td>
                    <td className="px-6 py-4 text-center">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Your Benefits at a Glance</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Applications</h2>
            <p className="text-gray-600">
              Single-use bioprocess bags vary in size and shape depending on their application
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700">{app}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Production?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to learn more about our bioprocess bag solutions
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 flex items-center"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioprocessBags; 