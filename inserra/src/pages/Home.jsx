import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { motion, AnimatePresence } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import heroImage from '../assets/hero-image.png'; // Add a hero image to your assets folder
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
      title: 'Plastech KSA',
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const stats = [
    { icon: "💼", value: 1000, label: "Projects Completed", suffix: "+" },
    { icon: "🤝", value: 250, label: "Trusted Client's", suffix: "+" },
    { icon: "😊", value: 100, label: "Client Satisfaction", suffix: "%" },
    { icon: "🏢", value: 4, label: "branches", suffix: "" },
  ];

  const testimonials = [
    {
      quote: "We committed to the continuous development of its employees, pursuit of excellence in its operations, and adherence to high environmental and safety standards in all its activities.",
      author: "Musaad Al-Ruwatea",
      position: "CEO",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      quote: "SHOWRANN is a trading company which exists since 1992, and working with machinery since 2002. Our strategy is to represent only high quality machines of German and European made",
      author: "Musaad Al-Ruwatea",
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
    vision: "SHOWRANN will pursue business opportunities across all segments of the Plastic management value chain through establishing alliances with European partners, attracting Domestics investments and promoting the utilization of innovative technologies.",
    mission: "Our mission is to provide cutting-edge solutions in plastic conversion and Life Sciences Automation, focusing on quality, innovation, and customer satisfaction.",
    strategy: "We aim to represent only high-quality machines of German and European origin, expanding our reach across all segments of the Plastic management value chain and Life Sciences automation solutions."
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

  return (
    <div className="bg-gray-100 relative">
      {/* Hero Section */}
      <motion.div 
        className="relative z-10 bg-white shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">One Name For All Your Needs</h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">Export/Import, Trading, Engineering, Manufacturing</p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="block sm:inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 text-center">WORK WITH US</Link>
                <Link to="/about" className="block sm:inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 text-center mt-4 sm:mt-0">LEARN MORE</Link>
              </div>
            </div>
            <div className="md:w-1/2">
              {/* <img src={heroImage} alt="Plastic Manufacturing" className="w-full h-auto rounded-lg shadow-lg" /> */}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {[ 
              { icon: "📊", title: "Circular Intelligence", description: "Product promotions, visibility studies, product development with our partners" },
              { icon: "🏆", title: "Authorised Brand", description: "PlastiCorp is a locally owned company existing since 1988 and always had good relations with SIDF in KSA" },
              { icon: "✍️", title: "Expert Advices", description: "We give our suggestions and recommendations to the customer and the partners" },
              { icon: "📈", title: "Best solutions", description: "Thanks to the experience of our team, we chose for them the best solution and the right machinery" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        className="relative z-20 bg-gray-100 shadow-lg -mt-8 rounded-t-3xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-red-500 font-semibold mb-2">CORE VALUES</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Services we serve to all<br />over the world</h3>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-gray-600 leading-relaxed">
                Since 2002 we have been eager to represent only the best world known companies in the field of plastic conversion and Life Sciences Automation Solutions. We offer the best solutions in the plastic industry for the manmade fibers, extrusion blow molding, thermoforming, material handling, recycling and washing. Furthermore, we provide state-of-the-art automation solutions for manufacturing medical devices, medical diagnostics and pharmaceuticals.
              </p>
              <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="block sm:inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 text-center">WORK WITH US</Link>
                <Link to="/about" className="block sm:inline-block bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 text-center mt-4 sm:mt-0">LEARN MORE</Link>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                  {/* <img src={partner.logo} alt={partner.name} className="max-w-full max-h-16" /> */}
                  <p className="text-center mt-2">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Company Vision Section */}
      <motion.div 
        className="relative z-30 bg-white shadow-lg -mt-8 rounded-t-3xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">The Largest Business Expert!</h2>
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                SHOWRANN is a trading company which exists since 1992, and working with machinery since 2002. Our strategy is to represent only high quality machines of German and European made, will pursue business opportunities across all segments of the Plastic management value chain and Life Sciences automation solutions through establishing alliances with European partners, attracting Domestics investments and promoting.
              </p>
            </div>
            <div className="flex mb-4 border-b">
              {['vision', 'mission', 'strategy'].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-2 px-4 text-sm font-medium ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="bg-gray-100 p-6 rounded-lg min-h-[150px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabVariants}
                  transition={{ duration: 0.3 }}
                  className="text-gray-800"
                >
                  {tabContent[activeTab]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Partner Logos Marquee */}
      <div className="relative z-40 bg-gray-200 shadow-lg -mt-8 py-12 overflow-hidden">
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
        className="relative z-50 bg-gray-100 shadow-lg -mt-8 rounded-t-3xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-red-500 font-semibold mb-2">FEATURED CASES</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Completed Projects</h3>
          </div>
          <Slider {...sliderSettings}>
            {featuredProjects.map((project) => (
              <div key={project.id} className="px-4">
                <div className="bg-navy-blue text-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
                  <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                    <h2 className="text-6xl sm:text-8xl font-bold mb-4 opacity-20">{project.id}</h2>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="mb-6">{project.description}</p>
                    <Link to="/projects" className="text-white hover:text-blue-300 inline-flex items-center">
                      READ MORE
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    {/* <img src={project.image} alt={project.title} className="rounded-lg shadow-md w-full h-auto" /> */}
                    <div className="bg-gray-300 h-48 sm:h-64 rounded-lg shadow-md"></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
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
                <div className="text-4xl mb-4">{stat.icon}</div>
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
        className="relative z-70 bg-gray-100 shadow-lg -mt-8 rounded-t-3xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Hear from the companies we've worked with</p>
          </div>
          <Slider {...testimonialSettings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 h-full">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
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
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;