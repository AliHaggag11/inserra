import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Shield, Factory, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/plastic.png';

const KiefelFiber = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const machines = [
    {
      title: "NATUREPREP KFP",
      description: "Preparation of natural fibers to produce high-quality packaging",
      image: "/images/kiefel/kfpnature.webp",  
      link: "/industries/packaging/kiefel-fiber/natureprep"
    },
    {
      title: "NATUREFORMER KFT",
      description: "Standard solution for a wide variety of fiber packaging",
      image: "/images/kiefel/fiberkft.webp",  
      link: "/industries/packaging/kiefel-fiber/kft"
    },
    {
      title: "NATUREFORMER KFL",
      description: "Fiber thermoforming system for high-end lids & portion cups",
      image: "/images/kiefel/kflhero.webp",   
      link: "/industries/packaging/kiefel-fiber/kfl"
    }
  ];

  const benefits = [
    {
      title: "Optimal product protection",
      description: "Shock absorbing, resistant, volume reducing",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Sustainable packaging solutions",
      description: "Biodegradable, reuse of waste paper or use of renewable raw materials, low CO2 footprint",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      title: "Refinement",
      description: "Grease and water repellent products by coating or material composition, surface finishing with ink & printing",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Customized product design",
      description: "Various options in product design as well as production of even complex geometries possible",
      icon: <Factory className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Identifier */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link to="/industries" className="hover:text-primary">Industries</Link>
            <span>/</span>
            <Link to="/industries/packaging" className="hover:text-primary">Packaging</Link>
            <span>/</span>
            <Link to="/industries/packaging/kiefel" className="hover:text-primary">Kiefel</Link>
            <span>/</span>
            <span className="text-primary">Fiber</span>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
            >
              <motion.div 
                className="inline-block bg-white p-4 rounded-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <img 
                  src="/images/kiefel/kiefel-technologieslogo.svg"
                  alt="Kiefel Logo" 
                  className="h-16 w-auto"
                />
              </motion.div>
              <span className="text-blue-300 font-semibold mb-4 block tracking-wider">KIEFEL FIBER SOLUTIONS</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Sustainable Fiber
                <span className="text-gray-300 block mt-2">
                  Technology
                </span>
              </h1>
              <div className="w-20 h-1 bg-blue-300/30 mb-6"></div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Innovative fiber-based packaging solutions for a sustainable future, combining 
                eco-friendly materials with cutting-edge technology.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <h3 className="text-blue-300 font-semibold mb-2">Eco-friendly</h3>
                  <p className="text-sm text-blue-100">100% recyclable and biodegradable materials</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <h3 className="text-blue-300 font-semibold mb-2">Versatile</h3>
                  <p className="text-sm text-blue-100">Wide range of packaging applications</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg p-1">
                <div className="w-full h-full bg-gray-800/90 rounded-lg">
                  <img
                    src="/images/kiefel/kiefelfiberhero.webp"
                    alt="Kiefel Fiber Technology"
                    className="w-full h-full object-cover rounded-lg opacity-90"
                  />
                </div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">Sustainable</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-2xl font-bold text-primary">60+</div>
                    <div className="text-sm text-gray-600">Solutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sustainable Solutions Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8">
                Sustainable packaging solutions from natural fibers
              </h2>
              <div className="w-20 h-1 bg-primary/30 mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We put your product <span className="text-primary font-semibold">first</span> and{' '}
                  <span className="font-semibold">rethink product design and functionality, material and composition towards a more sustainable product</span>.
                  Depending on that, we{' '}
                  <span className="font-semibold">adapt the manufacturing process</span> and{' '}
                  <span className="text-primary">optimize machines and tools for your production</span>.
                  Your sustainable product can be recycled easier and together we are closing the loop.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Kiefel is also a partner for brand-owners and converters who want to efficiently produce sustainable packaging such as lids and sip-lids, coffee capsules, bowls, cups, and flower pots, from natural fibers. Kiefel offers the right machine solutions for your needs - thermoforming with natural fibers - Kiefel Fiber Thermoforming.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Revolutionary Fiber Technology
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Our fiber thermoforming technology represents a breakthrough in sustainable 
                packaging, offering eco-friendly alternatives without compromising on quality 
                or performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Eco-Friendly",
                    description: "100% biodegradable solutions"
                  },
                  {
                    title: "Versatile",
                    description: "Multiple packaging applications"
                  },
                  {
                    title: "Efficient",
                    description: "Optimized production process"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Machines Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Fiber Processing Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine, index) => (
              <motion.div
                key={index}
                className="group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={machine.link} className="block h-full">
                  <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                    <div className="relative h-64">
                      <img
                        src={machine.image}
                        alt={machine.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-[#1e293b] mb-3">
                        {machine.title}
                      </h3>
                      <p className="text-gray-600 mb-6 flex-grow">
                        {machine.description}
                      </p>
                      <div className="flex items-center text-primary hover:text-primary-dark transition-colors">
                        Find out more
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold mb-4">Benefits of Fiber-based Packaging</h2>
            <div className="w-20 h-1 bg-white/30 mx-auto mb-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/95 rounded-xl p-8 hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fiber Process Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">
                From Waste Paper to New Fiber Formed Packaging
              </h2>
              <p className="text-xl text-gray-600">
                Kiefel technologies and solutions make it possible
              </p>
              <div className="w-20 h-1 bg-primary/30 mx-auto mt-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Paper and cardboard – dissolved in a water bath – create the{' '}
                  <span className="font-semibold">raw material</span>, known as{' '}
                  <span className="font-semibold">pulp</span>. Through application of pressure most of the 
                  water is removed and the wet basic form is created.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In the next step, the remaining moisture is removed and the basic form is 
                  dried by applying high pressure and temperature. The combination of the 
                  applied heat and pressure results in a very robust material for{' '}
                  <span className="font-semibold">high-quality and dimensional stable packaging</span>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Alternatively,{' '}
                  <span className="font-semibold">virgin fibers (unprocessed cellulose)</span>{' '}
                  can be used to comply with the regulations in the food industry for packaging 
                  solutions made from paper.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/images/kiefel/fiber-process.webp" 
                  alt="Kiefel Process Monitoring"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="mt-24">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                The Kiefel process
              </h2>
              
              <div className="space-y-6">
                {[
                  { step: "Raw Material", desc: "primary or secondary fibers" },
                  { step: "Fiber Preparation", desc: "refining with water to lower fiber concentration" },
                  { step: "Forming", desc: "the majority of the water is extracted from the fiber mixture through the forming tool via negative pressure" },
                  { step: "Pre-Pressing", desc: "continuous extraction of water, preformed product is pre-pressed and further drained with elastic tool" },
                  { step: "Hot-Pressing", desc: "reduction of residual moisture to a minimum through pressure and heat, refinement of contours/engravings, handover to lifting conveyors" },
                  { step: "Quality inspection", desc: "e.g. camera inspection systems (add-on)" },
                  { step: "Automation solutions", desc: "e.g. sleeving, boxing (add-on)" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">{item.step}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16">
                <img 
                  src="/images/kiefel/fiber-process-diagram.webp" 
                  alt="Kiefel Fiber Thermoforming Process"
                  className="w-full max-w-4xl mx-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KiefelFiber; 