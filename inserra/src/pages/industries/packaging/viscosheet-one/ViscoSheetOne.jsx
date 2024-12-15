// Required assets (to be replaced with actual images):
// - Logo: /images/viscotec/logo.svg
// - Machine: /images/viscotec/viscosheet-one-machine.png

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Factory, Settings, Cpu, Layout } from 'lucide-react';

const ViscoSheetOne = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    { title: "One extruder, maximum flexibility", icon: <Factory className="w-6 h-6" /> },
    { title: "One platform", icon: <Layout className="w-6 h-6" /> },
    { title: "One master control panel", icon: <Cpu className="w-6 h-6" /> },
    { title: "One supplier for an entire solution", icon: <Factory className="w-6 h-6" /> },
    { title: "One partner: viscotec", icon: <CheckCircle2 className="w-6 h-6" /> }
  ];

  const technicalSpecs = {
    extruders: [
      {
        type: "PET flakes/pellets",
        pretreatment: "I, II, III",
        s85: "400",
        s120: "-",
        s125: "800",
        thickness: "200-1200"
      },
      {
        type: "PET pellets",
        pretreatment: "II, III",
        s85: "-",
        s120: "700",
        s125: "-",
        thickness: "200-1200"
      }
    ],
    calendarSpecs: [
      {
        model: "CAL 1000",
        cooledWidth: "1000",
        netSheet: "500-850",
        capacity: "650-800"
      }
    ]
  };

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
            <Link to="/industries/packaging/viscotec" className="hover:text-primary">Viscotec</Link>
            <span>/</span>
            <span className="text-primary">viscoSHEETone</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              <motion.img 
                src="/images/viscotec/logo.svg"
                alt="Viscotec Logo" 
                className="h-12 w-auto mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              <h1 className="text-5xl font-bold mb-6">viscoSHEET<sup>one</sup></h1>
              <p className="text-2xl text-blue-100 mb-6">
                One solution setting the standard.
              </p>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                rPET mono layer sheet without compromise. Up to 100% rPET, inhouse flakes and pellets 
                processable at guaranteed iV levels for direct food contact.
              </p>
              <p className="text-lg text-blue-100 mb-8">
                The smart decontamination module designed to process different types of material even at 
                the same time, e.g. PCR bottle flakes, PCR pellets or in-house skeleton waste in a 
                multi-material mode.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle download product sheet
                  }}
                >
                  Download Product Sheet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300 flex items-center"
                >
                  Contact Sales
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
                  src="https://placehold.co/800x450/e2e8f0/475569?text=viscoSHEETone+Machine&font=roboto"
                  alt="viscoSHEETone Machine"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">rPET Processing</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">ONE</div>
                    <div className="text-sm text-gray-600">Platform</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">iV</div>
                    <div className="text-sm text-gray-600">Control</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Description */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-6">
                The material is pre-dried, de-dusted, and crystallized in the preheater and subsequently 
                conveyed into the reactor vessel, where – under high vacuum during the dynavac treatment – 
                the material is perfectly dried and decontaminated. This is food grade without compromise.
              </p>
              <p className="text-gray-600">
                The gravimetric dosing unit after the decontamination process guarantees super-fast recipe 
                changes during the production process to ensure maximum flexibility. High operability, ease 
                of handling due to a high level of automation, and highest safety standards represent a 
                future proof entire solution: food grade without compromise and dedicated iV values in the 
                final product.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">viscoSHEET<sup>one</sup> Benefits</h2>
            <p className="text-gray-600">One complete solution for your rPET processing needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Technical Data</h2>
            <p className="text-gray-600">Detailed specifications and performance data</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Extruder Outputs Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Extruder</th>
                      <th className="px-6 py-4 text-left">Pretreatment options</th>
                      <th className="px-6 py-4 text-left">S85<sup>one</sup></th>
                      <th className="px-6 py-4 text-left">S120<sup>nonVented</sup></th>
                      <th className="px-6 py-4 text-left">S125<sup>one</sup></th>
                      <th className="px-6 py-4 text-left">Thickness range [μm]</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {technicalSpecs.extruders.map((spec, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4">{spec.type}</td>
                        <td className="px-6 py-4">{spec.pretreatment}</td>
                        <td className="px-6 py-4">{spec.s85}</td>
                        <td className="px-6 py-4">{spec.s120}</td>
                        <td className="px-6 py-4">{spec.s125}</td>
                        <td className="px-6 py-4">{spec.thickness}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calendar Specifications Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Calendar</th>
                      <th className="px-6 py-4 text-left">Cooled width [mm]</th>
                      <th className="px-6 py-4 text-left">Possible net sheet [mm]</th>
                      <th className="px-6 py-4 text-left">rollstack varioGAP [kg/h]</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {technicalSpecs.calendarSpecs.map((spec, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4">{spec.model}</td>
                        <td className="px-6 py-4">{spec.cooledWidth}</td>
                        <td className="px-6 py-4">{spec.netSheet}</td>
                        <td className="px-6 py-4">{spec.capacity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>¹ output rates depending on input material</p>
              <p>² with max. 45m/min</p>
              <p className="mt-2">Above table represents general data and average values. We reserve the right of technical modifications.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Production?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to learn more about how viscoSHEET<sup>one</sup> can revolutionize your rPET processing
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

export default ViscoSheetOne; 