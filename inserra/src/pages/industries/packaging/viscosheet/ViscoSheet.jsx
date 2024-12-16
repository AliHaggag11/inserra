// Required assets (to be replaced with actual images):
// - Logo: /images/viscotec/logo.svg
// - Machine: /images/viscotec/viscosheet-machine.png

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Factory, Recycle, Settings, Zap } from 'lucide-react';

const ViscoSheet = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    { title: "Entire solution – one supplier", icon: <Factory className="w-6 h-6" /> },
    { title: "No virgin material necessary", icon: <Recycle className="w-6 h-6" /> },
    { title: "Immediate effect on recipe change", icon: <Settings className="w-6 h-6" /> },
    { title: "Master control panel – one software", icon: <Settings className="w-6 h-6" /> },
    { title: "autoSTART function", icon: <Zap className="w-6 h-6" /> },
    { title: "viscotec as your partner", icon: <CheckCircle2 className="w-6 h-6" /> }
  ];

  const technicalSpecs = {
    extruders: [
      {
        type: "PET flakes/pellets",
        pretreatment: "I, II, III, IV",
        mainOutputs: {
          S125: "1000",
          S145: "1300",
          S165: "1600",
          S215: "2200"
        },
        coOutputs: {
          S65: "200",
          S85: "400",
          S105: "650"
        },
        thickness: "150-1800"
      },
      {
        type: "PP, PS, HIPS**",
        pretreatment: "I",
        mainOutputs: {
          S125: "700",
          S145: "900",
          S165: "1100",
          S215: "1500"
        },
        coOutputs: {
          S65: "140",
          S85: "300",
          S105: "400"
        },
        thickness: "150-1800"
      }
    ],
    calendarSpecs: [
      {
        model: "CAL 1200",
        cooledWidth: "1200",
        netSheet: "600-1050",
        rollstackGap: "950-1600",
        rollstackGapHC: {
          pet: "1250-2100",
          ppPsHips: "900-1500"
        }
      },
      {
        model: "CAL 1600",
        cooledWidth: "1600",
        netSheet: "900-1450",
        rollstackGap: "1400-2100",
        rollstackGapHC: {
          pet: "1800-2800",
          ppPsHips: "1300-2000"
        }
      },
      {
        model: "CAL 2000",
        cooledWidth: "2000",
        netSheet: "1300-1850",
        rollstackGap: "2000-2700",
        rollstackGapHC: {
          pet: "2500-3500",
          ppPsHips: "1800-2500"
        }
      },
      {
        model: "CAL 2400",
        cooledWidth: "2400",
        netSheet: "1700-2250",
        rollstackGap: "2500-3300",
        rollstackGapHC: {
          pet: "3100-4200",
          ppPsHips: "2350-3100"
        }
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
            <span className="text-primary">viscoSHEET</span>
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
              <h1 className="text-5xl font-bold mb-6">viscoSHEET</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Quality and flexibility without compromise. Up to 100% rPET and inhouse flakes processable 
                at guaranteed iV-Levels for direct food contact.
              </p>
              <p className="text-lg text-blue-100 mb-8">
                viscoSHEET ensures outstanding flexibility in production with lowest energy consumption. 
                Up to 100% rPET, in-house waste, and virgin can be processed at guaranteed iV levels.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <a 
                  href="#" 
                  className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle download product sheet
                  }}
                >
                  Download Product Sheet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a> */}
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
                  src="/images/viscotec/viscoSHEET-hero.png"
                  alt="viscoSHEET Machine"
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
                    <div className="text-2xl font-bold text-primary">iV</div>
                    <div className="text-sm text-gray-600">Level Control</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-600">Production</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Diagram Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Process Overview</h2>
            <p className="text-gray-600">Complete viscoSHEET system layout</p>
          </motion.div>

          {/* Diagram */}
          <div className="mb-8">
            <img
              src="/images/viscotec/viscosheet-diagram.png"
              alt="viscoSHEET Process Diagram"
              className="w-full max-w-6xl mx-auto object-contain"
            />
          </div>

          {/* Diagram Key */}
          <div className="max-w-5xl mx-auto">
            {/* Pre-treatment Options */}
            <div className="mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg">
                  <span className="font-bold whitespace-nowrap">I</span>
                  <span>unloading</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg">
                  <span className="font-bold whitespace-nowrap">II</span>
                  <span>crystallizer</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg">
                  <span className="font-bold whitespace-nowrap">III</span>
                  <span>deCON</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg">
                  <span className="font-bold whitespace-nowrap">IV</span>
                  <span>viscoSTAR</span>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {[
                { num: 1, text: "gravimetric dosing" },
                { num: 2, text: "main extruder" },
                { num: 3, text: "backflush screen changer" },
                { num: 4, text: "iVON" },
                { num: 5, text: "automatic die" },
                { num: 6, text: "auto dust seperation" },
                { num: 7, text: "central vacuum for feeding" },
                { num: 8, text: "vacuum pumps" },
                { num: 9, text: "master control panel" },
                { num: 10, text: "roll stack" },
                { num: 11, text: "thickness measurement" },
                { num: 12, text: "edge trim cutting" },
                { num: 13, text: "fully automatic winder" }
              ].map(item => (
                <div key={item.num} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white text-sm">
                    {item.num}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Optional Components */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 px-4">Optional:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {[
                  { letter: "A", text: "co extruder" },
                  { letter: "B", text: "PE lamination" },
                  { letter: "C", text: "edge trim granulator" },
                  { letter: "D", text: "coating unit" },
                  { letter: "E", text: "one man operation" }
                ].map(item => (
                  <div key={item.letter} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-400 text-white text-sm">
                      {item.letter}
                    </span>
                    <span className="text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">viscoSHEET Benefits</h2>
            <p className="text-gray-600">Comprehensive solutions for your rPET processing needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Technical Specifications</h2>
            <p className="text-gray-600">Comprehensive performance data for different configurations</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Extruder Outputs Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">EXTRUDER</th>
                      <th className="px-4 py-3 text-left">Pretreatment options</th>
                      <th className="px-4 py-3 text-center" colSpan="4">Main extruder outputs¹ [kg/h]</th>
                      <th className="px-4 py-3 text-center" colSpan="3">Co-extruder outputs¹ [kg/h]</th>
                      <th className="px-4 py-3 text-left">Thickness range [μm]</th>
                    </tr>
                    <tr>
                      <th colSpan="2"></th>
                      <th className="px-2 py-2">S125</th>
                      <th className="px-2 py-2">S145</th>
                      <th className="px-2 py-2">S165</th>
                      <th className="px-2 py-2">S215</th>
                      <th className="px-2 py-2">S65</th>
                      <th className="px-2 py-2">S85</th>
                      <th className="px-2 py-2">S105</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {technicalSpecs.extruders.map((spec, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3">{spec.type}</td>
                        <td className="px-4 py-3">{spec.pretreatment}</td>
                        <td className="px-4 py-3 text-center">{spec.mainOutputs.S125}</td>
                        <td className="px-4 py-3 text-center">{spec.mainOutputs.S145}</td>
                        <td className="px-4 py-3 text-center">{spec.mainOutputs.S165}</td>
                        <td className="px-4 py-3 text-center">{spec.mainOutputs.S215}</td>
                        <td className="px-4 py-3 text-center">{spec.coOutputs.S65}</td>
                        <td className="px-4 py-3 text-center">{spec.coOutputs.S85}</td>
                        <td className="px-4 py-3 text-center">{spec.coOutputs.S105}</td>
                        <td className="px-4 py-3">{spec.thickness}</td>
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
                      <th className="px-4 py-3 text-left">CALENDAR</th>
                      <th className="px-4 py-3 text-left">cooled width [mm]</th>
                      <th className="px-4 py-3 text-left">possible net sheet [mm]</th>
                      <th className="px-4 py-3 text-left">rollstack vairo GAP [kg/h]</th>
                      <th className="px-4 py-3 text-center" colSpan="2">rollstack vairo GAP High Capacity [kg/h]</th>
                    </tr>
                    <tr>
                      <th colSpan="3"></th>
                      <th className="px-2 py-2">PET (150-1500μm)²</th>
                      <th className="px-2 py-2">PET (150-1500μm)</th>
                      <th className="px-2 py-2">PP, PS, HIPS (400-1500μm)³</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {technicalSpecs.calendarSpecs.map((spec, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3">{spec.model}</td>
                        <td className="px-4 py-3">{spec.cooledWidth}</td>
                        <td className="px-4 py-3">{spec.netSheet}</td>
                        <td className="px-4 py-3">{spec.rollstackGap}</td>
                        <td className="px-4 py-3">{spec.rollstackGapHC.pet}</td>
                        <td className="px-4 py-3">{spec.rollstackGapHC.ppPsHips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 text-sm text-gray-600">
                <p>¹ output rates depending on input material</p>
                <p>² with max. 75m/min</p>
                <p>³ with max. 60m/min</p>
                <p>Above table represents general data and average values. We reserve the right of technical modifications.</p>
              </div>
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
              Contact us to learn more about how viscoSHEET can revolutionize your rPET processing
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

export default ViscoSheet; 