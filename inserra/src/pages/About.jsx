import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Package, Utensils, Stethoscope, Users, Zap, HeartHandshake, Award, Globe, Rocket } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    { icon: <Factory />, title: "Production Expertise", description: "Representing top international manufacturers of production lines and machines." },
    { icon: <Package />, title: "Plastic & Recycling Focus", description: "Specializing in plastic packaging and recycling solutions." },
    { icon: <Utensils />, title: "Food Manufacturing", description: "Providing cutting-edge solutions for food production processes." },
    { icon: <Stethoscope />, title: "Pharmaceutical Solutions", description: "Offering specialized equipment for pharmaceutical manufacturing." },
    { icon: <Users />, title: "Client Partnership", description: "We're not just suppliers; we're partners in our clients' success stories." },
    { icon: <Zap />, title: "Tailored Solutions", description: "Assisting clients in formulating solutions tailored to their unique production needs." },
    { icon: <HeartHandshake />, title: "Ongoing Support", description: "Committed to providing continuous after-sales services and fostering enduring relationships." }
  ];

  const milestones = [
    { year: "1992", description: "INSERA was founded" },
    { year: "2002", description: "Expanded into machinery representation" },
    { year: "2010", description: "Became a leading supplier in the MENA region" },
    { year: "2015", description: "Launched innovative recycling solutions" },
    { year: "2020", description: "Expanded into new international markets" },
    { year: "2023", description: "Celebrated 30 years of excellence" }
  ];

  const TimelineItem = ({ milestone, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    const isLeft = index % 2 === 0;

    return (
      <motion.div
        ref={ref}
        className={`flex items-center mb-12 ${isLeft ? 'justify-start' : 'justify-end'}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {isLeft ? (
          <>
            <div className="w-5/12 text-right pr-8">
              <h3 className="text-2xl font-bold mb-2">{milestone.year}</h3>
              <p className="text-blue-100">{milestone.description}</p>
            </div>
            <div className="w-2/12 flex justify-center">
              <motion.div
                className="w-4 h-4 bg-blue-500 rounded-full timeline-dot"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              />
            </div>
            <div className="w-5/12"></div>
          </>
        ) : (
          <>
            <div className="w-5/12"></div>
            <div className="w-2/12 flex justify-center">
              <motion.div
                className="w-4 h-4 bg-blue-500 rounded-full timeline-dot"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              />
            </div>
            <div className="w-5/12 text-left pl-8">
              <h3 className="text-2xl font-bold mb-2">{milestone.year}</h3>
              <p className="text-blue-100">{milestone.description}</p>
            </div>
          </>
        )}
      </motion.div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark min-h-screen text-white -mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          About INSERA
        </motion.h1>

        <motion.div
          className="max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl leading-relaxed text-center text-blue-100">
            At INSERA, we are the local representatives of international manufacturers of production lines and
            machines. Our focus lies in plastic packaging & recycling, as well as food &
            pharmaceutical manufacturing. We pride ourselves on being partners in our clients' success stories,
            from initial project development through implementation and ongoing support.
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          className="bg-white text-primary rounded-lg shadow-lg p-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center">
            Our mission is to be the leading partner in providing know-how and supplying cutting-edge technology, setting the standard for unparalleled quality in every aspect along with our detail-oriented services. Our commitment extends beyond meeting client expectations; we aspire to consistently exceed them. Through partnering with worldwide technology leaders, we strive to empower industries with reliable, high-performance production lines and machines that guarantee success and develop progress. At the heart of our mission is the solid pursuit of reliability, setting our position as the trusted partner for those who demand nothing but state of the art technology
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[
            { icon: <Award size={48} />, title: "Excellence", description: "Committed to delivering top-quality solutions" },
            { icon: <Globe size={48} />, title: "Global Reach", description: "Partnering with leading international manufacturers" },
            { icon: <Rocket size={48} />, title: "Innovation", description: "Driving industry advancements and sustainability" }
          ].map((feature, index) => (
            <div key={index} className="bg-blue-700 rounded-lg p-6 text-center flex flex-col items-center">
              <div className="text-white mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Our Services */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                variants={fadeInUpVariants}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Timeline */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="relative">
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 1, delay: 1.2 }}
            />
            {milestones.map((milestone, index) => (
              <TimelineItem key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
