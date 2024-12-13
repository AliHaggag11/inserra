import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FlaskConical, Leaf, Shield, Award, ArrowRight, Factory, Microscope, Gauge } from 'lucide-react';

const FoodPharma = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const solutions = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Clean Room Technology",
      description: "State-of-the-art clean room solutions meeting GMP standards for pharmaceutical and food processing environments."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Control Systems",
      description: "Advanced quality control and monitoring systems ensuring product consistency and safety."
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Process Automation",
      description: "Fully automated processing systems for enhanced efficiency and reduced contamination risks."
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Precision Equipment",
      description: "High-precision machinery for pharmaceutical manufacturing and food processing."
    }
  ];

  const features = [
    {
      title: "GMP Compliance",
      description: "All equipment and solutions meet Good Manufacturing Practice standards",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Sustainable Operations",
      description: "Energy-efficient systems with minimal environmental impact",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Quality Assurance",
      description: "Built-in quality control systems for consistent product quality",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.1]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <FlaskConical className="w-16 h-16 mx-auto mb-6 text-blue-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Food & Pharmaceutical Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Advanced equipment and systems for food processing and pharmaceutical manufacturing
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
              >
                Discuss Your Requirements
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Solutions Grid */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From clean room technology to automated processing systems, we provide complete solutions for the food and pharmaceutical industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-primary mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Upgrade Your Production Facilities?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our solutions can enhance your food processing or pharmaceutical manufacturing operations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/industries"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition duration-300"
              >
                View All Industries
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FoodPharma; 