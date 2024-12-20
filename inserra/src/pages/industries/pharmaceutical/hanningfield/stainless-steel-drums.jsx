import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Gauge, Settings, Sparkles } from 'lucide-react';

const StainlessSteelDrums = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const keyFeatures = [
    "Data Table",
    {
      headers: ["Part No.", "Nominal Volume (litres)", "Internal Diameter (mm)", "Nominal Height (mm)"],
      rows: [
        ["HPN021823", "5", "196", "200"],
        ["HPN021824", "10", "223", "280"],
        ["HPN021825", "15", "230", "380"],
        ["HPN021826", "20", "298", "300"],
        ["HPN021827", "25", "298", "379"],
        ["HPN019268", "50", "393", "435"],
        ["HPN021828", "75", "393", "630"],
        ["HPN020432", "100", "470", "610"],
        ["HPN021829", "150", "570", "612"],
        ["HPN019530", "200", "570", "800"]
      ],
      footer: {
        material: "Material (Body & Lid): 316L stainless steel",
        lidGasket: "Lid Gasket: FDA approved silicone"
      }
    }
  ];

  const features = [
    {
      title: "Hygienic",
      description: "Designed and constructed for sanitary applications",
      icon: Shield
    },
    {
      title: "5L - 200L Sizes",
      description: "Larger sizes available on request",
      icon: Gauge
    },
    {
      title: "Easy-Clean Design",
      description: "GMP design with crevice-free interior",
      icon: Sparkles
    },
    {
      title: "Quick Release Clamp-Band",
      description: "For easy, contained and convenient use",
      icon: Settings
    }
  ];

  const technicalDetails = [
    "Light and durable construction",
    "180 grit satin polished finish",
    "Supplied with side handles",
    "Crevice-free interior",
    "Optional: add etching detail to your requirements"
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
              <h1 className="text-5xl font-bold mb-6">Stainless Steel Drums</h1>
              <div className="w-24 h-1 bg-white/30 mb-6"></div>
              <p className="text-2xl text-blue-100 mb-6">
                High-quality stainless steel drums for pharmaceutical applications
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Hanningfield supplies a wide range of stainless steel drums for the contained, convenient and reusable storage of high-value powders.
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
                  src="/images/hanningfield/A126-range-460x308.jpg"
                  alt="Stainless Steel Drums"
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
                    <div className="text-2xl font-bold text-primary">200L</div>
                    <div className="text-sm text-gray-600">Max Capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">GMP</div>
                    <div className="text-sm text-gray-600">Design</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Features with Data Table */}
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
            
            {/* Data Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    {keyFeatures[1].headers.map((header, index) => (
                      <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {keyFeatures[1].rows.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-sm text-gray-500">
                      {keyFeatures[1].footer.material}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-sm text-gray-500">
                      {keyFeatures[1].footer.lidGasket}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Features & Benefits</h2>
              <div className="w-24 h-1 bg-primary/30 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
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
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <p className="text-gray-600 mb-6">
                Hanningfield supplies a wide range of stainless steel drums for the contained, convenient and reusable storage of high-value powders. Drums are available in various capacities from 5 litres up to 200 litres (larger sizes available on request).
              </p>

              <div className="space-y-2 mb-6">
                {technicalDetails.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                    <p className="text-gray-600">{detail}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Construction</h3>
              <p className="text-gray-600 mb-6">
                The drums are designed for hygienic applications with a smooth, crevice-free construction. All drums are made from stainless steel, with a FDA compliant lid seal.
              </p>

              <p className="text-gray-600 mb-6">
                To minimise storage footprint, the drums are suitable for stacking.
              </p>

              <h3 className="text-xl font-semibold mb-4">Do you need a more bespoke solution?</h3>
              <p className="text-gray-600 mb-6">
                We have a lot of experience with incorporating custom requirements (e.g. specific brackets, handles, inlet arrangements). Get in touch today to find out how we can help.
              </p>
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

export default StainlessSteelDrums; 