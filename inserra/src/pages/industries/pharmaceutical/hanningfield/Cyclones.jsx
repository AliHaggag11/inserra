import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Shield, Cog, Settings, Wrench } from 'lucide-react';

const Cyclones = () => {
  const keyInformation = [
    "High efficiency design capturing 90 - 99.9%",
    "Prevents blinding and replacement of expensive filters in central dust extraction system or vacuum cleaner",
    "Improved batch reconciliation and yields",
    "Almost zero maintenance costs with no moving parts or filters",
    "Recovered powder can be reintroduced - minimising material loss and saving money"
  ];

  const features = [
    {
      title: "Stainless Steel Construction",
      description: "316L contact parts with FDA compliant seals",
      icon: Shield
    },
    {
      title: "Optional Manifold",
      description: "For collecting waste powder from deduster or polishing machine",
      icon: Settings
    },
    {
      title: "Easy Clean",
      description: "Assembled using Tri-Clamps for fast and easy dismantling for cleaning",
      icon: Wrench
    }
  ];

  const specifications = [
    {
      model: "Uni-Dust Type 2",
      weight: "2 kgs (4.4 lbs)",
      airflow: "25-50 m3/hr (15-30 CFM)",
      bodyDiameter: "50.8mm (2\" T/C)",
      inletOutlet: "25.4mm (1\" T/C)",
      discharge: "50.8mm (2\" T/C)"
    },
    {
      model: "Uni-Dust Type 5",
      weight: "12 kgs (26 lbs)",
      airflow: "100-150 m3/hr (59-88 CFM)",
      bodyDiameter: "101.6mm (4\" T/C)",
      inletOutlet: "50.8mm (2\" T/C)",
      discharge: "63.5mm (2½\" T/C)"
    },
    {
      model: "Uni-Dust Type 10",
      weight: "18 kgs (40 lbs)",
      airflow: "150-250 m3/hr (88-147 CFM)",
      bodyDiameter: "139.7mm (5½\" T/C)",
      inletOutlet: "63.5mm (2½\" T/C)",
      discharge: "101.6mm (4\" T/C)"
    },
    {
      model: "Uni-Dust Type 20",
      weight: "22 kgs (50 lbs)",
      airflow: "250-300 m3/hr (147-177 CFM)",
      bodyDiameter: "152.4mm (6\" T/C)",
      inletOutlet: "63.5mm (2½\" T/C)",
      discharge: "101.6mm (4\" T/C)"
    },
    {
      model: "Uni-Dust Type 30",
      weight: "34 kgs (75 lbs)",
      airflow: "300-400m3/hr (177-235 CFM)",
      bodyDiameter: "168.2mm (6⅝\" T/C)",
      inletOutlet: "76.2mm (3\" T/C)",
      discharge: "101.6mm (4\" T/C)"
    },
    {
      model: "Uni-Dust Type 40",
      weight: "40 kgs (90 lbs)",
      airflow: "400-600m3/hr (235-350 CFM)",
      bodyDiameter: "203.2mm (8\" T/C)",
      inletOutlet: "101.6mm (4\" T/C)",
      discharge: "139.7mm (5½\" T/C)"
    },
    {
      model: "Uni-Dust Type 50",
      weight: "52 kgs (115 lbs)",
      airflow: "600-800 m3/hr (350-470 CFM)",
      bodyDiameter: "254mm (10\" T/C)",
      inletOutlet: "127mm (5\" T/C)",
      discharge: "168.2mm (6⅝\" T/C)"
    },
    {
      model: "Uni-Dust Type 60",
      weight: "68 kgs (150 lbs)",
      airflow: "800-1200 m3/hr (470-700 CFM)",
      bodyDiameter: "304.8mm (12\" T/C)",
      inletOutlet: "139.7mm (5½\" T/C)",
      discharge: "203.2mm (8\" T/C)"
    }
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl font-bold mb-6">Uni-Dust Cyclones</h1>
              <div className="w-24 h-1 bg-white/30 mb-6"></div>
              <p className="text-2xl text-blue-100 mb-6">
                High-efficiency powder recovery cyclones for pharmaceutical applications
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Advanced cyclone systems designed for efficient powder recovery and dust control in pharmaceutical processes.
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
                  to="/industries/pharmaceutical/hanningfield/containment-and-control"
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
                  src="/images/hanningfield/Pharmaceutical_Cyclone_Compression_Machine-460x308.jpg"
                  alt="Uni-Dust Cyclone"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">316L</div>
                    <div className="text-sm text-gray-600">Steel Grade</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">GMP</div>
                    <div className="text-sm text-gray-600">Design</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">ATEX</div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Information Section */}
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
              {keyInformation.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                  <p className="text-gray-600">{info}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
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

      {/* Technical Description */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Description</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <h3 className="text-xl font-semibold mb-4">Design & Operation</h3>
              <p className="mb-6">
                The Hanningfield Uni-Dust cyclone is specifically designed for the recovery of waste powder from pharmaceutical OSD processes such as compression and encapsulation, typically capturing between 90 - 99.9% of waste powder. We have successfully installed our cyclone to Fette, Manesty, Korsch, Zanasi, Bosch, Kilian and numerous other process machines. Where required, the cyclone can incorporate a manifold for connection to ancillary equipment such as tablet deduster or capsule polishers.
              </p>
              <p className="mb-6">
                The Uni-Dust cyclone is proven to be equally effective in numerous other applications including sachet filling, spray drying, granulation and any other process where excess dust is extracted. The captured waste material can be used for batch loss reconciliation, or even reintroduced to the process (where protocol permits).
              </p>
              <h3 className="text-xl font-semibold mb-4">Construction</h3>
              <p>
                The filterless Uni-Dust series of powder recovery cyclones (Type 5, Type 10, Type 20, Type 30, Type 40, Type 50, Type 60) features a crevice-free, GMP stainless steel construction, enabling the unit to be mounted inside the process room (the cyclone can be supplied with adjustable trolley, wall-bracket, floor pedestal or free-standing). The Uni-Dust is assembled using Tri-Clamps for fast and easy dismantling for cleaning and has no moving parts – therefore generating no mechanical noise. All models of Uni-Dust cyclone are suitable for use in Zone 0/20 ATEX environments both internally and externally.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Table */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Specifications</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                Comprehensive specifications for all Uni-Dust models, designed to meet various powder recovery requirements
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Airflow Range</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Body Diameter</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inlet/Outlet</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discharge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {specifications.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{spec.model}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.weight}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.airflow}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.bodyDiameter}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.inletOutlet}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.discharge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">316L</div>
                <div className="text-sm text-gray-600">Contact Parts</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">GMP</div>
                <div className="text-sm text-gray-600">Design Standard</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">ATEX</div>
                <div className="text-sm text-gray-600">Zone 0/20</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-1">0 dB</div>
                <div className="text-sm text-gray-600">Noise Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Learn More?</h2>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-lg text-blue-100 mb-6">
              Contact us to discuss your specific cyclone requirements or request a quote
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

export default Cyclones; 