import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Shield, Gauge, Wrench } from 'lucide-react';

const SiliconeConnectorSleeves = () => {
  const keyInformation = [
    "The Hanningfield Uni-Connect range of silicone connector sleeves are designed to provide quick and hygienic connection for dust-tight powder transfer between interfaces"
  ];

  const features = [
    {
      title: "FDA Compliant",
      description: "Manufactured from translucent silicone (FDA CFR 177.2600)",
      icon: Shield
    },
    {
      title: "Flexible Design",
      description: "Compatible with standard Tri-Clover profile",
      icon: Gauge
    },
    {
      title: "Temperature Range",
      description: "-20°C to +140°C operating temperature",
      icon: Wrench
    }
  ];

  const specifications = [
    {
      model: "Uni-Connect 2\"",
      diameter: "2in",
      length: "40mm",
      wallThickness: "1.6mm",
      materialHardness: "70, A shore",
      maxPressure: "-",
      minOperatingTemp: "-20°C / -50°F",
      maxOperatingTemp: "+140°C / +289°F",
      partNumber: "HPN017208",
      internalRingPartNumber: "HPN017207",
      internalRingMaterial: "304 stainless steel (1.4301)"
    },
    {
      model: "Uni-Connect 4\"",
      diameter: "4in",
      length: "40mm",
      wallThickness: "2.4mm",
      materialHardness: "70, A shore",
      maxPressure: "-",
      minOperatingTemp: "-20°C / -50°F",
      maxOperatingTemp: "+140°C / +289°F",
      partNumber: "HPN007324",
      internalRingPartNumber: "HPN017180",
      internalRingMaterial: "304 stainless steel (1.4301)"
    },
    {
      model: "Uni-Connect 6\"",
      diameter: "6in",
      length: "50mm",
      wallThickness: "2.0mm",
      materialHardness: "70, A shore",
      maxPressure: "-",
      minOperatingTemp: "-20°C / -50°F",
      maxOperatingTemp: "+140°C / +289°F",
      partNumber: "HPN007323",
      internalRingPartNumber: "HPN017202",
      internalRingMaterial: "304 stainless steel (1.4301)"
    },
    {
      model: "Uni-Connect 8\"",
      diameter: "8in",
      length: "50mm",
      wallThickness: "2.0mm",
      materialHardness: "70, A shore",
      maxPressure: "-",
      minOperatingTemp: "-20°C / -50°F",
      maxOperatingTemp: "+140°C / +289°F",
      partNumber: "HPN007321",
      internalRingPartNumber: "HPN017203",
      internalRingMaterial: "304 stainless steel (1.4301)"
    },
    {
      model: "Uni-Connect 10\"",
      diameter: "10in",
      length: "60mm",
      wallThickness: "2.0mm",
      materialHardness: "70, A shore",
      maxPressure: "-",
      minOperatingTemp: "-20°C / -50°F",
      maxOperatingTemp: "+140°C / +289°F",
      partNumber: "HPN007327",
      internalRingPartNumber: "HPN017204",
      internalRingMaterial: "304 stainless steel (1.4301)"
    },
    {
      model: "Uni-Connect 12\"",
      diameter: "12in",
      length: "70mm",
      wallThickness: "2.0mm",
      materialHardness: "70, A shore",
      maxPressure: "-",
      minOperatingTemp: "-20°C / -50°F",
      maxOperatingTemp: "+140°C / +289°F",
      partNumber: "HPN007325",
      internalRingPartNumber: "HPN017206",
      internalRingMaterial: "304 stainless steel (1.4301)"
    },
    {
      model: "Uni-Connect Lite",
      diameter: "4in, 6in, 8in & 10in",
      length: "-",
      wallThickness: "3mm",
      materialHardness: "-",
      maxPressure: "~0.5barg",
      minOperatingTemp: "-",
      maxOperatingTemp: "-",
      partNumber: "-",
      internalRingPartNumber: "-",
      internalRingMaterial: "-"
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
              <h1 className="text-5xl font-bold mb-6">Silicone Connector Sleeves</h1>
              <div className="w-24 h-1 bg-white/30 mb-6"></div>
              <p className="text-2xl text-blue-100 mb-6">
                Quick and hygienic connections for powder transfer
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                The Uni-Connect series provides flexible, dust-tight connections between process interfaces
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
                  src="/images/hanningfield/connectorsleeve.jpg"
                  alt="Silicone Connector Sleeve"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">FDA</div>
                    <div className="text-sm text-gray-600">Compliant</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">304</div>
                    <div className="text-sm text-gray-600">Steel Ring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">140°C</div>
                    <div className="text-sm text-gray-600">Max Temp</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                The Hanningfield Uni-Connect range of silicone connector sleeves are designed to provide quick and hygienic connection for dust-tight powder transfer between interfaces, which can easily compensate for misalignment between process machines.
              </p>
              <h3 className="text-xl font-semibold mb-4">Sizes</h3>
              <p className="mb-6">
                Available in 2", 4", 6", 8", 10" and 12", the Uni-Connect is designed to be compatible with a standard Tri-Clover profile.
              </p>
              <h3 className="text-xl font-semibold mb-4">Construction</h3>
              <p>
                As standard, the sleeves are manufactured from translucent silicone (FDA CFR 177.2600), but we can accommodate specific requirements for material (e.g. EPDM) or colour (e.g. blue) in dedicated batches to satisfy your application. We are also able to introduce new tooling for unlisted sizes upon request.
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
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diameter</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Length</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wall Thickness</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material Hardness</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Part Number</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {specifications.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{spec.model}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.diameter}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.length}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.wallThickness}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.materialHardness}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.partNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <p>Standard Material: Translucent Silicone (FDA 21 CFR 177.2600)</p>
              <p>Internal Ring Material: 304 stainless steel (1.4301)</p>
              <p>Operating Temperature Range: -20°C / -50°F to +140°C / +289°F</p>
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
              Contact us to discuss your specific connector sleeve requirements or request a quote
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

export default SiliconeConnectorSleeves; 