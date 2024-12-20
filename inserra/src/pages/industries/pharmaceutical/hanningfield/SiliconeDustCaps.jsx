import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Shield, Gauge, Wrench } from 'lucide-react';

const SiliconeDustCaps = () => {
  const keyInformation = [
    "The Hanningfield Uni-Cap+ is a flexible silicone rubber seal which provides a cost-effective method for the dust-tight transfer or containment of powders",
    "The Uni-Cap+ is a fully transparent silicone dust cap. The enhanced design offers excellent visibility combined with stringent hygienic standards"
  ];

  const features = [
    {
      title: "FDA Compliant",
      description: "Manufactured from silicone (FDA CFR 177.2600)",
      icon: Shield
    },
    {
      title: "Flexible Design",
      description: "Compatible with Tri-Clover connections and IBC manways",
      icon: Gauge
    },
    {
      title: "Easy Installation",
      description: "Simple fitting and retrofitting to any process",
      icon: Wrench
    }
  ];

  const specifications = [
    {
      model: "Uni-Cap 2.5\" (60mm)",
      diameter: "60mm/2.5in",
      wallThickness: "8mm",
      materialHardness: "60 shore",
      partNumber: "HPN005302",
      height: "33mm",
      maxSpigotSize: "50mm",
      mountingRingOutsideDiameter: "60mm",
      mountingRingHeight: "50mm",
      mountingRingWallThickness: "2mm",
      mountingRingPartNumber: "HPN022271"
    },
    {
      model: "Uni-Cap 5\" (127mm)",
      diameter: "127mm/5in",
      wallThickness: "10mm",
      materialHardness: "60 shore",
      partNumber: "HPN005304",
      height: "35mm",
      maxSpigotSize: "100mm",
      mountingRingOutsideDiameter: "127mm",
      mountingRingHeight: "50mm",
      mountingRingWallThickness: "2mm",
      mountingRingPartNumber: "HPN022268"
    },
    {
      model: "Uni-Cap 8\" (200mm)",
      diameter: "200mm/8in",
      wallThickness: "10mm",
      materialHardness: "60 shore",
      partNumber: "HPN005306",
      height: "40mm",
      maxSpigotSize: "150mm",
      mountingRingOutsideDiameter: "204mm",
      mountingRingHeight: "50mm",
      mountingRingWallThickness: "2mm",
      mountingRingPartNumber: "HPN016724"
    },
    {
      model: "Uni-Cap 10\" (250mm)",
      diameter: "250mm/10in",
      wallThickness: "10mm",
      materialHardness: "60 shore",
      partNumber: "HPN005311",
      height: "36mm",
      maxSpigotSize: "200mm",
      mountingRingOutsideDiameter: "250mm",
      mountingRingHeight: "50mm",
      mountingRingWallThickness: "2mm",
      mountingRingPartNumber: "HPN020182"
    },
    {
      model: "Uni-Cap 12\" (315mm)",
      diameter: "315mm/12in",
      wallThickness: "9.5mm",
      materialHardness: "60 shore",
      partNumber: "HPN005314",
      height: "32mm",
      maxSpigotSize: "265mm",
      mountingRingOutsideDiameter: "315mm",
      mountingRingHeight: "50mm",
      mountingRingWallThickness: "2mm",
      mountingRingPartNumber: "HPN020119"
    },
    {
      model: "Uni-Cap 16\" (400mm)",
      diameter: "400mm/16in",
      wallThickness: "9.5mm",
      materialHardness: "60 shore",
      partNumber: "HPN005317",
      height: "32mm",
      maxSpigotSize: "350mm",
      mountingRingOutsideDiameter: "400mm",
      mountingRingHeight: "50mm",
      mountingRingWallThickness: "2mm",
      mountingRingPartNumber: "HPN020116"
    },
    {
      model: "Uni-Cap+ 6 T/C",
      diameter: "152.4mm/6in",
      wallThickness: "12mm",
      materialHardness: "70, A shore",
      partNumber: "HPN026941",
      height: "32mm",
      maxSpigotSize: "100mm",
      mountingRingOutsideDiameter: "-",
      mountingRingHeight: "-",
      mountingRingWallThickness: "-",
      mountingRingPartNumber: "-"
    },
    {
      model: "Uni-Cap+ 8 T/C",
      diameter: "203.2mm/8in",
      wallThickness: "10mm",
      materialHardness: "70, A shore",
      partNumber: "HPN030172",
      height: "32mm",
      maxSpigotSize: "150mm",
      mountingRingOutsideDiameter: "-",
      mountingRingHeight: "-",
      mountingRingWallThickness: "-",
      mountingRingPartNumber: "-"
    },
    {
      model: "Uni-Cap+ 305mm",
      diameter: "305mm/12in",
      wallThickness: "11mm",
      materialHardness: "70, A shore",
      partNumber: "HPN025132",
      height: "32mm",
      maxSpigotSize: "265mm",
      mountingRingOutsideDiameter: "-",
      mountingRingHeight: "-",
      mountingRingWallThickness: "-",
      mountingRingPartNumber: "-"
    },
    {
      model: "Uni-Cap+ 460mm",
      diameter: "460mm/18.1in",
      wallThickness: "10.5mm",
      materialHardness: "70, A shore",
      partNumber: "HPN025126",
      height: "32mm",
      maxSpigotSize: "410mm",
      mountingRingOutsideDiameter: "-",
      mountingRingHeight: "-",
      mountingRingWallThickness: "-",
      mountingRingPartNumber: "-"
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
              <h1 className="text-5xl font-bold mb-6">Silicone Dust Caps</h1>
              <div className="w-24 h-1 bg-white/30 mb-6"></div>
              <p className="text-2xl text-blue-100 mb-6">
                Flexible dust-tight sealing solutions for powder handling
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                The Uni-Cap+ series provides cost-effective and hygienic powder containment
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
                  src="/images/hanningfield/dustcap.jpg"
                  alt="Silicone Dust Cap"
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
                    <div className="text-2xl font-bold text-primary">USP VI</div>
                    <div className="text-sm text-gray-600">Class</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">TSE/BSE</div>
                    <div className="text-sm text-gray-600">Free</div>
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
                A dust-tight seal can be made with the penetrating spigot by cutting a hole in the centre of the cap. This enables the contained charging of mills, tablet presses, vessels, drums/IBCs and almost any other form of process equipment where charging / discharging can produce dust. After the charging process is complete, the cap (with hole) can be replaced with a cap (without hole) to seal off the inlet.
              </p>
              <h3 className="text-xl font-semibold mb-4">Uni-Cap+ Sizes and Construction</h3>
              <p className="mb-6">
                Available in 6 T/C, 8 T/C, 305mm, 460mm, the Uni-Cap+ is designed to be compatible with Tri Clover connections and IBC manways. This cap can also be easily fitted or retro-fitted to any process.
              </p>
              <p className="mb-6">
                As standard, the dust caps are manufactured from silicone. This is transparent for excellent process visibility (to see powder flow or container fill level).
              </p>
              <p className="mb-6">
                The silicone is platinum-cured and is compliant to FDA 177.2600. Classified as USP Class VI, the Uni-Cap+ is TSE/BSE Free, ADI Free and Phthalates Free.
              </p>
              <p>
                We can also emboss the manufacture Batch ID onto silicone cap for full traceability. The Uni-Cap+ is made in Great Britain.
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wall Thickness</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Height</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max. Spigot Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {specifications.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{spec.model}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.diameter}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.wallThickness}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.height}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.maxSpigotSize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <p>Standard Material: Translucent Silicone (FDA 21 CFR 177.2600)</p>
              <p>Mounting Ring Standard Material: 316L stainless steel (1.4404)</p>
              <p>Material Hardness: 60 shore</p>
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
              Contact us to discuss your specific dust cap requirements or request a quote
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

export default SiliconeDustCaps; 