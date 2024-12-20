import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cog, Gauge, Wrench } from 'lucide-react';

const Hoists = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const keyFeatures = [
    "Hanningfield Uni-Hoist lift systems are designed for the handling of containers such as Intermediate Bulk Containers (IBCs), drums, containers and bins.",
    "Engineered for safe and repeatable operation in hygienic environments",
    "Eliminate operator strain",
    "'Raise, Lower, Rotate, Invert, Dock' at the push of a button",
    "Versatile designs for handling drums, IBCs, machines – almost anything can be lifted"
  ];

  const features = [
    {
      title: "Stainless Steel Construction",
      description: "316L contact parts for use in sanitary applications",
      icon: Shield
    },
    {
      title: "Various Power Options",
      description: "Choose a power option to suit the site environment",
      icon: Gauge
    },
    {
      title: "ATEX / Ex-proof",
      description: "ATEX (ex-proof) versions available",
      icon: Wrench
    }
  ];

  const models = [
    "Uni-Hoist HEM (Hoist Electric Mobile)",
    "Uni-Hoist HES (Hoist Electric Stationary)",
    "Uni-Hoist HMM (Hoist Manual Mobile)",
    "Uni-Hoist HMS (Hoist Manual Stationary)",
    "Uni-Hoist HPM (Hoist Pneumatic Mobile)",
    "Uni-Hoist HPS (Hoist Pneumatic Stationary)",
    "Customised Lift Systems"
  ];

  const specifications = [
    {
      model: 'Uni-Hoist HEM',
      specs: {
        mediumDuty: 'No',
        heavyDuty: 'No',
        rotation: 'No',
        powerSupply: 'Electric (3-phase)',
        lightDuty: '',
        raiseAndLower: '',
        inversion: ''
      }
    },
    {
      model: 'Uni-Hoist HES',
      specs: {
        mediumDuty: 'Yes',
        heavyDuty: 'Yes',
        rotation: 'Yes',
        powerSupply: 'Electric (3-phase)',
        lightDuty: '',
        raiseAndLower: '',
        inversion: ''
      }
    },
    {
      model: 'Uni-Hoist HMM',
      specs: {
        mediumDuty: 'No',
        heavyDuty: 'No',
        rotation: 'No',
        powerSupply: 'None / Manual',
        lightDuty: 'Yes',
        raiseAndLower: 'Yes',
        inversion: 'Yes'
      }
    },
    {
      model: 'Uni-Hoist HMS',
      specs: {
        mediumDuty: 'No',
        heavyDuty: 'No',
        rotation: 'Yes',
        powerSupply: 'None / Manual',
        lightDuty: 'Yes',
        raiseAndLower: '',
        inversion: ''
      }
    }
  ];

  const additionalFields = [
    "Light Duty (SWL ≤ 250kgs)",
    "Raise and Lower (of Load)",
    "Inversion (of Load)",
    "Country of Design",
    "Country of Manufacture"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              <h1 className="text-5xl font-bold mb-6">Hoists (Lift Systems)</h1>
              <div className="w-24 h-1 bg-white/30 mb-6"></div>
              <p className="text-2xl text-blue-100 mb-6">
                Advanced lifting systems designed for pharmaceutical applications
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Engineered for safe and repeatable operation in hygienic environments, featuring precise control and GMP-compliant construction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 flex items-center"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/industries/pharmaceutical/hanningfield/lifting-and-handling"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300 flex items-center"
                >
                  View All Products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm p-4">
                <img
                  src="/images/hanningfield/Uni-Hoist_HES_Image55.jpg"
                  alt="Uni-Hoist Lift System"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">304</div>
                    <div className="text-sm text-gray-600">Steel Grade</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">GMP</div>
                    <div className="text-sm text-gray-600">Design</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">ATEX</div>
                    <div className="text-sm text-gray-600">Available</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Information</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto mb-8"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                  <p className="text-gray-600">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Features & Benefits</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Description - moved to gray background */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Description</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
            </div>
            <div className="prose max-w-none">
              <div>
                <h3 className="text-xl font-semibold mb-4">Design & Operation</h3>
                <p className="mb-4">The lift column can also be used to manoeuvre process machinery such as vacuum conveyors, mills, lump-breakers etc.</p>
                <p>With hundreds of installations worldwide, Hanningfield's stainless steel lift columns are engineered for safe and repeatable operation in hygienic environments. The hoist lift systems utilise either a lead-screw or chain lifting mechanism, with fail-safe features to prevent the load slipping in case of malfunction.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Construction</h3>
                <p>As standard, the Uni-Hoist is manufactured from 304 stainless steel (150 grit) and is designed for use in hygienic GMP environments, with smooth surfaces and all aesthetic welds polished.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Documentation</h3>
                <p>The Uni-Hoist can be supplied with full validation documentation (FS/DS, FAT, SAT, IQ/OQ) and 3.1 mill certificates to EN10204 if required.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Customise Your Hoist</h3>
                <p>The Uni-Hoist can be modified to accommodate any load type (lifting forks, clamp arm, squeeze cone, platform, hook etc.). Hoists can be powered by electric, pneumatic or manual hand-winding. Meanwhile, the hoists can also be stationary (mounted to floor, wall, floor-to-ceiling etc.) or mobile on a trolley with castors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Table - Update the table section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Specifications</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                Comprehensive specifications for all Uni-Hoist models, designed to meet various lifting requirements
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl shadow-xl bg-white">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-primary to-primary-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">Specification</th>
                    {specifications.map((spec) => (
                      <th key={spec.model} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white">
                        {spec.model}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Medium Duty (SWL ≤ 750kgs)</td>
                    {specifications.map((spec) => (
                      <td key={spec.model} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {spec.specs.mediumDuty}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Heavy Duty (SWL ≤ 2000kgs)</td>
                    {specifications.map((spec) => (
                      <td key={spec.model} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {spec.specs.heavyDuty}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rotation (of Base)</td>
                    {specifications.map((spec) => (
                      <td key={spec.model} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {spec.specs.rotation}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Power Supply</td>
                    {specifications.map((spec) => (
                      <td key={spec.model} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {spec.specs.powerSupply}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Light Duty (SWL ≤ 250kgs)</td>
                    {specifications.map((spec) => (
                      <td key={spec.model} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {spec.specs.lightDuty}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Raise and Lower (of Load)</td>
                    {specifications.map((spec) => (
                      <td key={spec.model} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {spec.specs.raiseAndLower}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Inversion (of Load)</td>
                    {specifications.map((spec) => (
                      <td key={spec.model} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {spec.specs.inversion}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Country of Design</td>
                    <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      United Kingdom
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Country of Manufacture</td>
                    <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      United Kingdom
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                    <span>All specifications are subject to change without notice</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-primary/60 mr-2"></div>
                    <span>Custom configurations available upon request</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">304</div>
                <div className="text-sm text-gray-600">Steel Grade</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">GMP</div>
                <div className="text-sm text-gray-600">Design Standard</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">ATEX</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">2000kg</div>
                <div className="text-sm text-gray-600">Max Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Update button container */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Learn More?</h2>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-lg text-blue-100 mb-6">
              Contact us to discuss your specific requirements or request a quote
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition duration-300 inline-flex items-center"
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

export default Hoists; 