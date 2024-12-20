import React from 'react';
import { motion } from 'framer-motion';
import { Package, Recycle, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Viscotec = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const products = [
    {
      title: "viscoSHEET",
      description: "rPET sheet extrusion line capable of processing up to 100% rPET and in-house flakes at guaranteed iV levels for direct food contact.",
      image: "/images/viscotec/viscoSHEET-hero.png",
      link: "/industries/packaging/viscotec/viscosheet"
    },
    {
      title: "viscoSHEETone",
      description: "rPET mono layer sheet extrusion line without compromise. Processes up to 100% rPET and in-house flakes at guaranteed iV levels.",
      image: "/images/viscotec/vsh1hero.png",
      link: "/industries/packaging/viscotec/viscosheet-one"
    },
    {
      title: "viscoSTAR",
      description: "Solid State Polycondensation plant for iV increase and decontamination of polyester pellets and/or flakes.",
      image: "/images/viscotec/vstarhero.png",
      link: "/industries/packaging/viscotec/viscostar"
    },
    {
      title: "deCON | deCON iV+",
      description: "Decontamination dryer for production of food grade, iV increased flakes or skeleton waste directly in front of production extruder.",
      image: "/images/viscotec/deconhero.png",
      link: "/industries/packaging/viscotec/decon"
    },
    {
      title: "viscoZERO",
      description: "Melt phase decontamination reactor to produce recyclate according to food grade standards.",
      image: "/images/viscotec/v0hero.jpg",
      link: "/industries/packaging/viscotec/viscozero"
    },
    {
      title: "rPET100",
      description: "Heat resistant, fully recyclable sheet material for sustainable packaging solutions.",
      image: "/images/viscotec/rpethero.png",
      link: "/industries/packaging/viscotec/rpet100"
    },
    {
      title: "crystallizer",
      description: "The module for crystallization, drying and dedusting of rPET flakes and pellets.",
      image: "/images/viscotec/crysthero.png",
      link: "/industries/packaging/viscotec/crystallizer"
    },
    {
      title: "vacuum system",
      description: "The compact and low-maintenance vacuum module for rPET processing.",
      image: "/images/viscotec/vachero.png",
      link: "/industries/packaging/viscotec/vacuum-system"
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
            <span className="text-primary">Viscotec</span>
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
              <motion.img 
                src="/images/viscotec/logo.svg"
                alt="Viscotec Logo" 
                className="h-12 w-auto mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              <span className="text-blue-300 font-semibold mb-4 block tracking-wider">VISCOTEC SOLUTIONS</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Food Grade rPET
                <span className="text-blue-300 block mt-2">
                  Processing Solutions
                </span>
              </h1>
              <div className="w-20 h-1 bg-blue-300/30 mb-6"></div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Leading solutions for rPET processing and sheet extrusion, delivering food-grade quality 
                with maximum efficiency and sustainability.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="text-primary font-semibold mb-2">Sustainability</h3>
                  <p className="text-sm text-gray-600">100% recyclable solutions for circular economy</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="text-primary font-semibold mb-2">Food Grade</h3>
                  <p className="text-sm text-gray-600">Certified food-safe processing technology</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-50 p-4">
                <img
                  src="/images/viscotec/hero-machines.png"
                  alt="Viscotec rPET Processing Solutions"
                  className="w-full h-full object-contain rounded-lg bg-gray-50"
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
                    <div className="text-2xl font-bold text-primary">FDA - EFSA</div>
                    <div className="text-sm text-gray-600">Approved</div>
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
                Leading the Way in Food-Grade rPET Processing
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Viscotec's solutions represent the gold standard in rPET processing technology, 
                combining innovative engineering with sustainable practices to deliver 
                superior food-grade recycled materials.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Food Safety",
                    description: "FDA and EFSA compliant processing"
                  },
                  {
                    title: "Sustainability",
                    description: "100% recyclable solutions"
                  },
                  {
                    title: "Efficiency",
                    description: "Maximum output with minimal energy"
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

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Our Product Line
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={product.link}
                  className="block h-full"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/400x225?text=${product.title}`;
                        }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {product.description}
                      </p>
                      <div className="flex items-center text-primary group-hover:text-primary-dark transition-colors mt-auto">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Viscotec; 