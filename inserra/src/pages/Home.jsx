import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { motion, AnimatePresence } from 'framer-motion';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { HeadphonesIcon, Users, AwardIcon, ShieldCheckIcon, ClockIcon, LightbulbIcon, TrendingUpIcon, ArrowRight, Shield, Lightbulb, Network, Cpu, HeartHandshake, ClipboardCheck } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage from '../assets/plastic.png';
import { FlipWords } from '../components/FlipWords';

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
      title: 'Al Baraka Pack',
      customerLogo: '/path/to/albaraka-logo.png', // Update with actual path
      partnerLogo: '/path/to/viscotec-logo.png', // Update with actual path
      description: "Al Baraka Pack, with extensive experience in Syrian food packaging, began collaborating with us in September 2021 for their new Egyptian facility. Seeking to enter the Egyptian market with premium packaging products, they required top-tier equipment for high-quality PET sheet production. In partnership with Viscotec, we engaged in thorough discussions to determine the optimal solution for their needs. Our team approach involved close communication and multiple on-site visits throughout implementation, ensuring project success. Q1 2023 saw the successful installation and startup of our PET Extrusion line. Since then, we've provided continuous support for their aftersales requirements.",
      website: 'https://albarakapack.com/about-us/',
    },
    {
      id: '02',
      title: 'IFF',
      customerLogo: '/path/to/iff-logo.png', // Update with actual path
      partnerLogo: '/path/to/hanningfield-logo.png', // Update with actual path
      description: "Our project with IFF, a global leader in food, beverage, scent, home and personal care, and health, was both interesting and challenging. Working on their expansion project alongside our partner Hanningfield, we recognized early on that their needs required a customized solution. Through numerous meetings and extensive discussions, we developed the best technical solution to meet their specific requirements. The project involved coordinating with the customer and third parties to ensure our powder processing equipment integrated seamlessly with their new blending equipment and WIP system.",
      website: 'https://www.iff.com/',
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

  const words = [
    "Cutting-Edge Solutions",
    "Innovative Technologies",
    "Sustainable Practices",
    "Industry Expertise"
  ];

  return (
    <div className="bg-gray-100 relative">
      {/* Hero Section */}
      <motion.div 
        className="relative z-10 bg-cover bg-center text-white overflow-hidden min-h-screen flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary-dark/50"></div>
        
        {/* Animated background shapes */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-dark/20 rounded-full filter blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empowering Industries with
            </motion.h1>
            <motion.div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FlipWords 
                words={words} 
                duration={3000} 
                className="text-blue-300 inline-block" 
              />
            </motion.div>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Your trusted partner for innovative machinery and sustainable growth
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-100 transition duration-300 group"
              >
                <span>Work with Us</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1 h-3 bg-white rounded-full mx-auto"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Key Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <HeadphonesIcon className="w-10 h-10" />, title: "Prompt Aftersales Support", description: "Providing quick and efficient support after purchase" },
              { icon: <Users className="w-10 h-10" />, title: "Strong Relationships", description: "Having strong relationships with our customers and partners" },
              { icon: <AwardIcon className="w-10 h-10" />, title: "Renowned Reputation", description: "Known for our excellence and quality in the industry" },
              { icon: <ShieldCheckIcon className="w-10 h-10" />, title: "Trustworthiness", description: "Building trust through consistent reliability and integrity" },
              { icon: <ClockIcon className="w-10 h-10" />, title: "Reliability", description: "Consistently delivering on our promises and commitments" },
              { icon: <LightbulbIcon className="w-10 h-10" />, title: "Industry Knowledge", description: "Deep understanding of market and industry dynamics" },
              { icon: <TrendingUpIcon className="w-10 h-10" />, title: "Technology Developments", description: "Well-versed in market and technology advancements" },
            ].map((item, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-primary to-primary-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-white $
                  index === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-white bg-opacity-10 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <motion.div
        className="relative z-20 bg-gradient-to-br from-primary to-primary-dark text-white py-16 sm:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">CORE VALUES</h3>
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
        className="relative z-30 bg-white text-primary py-16 sm:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      <div className="relative z-40 bg-gray-100 py-12 overflow-hidden">
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
        className="relative z-50 bg-gradient-to-bl from-primary to-primary-dark text-white py-16 sm:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="flex flex-col h-full">
                    <div className="p-6 bg-gray-100">
                      <div className="flex justify-between items-center mb-4">
                        <img src={project.customerLogo} alt={`${project.title} Logo`} className="w-24 h-12 object-contain" />
                        <img src={project.partnerLogo} alt="Partner Logo" className="w-24 h-12 object-contain" />
                      </div>
                      <h2 className="text-6xl font-bold mb-2 text-primary opacity-20">{project.id}</h2>
                      <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                    </div>
                    <div className="flex-grow p-6">
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition duration-300"
                      >
                        Visit Customer Website
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="relative z-60 bg-gray-100 py-16 sm:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Hear from the companies we've worked with</p>
          </div>
          <Slider {...testimonialSettings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 h-full">
                <motion.div
                  className="bg-white rounded-lg p-6 flex flex-col h-full border border-primary shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-grow">
                    <svg className="text-primary w-8 h-8 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-800 text-lg mb-6">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <img className="w-12 h-12 rounded-full mr-4" src={testimonial.image} alt={testimonial.author} />
                    <div>
                      <p className="font-semibold text-primary">{testimonial.author}</p>
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