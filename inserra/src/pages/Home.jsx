import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Users, Network, Cpu, HeartHandshake, ClipboardCheck, ArrowRight, Factory, Recycle, Package, Refrigerator, FlaskConical } from 'lucide-react';
import { FlipWords } from '../components/FlipWords';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plasticImage from '../assets/plastic.png';

const Home = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const words = [
    "Cutting-Edge Solutions",
    "Innovative Technologies",
    "Sustainable Practices",
    "Industry Expertise"
  ];

  const [activeImage, setActiveImage] = useState(0);

  const heroImages = [
    '/images/shutterstock_2174669625.jpg',
    plasticImage,
    '/images/shutterstock_2227403169.png',
    plasticImage
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const coreValues = [
    { icon: <Shield className="w-12 h-12" />, title: "Integrity", description: "We uphold the highest ethical standards, fostering trust and transparency in all our interactions." },
    { icon: <Lightbulb className="w-12 h-12" />, title: "Innovation", description: "We embrace a culture of continuous improvement, encouraging creativity and innovation in all aspects of our business and always looking for more sustainable solutions." },
    { icon: <Users className="w-12 h-12" />, title: "Customer-Oriented", description: "Our customers are at the heart of everything we do. We are committed to understand their needs, exceed expectations, and build lasting relationships." },
    { icon: <Network className="w-12 h-12" />, title: "Collaboration", description: "We believe in the power of collaboration and we thrive on teamwork. By working as a team, we encourage diverse perspectives to achieve collective success and solve complex challenges." },
    { icon: <Cpu className="w-12 h-12" />, title: "Adaptability", description: "In a dynamic business environment, we embrace change and demonstrate flexibility. We are agile in responding to new opportunities and challenges." },
    { icon: <HeartHandshake className="w-12 h-12" />, title: "Social Responsibility", description: "We are committed to making a positive impact on society and the environment. Through responsible business practices, we contribute to the well-being of communities and the planet." },
    { icon: <ClipboardCheck className="w-12 h-12" />, title: "Accountability", description: "We take ownership of our actions and decisions. Accountability is the foundation of our reliability and the key to building a culture of trust." },
  ];

  const partners = [
    {
      name: 'Starlinger',
      logo: '/images/starlinger/starlinger-logo.svg',
      website: 'https://www.starlinger.com/en/'
    },
    {
      name: 'Hanningfield',
      logo: '/images/hanningfield/hanningfield logo.svg',
      website: 'https://www.hanningfield.com/'
    },
    {
      name: 'Kiefel',
      logo: '/images/kiefel/kiefel-technologieslogo.svg',
      website: 'https://www.kiefel.com/en'
    },
    {
      name: 'Viscotec',
      logo: '/images/viscotec/logo.svg',
      website: 'https://www.viscotec.at/'
    }
  ];

  const featuredProjects = [
    {
      id: '01',
      title: 'Al Baraka Pack',
      customerLogo: '/images/barakalogo.svg',
      partnerLogo: '/images/viscotec/logo.svg',
      projectImage: '/images/barakaproj2.jpeg',
      description: "Al Baraka Pack, with extensive experience in Syrian food packaging, began collaborating with us in September 2021 for their new Egyptian facility. Seeking to enter the Egyptian market with premium packaging products, they required top-tier equipment for high-quality PET sheet production. In partnership with Viscotec, we engaged in thorough discussions to determine the optimal solution for their needs. Our team approach involved close communication and multiple on-site visits throughout implementation, ensuring project success. Q1 2023 saw the successful installation and startup of our PET Extrusion line. Since then, we've provided continuous support for their aftersales requirements.",
      website: 'https://albarakapack.com/about-us/',
    },
    {
      id: '02',
      title: 'IFF',
      customerLogo: '/images/iff logo.svg',
      partnerLogo: '/images/hanningfield/hanningfield logo.svg',
      projectImage: '/images/barakaproj.jpeg',
      description: "Our project with IFF, a global leader in food, beverage, scent, home and personal care, and health, was both interesting and challenging. Working on their expansion project alongside our partner Hanningfield, we recognized early on that their needs required a customized solution. Through numerous meetings and extensive discussions, we developed the best technical solution to meet their specific requirements. The project involved coordinating with the customer and third parties to ensure our powder processing equipment integrated seamlessly with their new blending equipment and WIP system.",
      website: 'https://www.iff.com/',
    },
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

  const projectSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    cssEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 8000,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 10000,
        }
      }
    ]
  };

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

  return (
    <div className="bg-gray-100 relative overflow-x-hidden">
      {/* Hero Section */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-primary-dark to-primary"
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
      >
        {heroImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeImage ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
            activeImage === 2 ? 'opacity-60' : 'opacity-40'
          }`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-dark/30"></div>

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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 leading-tight text-white"
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
                className="text-gray-100 inline-block"
              />
            </motion.div>
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <em>"Partners for Growth"</em>
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
                <span>Contact Us</span>
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

      {/* Industries We Serve */}
      <motion.div className="relative z-20 bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold mb-4 block tracking-wider">CORE INDUSTRIES</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
              Industries We Serve
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Delivering innovative solutions and cutting-edge technology to transform industrial processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Packaging Solutions",
                description: "Advanced thermoforming technology for sustainable packaging solutions",
                icon: <Package className="w-10 h-10" />,
                link: "/industries/packaging",
                features: ["Thermoforming Systems", "Fiber Technology", "Sustainable Materials"],
              },
              {
                title: "Appliance Manufacturing",
                description: "High-performance solutions for appliance component production",
                icon: <Refrigerator className="w-10 h-10" />,
                link: "/industries/appliance",
                features: ["Interior Liners", "Door Components", "Precision Forming"],
              },
              {
                title: "Recycling Systems",
                description: "Complete recycling solutions for a sustainable future",
                icon: <Recycle className="w-10 h-10" />,
                link: "/industries/recycling",
                features: ["Material Recovery", "Washing Systems", "Sorting Technology"],
              },
              {
                title: "Food & Pharmaceutical",
                description: "Specialized equipment for food processing and pharmaceutical manufacturing",
                icon: <FlaskConical className="w-10 h-10" />,
                link: "/industries/food-pharma",
                features: ["Clean Room Solutions", "GMP Standards", "Process Automation"],
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <Link to={industry.link} className="block p-6 relative">
                  <div className="relative">
                    <div className="bg-primary/5 rounded-xl p-4 w-fit mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary">
                        {industry.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-2 text-sm">
                      {industry.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-primary font-semibold group-hover:text-primary-dark transition-all duration-300">
                      Explore Solutions 
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Global Presence */}
      <motion.div 
        className="relative z-30 py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${plasticImage})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Worldwide Presence</h2>
              <p className="text-blue-200 text-lg">Connecting industries with world-class solutions</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">Global Partners</h3>
                <p className="text-gray-600 mb-6">
                  Exclusive partnerships with leading Global manufacturers, bringing cutting-edge technology to the MENA region.
                </p>
                <div className="flex items-center text-primary font-semibold group cursor-pointer">
                  View Partners <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
              <motion.div
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">MENA Presence</h3>
                <p className="text-gray-600 mb-6">
                  Strong regional presence with successful implementations across the Middle East and North Africa.
                </p>
                <div className="flex items-center text-primary font-semibold group cursor-pointer">
                  Our Projects <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Partner Logos Marquee */}
      <div className="relative z-40 bg-gray-200 py-12 overflow-hidden">
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-300px * 4))}
            }
            
            .scroll-wrapper {
              width: 100%;
              overflow: hidden;
              padding: 15px 0;
            }
            
            .scroll-container {
              display: flex;
              animation: scroll 30s linear infinite;
              width: fit-content;
            }
            
            .scroll-container:hover {
              animation-play-state: paused;
            }
            
            .partner-logo {
              width: 300px;
              flex-shrink: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0 40px;
            }
          `}
        </style>
        
        <div className="scroll-wrapper">
          <div className="scroll-container">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="partner-logo">
                <a 
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-all duration-300"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
            {/* Second set of logos */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="partner-logo">
                <a 
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-all duration-300"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
            {/* Third set of logos */}
            {partners.map((partner, index) => (
              <div key={`third-${index}`} className="partner-logo">
                <a 
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-all duration-300"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 w-auto object-contain opacity-75 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <motion.div className="relative z-50 bg-gradient-to-bl from-primary to-primary-dark text-white py-16 sm:py-20">
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
                    <div className="p-6 bg-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <img 
                          src={project.customerLogo} 
                          alt={`${project.title} Logo`} 
                          className="h-12 w-auto object-contain"
                        />
                        <img 
                          src={project.partnerLogo} 
                          alt="Partner Logo" 
                          className={`w-auto object-contain ${
                            project.title === 'Al Baraka Pack' ? 'h-6' : 'h-8'
                          }`}
                        />
                      </div>
                      <h2 className="text-6xl font-bold mb-2 text-primary opacity-20">{project.id}</h2>
                      <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                    </div>
                    {project.projectImage && (
                      <div className="w-full h-48 overflow-hidden">
                        <img 
                          src={project.projectImage} 
                          alt={`${project.title} Project`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-grow p-6 bg-gray-50">
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
      <motion.div className="relative z-60 bg-gray-100 py-16 sm:py-20">
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

      {/* New CTA Section */}
      <motion.div 
        className="relative z-70 py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${plasticImage})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Industry?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join the leading companies who trust INSERA for their industrial solutions
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/about"
                className="text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;