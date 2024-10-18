import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import News from './pages/News';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollToTop from './components/ScrollToTop';
import PackagingRecycling from './pages/Packaging&Recycling';
import Appliance from './pages/Appliance';
import FoodPharmaceutical from './pages/Food&Pharmaceutical';
import KiefelAppliance from './pages/industries/appliance/KiefelAppliance';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const variants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ duration: 0.3 }}
      className={`${!isHomePage ? 'pt-20' : ''}`}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/partners" element={<PageWrapper><Partners /></PageWrapper>} />
            <Route path="/news" element={<PageWrapper><News /></PageWrapper>} />
            <Route path="/industries/packaging-recycling" element={<PageWrapper><PackagingRecycling /></PageWrapper>} />
            <Route path="/industries/appliance" element={<PageWrapper><Appliance /></PageWrapper>} />
            <Route path="/industries/food-pharmaceutical" element={<PageWrapper><FoodPharmaceutical /></PageWrapper>} />
            <Route path="/industries/appliance/kiefel-appliance" element={<KiefelAppliance />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
