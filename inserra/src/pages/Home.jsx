import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, SmilePlus, Building, PieChart, Award, FileText, TrendingUp, Shield, Lightbulb, Network, Cpu, HeartHandshake, ClipboardCheck } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage from '../assets/plastic.png'; // Make sure this path is correct
// Import partner logos
// import kiefelLogo from '../assets/partner-logos/kiefel.png';
// import viscotecLogo from '../assets/partner-logos/viscotec.png';
// import bekumLogo from '../assets/partner-logos/bekum.png';
// import autefaLogo from '../assets/partner-logos/autefa.png';
// import motanLogo from '../assets/partner-logos/motan.png';
// import bbeLogo from '../assets/partner-logos/bbe.png';
// import kraussmaffeLogo from '../assets/partner-logos/kraussmaffe.png';

const Home = () => {
  const partners = [
    { name: 'Kiefel', logo: 'kiefelLogo' },
    { name: 'Viscotec', logo: 'viscotecLogo' },
    { name: 'Bekum', logo: 'bekumLogo' },
    { name: 'Autefa', logo: 'autefaLogo' },
    { name: 'Motan Group', logo: 'motanLogo' },
    { name: 'BB Engineering', logo: 'bbeLogo' },
    { name: 'kraussmaffe', logo: 'kraussmaffeLogo' },
  ];

  const featuredProjects = [
    {
      id: '01',
      title: 'Plastech Egypt',
      description: 'Extrusion blow molding and injection molding machines for production of various packing products for industrial oil and detergents. Project value EUR 13 million.',
      image: 'projectImage1',
    },
    {
      id: '02',
      title: 'Project Two',
      description: 'Description for Project Two. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'projectImage2',
    },
    {
      id: '03',
      title: 'Project Three',
      description: 'Description for Project Three. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'projectImage3',
    },
  ];

  const projectSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Changed from 5000 to 3000 for faster auto-scroll
    fade: true,
    cssEase: 'linear',
    beforeChange: (current, next) => setActiveProject(next),
    arrows: false, // Remove side arrows
  };

  const stats = [
    { icon: <Briefcase className="w-8 h-8" />, value: 1000, label: "Projects Completed", suffix: "+" },
    { icon: <Users className="w-8 h-8" />, value: 250, label: "Trusted Client's", suffix: "+" },
    { icon: <SmilePlus className="w-8 h-8" />, value: 100, label: "Client Satisfaction", suffix: "%" },
    { icon: <Building className="w-8 h-8" />, value: 4, label: "Branches", suffix: "" },
  ];

  const testimonials = [
    {
      quote: "We committed to the continuous development of its employees, pursuit of excellence in its operations, and adherence to high environmental and safety standards in all its activities.",
      author: "Ali Haggag",
      position: "CEO",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      quote: "Insera is a trading company which exists since 1992, and working with machinery since 2002. Our strategy is to represent only high quality machines of German and European made",
      author: "Ali Haggag",
      position: "CEO",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      quote: "Our commitment to innovation and customer satisfaction has driven our success in the plastic industry for over three decades.",
      author: "Sarah Johnson",
      position: "COO",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      quote: "The quality of machinery and support we receive has been instrumental in our growth and success.",
      author: "John Smith",
      position: "Production Manager",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const [activeTab, setActiveTab] = useState('vision');

  const tabContent = {
    vision: " Through partnering with worldwide technology leaders, we strive to empower industries with reliable, high-performance production lines and machines that guarantee success and develop progress. At the heart of our mission is the solid pursuit of reliability, setting our position as the trusted partner for those who demand nothing but state of the art technology.",
    mission: "Our mission is to be the leading partner in providing know-how and supplying cutting-edge technology, setting the standard for unparalleled quality in every aspect along with our detail-oriented services. Our commitment extends beyond meeting client expectations; we aspire to consistently exceed them.",
    strategy: "Our strategy is to leverage our partnerships with global technology leaders to deliver innovative, sustainable solutions across all segments of the plastic management value chain. We focus on attracting domestic investments, promoting the utilization of cutting-edge technologies, and fostering a culture of continuous improvement and environmental responsibility. By staying at the forefront of industry trends and technological advancements, we aim to provide our clients with the tools and expertise they need to succeed in an ever-evolving market landscape."
  };

  const partnerLogos = [
    'kiefelLogo', 'viscotecLogo', 'bekumLogo', 'autefaLogo', 'motanLogo', 'bbeLogo', 'kraussmaffeLogo'
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  const [activeProject, setActiveProject] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % featuredProjects.length);
    }, 4000); // Changed from 5000 to 3000 for faster auto-scroll

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  const coreValues = [
    { icon: <Shield className="w-12 h-12" />, title: "Integrity", description: "We uphold the highest ethical standards, fostering trust and transparency in all our interactions." },
    { icon: <Lightbulb className="w-12 h-12" />, title: "Innovation", description: "We embrace a culture of continuous improvement, encouraging creativity and innovation in all aspects of our business and always looking for more sustainable solutions." },
    { icon: <Users className="w-12 h-12" />, title: "Customer-Oriented", description: "Our customers are at the heart of everything we do. We are committed to understand their needs, exceed expectations, and build lasting relationships." },
    { icon: <Network className="w-12 h-12" />, title: "Collaboration", description: "We believe in the power of collaboration and we thrive on teamwork. By working as a team, we encourage diverse perspectives to achieve collective success and solve complex challenges." },
    { icon: <Cpu className="w-12 h-12" />, title: "Adaptability", description: "In a dynamic business environment, we embrace change and demonstrate flexibility. We are agile in responding to new opportunities and challenges." },
    { icon: <HeartHandshake className="w-12 h-12" />, title: "Social Responsibility", description: "We are committed to making a positive impact on society and the environment. Through responsible business practices, we contribute to the well-being of communities and the planet." },
    { icon: <ClipboardCheck className="w-12 h-12" />, title: "Accountability", description: "We take ownership of our actions and decisions. Accountability is the foundation of our reliability and the key to building a culture of trust." },
  ];

  return (
    <div className="bg-gray-100 relative">
      {/* Hero Section */}
      <motion.div 
        className="relative z-10 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Insera</h1>
            <p className="text-lg sm:text-xl mb-8 text-blue-100">Partners for growth</p>
            <div className="flex space-x-4">
              <Link 
                to="/contact" 
                className="inline-block bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
              >
                WORK WITH US
              </Link>
              <Link 
                to="/about" 
                className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition duration-300"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <PieChart className="w-8 h-8" />, title: "Circular Intelligence", description: "Product promotions, visibility studies, product development with our partners" },
              { icon: <Award className="w-8 h-8" />, title: "Authorised Brand", description: "Insera is a locally owned company existing since 1988 and always had good relations with SIDF in Egypt" },
              { icon: <FileText className="w-8 h-8" />, title: "Expert Advice", description: "We give our suggestions and recommendations to the customer and the partners" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Best Solutions", description: "Thanks to the experience of our team, we chose for them the best solution and the right machinery" },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-primary to-primary-dark p-6 rounded-lg shadow-md text-white">
                <div className="text-white mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <motion.div
        className="relative z-20 bg-gradient-to-br from-primary to-primary-dark shadow-lg -mt-8 rounded-t-3xl overflow-hidden py-16 sm:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">CORE VALUES</h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              These values collectively guide our actions, decisions, and
              relationships, shaping the culture of our company and
              influencing our contributions to the world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariants}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Company Vision Section */}
      <motion.div
        className="relative z-30 bg-white text-primary shadow-lg -mt-8 rounded-t-3xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Guiding Principles</h2>
            <div className="flex mb-4 border-b border-primary">
              {['vision', 'mission', 'strategy'].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-2 px-4 text-sm font-medium ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-primary'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-lg p-6 shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabVariants}
                  transition={{ duration: 0.3 }}
                  className="text-white"
                >
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                  </h3>
                  <p className="text-blue-100">
                    {tabContent[activeTab]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Partner Logos Marquee */}
      <div className="relative z-40 bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg -mt-8 py-12 overflow-hidden">
        <div className="flex animate-marquee">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-48 mx-8">
              {/* Replace with actual logo images */}
              <div className="h-16 bg-gray-400 rounded-lg filter grayscale"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects Section */}
      <motion.div
        className="relative z-50 bg-gradient-to-bl from-primary to-primary-dark text-white shadow-lg -mt-8 rounded-t-3xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-blue-200 font-semibold mb-2">FEATURED CASES</h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Completed Projects</h3>
          </div>
          <Slider {...projectSliderSettings}>
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="px-4">
                <motion.div
                  className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/2 h-64 md:h-auto">
                      {/* Replace with actual project images */}
                      <div className="bg-gray-300 w-full h-full object-cover"></div>
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <motion.h2
                          className="text-6xl sm:text-8xl font-bold mb-4 text-blue-600 opacity-20"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 0.2, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          {project.id}
                        </motion.h2>
                        <motion.h3
                          className="text-xl sm:text-2xl font-bold mb-4 text-gray-800"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p
                          className="mb-6 text-blue-800" // Changed to dark blue
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          {project.description}
                        </motion.p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <Link to="/projects" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                          READ MORE
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
        {/* <Link to="/projects" className="inline-block bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300 mt-8">
          VIEW ALL PROJECTS
        </Link> */}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="relative z-60 bg-white shadow-lg -mt-8 rounded-t-3xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{stat.icon}</div>
                <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                  {({ isVisible }) => (
                    <div style={{ height: 60 }}>
                      {isVisible ? (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2.5}
                          suffix={stat.suffix}
                          className="text-4xl font-bold text-blue-600"
                        />
                      ) : (
                        <span className="text-4xl font-bold text-blue-600">0{stat.suffix}</span>
                      )}
                    </div>
                  )}
                </VisibilitySensor>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="relative z-70 bg-gradient-to-tr from-primary-dark to-primary text-white shadow-lg -mt-8 rounded-t-3xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-blue-100">Hear from the companies we've worked with</p>
          </div>
          <Slider {...testimonialSettings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 h-full">
                <motion.div
                  className="bg-white text-gray-800 rounded-lg p-6 flex flex-col h-full border border-blue-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-grow">
                    <svg className="text-blue-500 w-8 h-8 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-600 text-lg mb-6">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <img className="w-12 h-12 rounded-full mr-4" src={testimonial.image} alt={testimonial.author} />
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;