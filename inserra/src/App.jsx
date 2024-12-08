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
import Appliance from './pages/industries/appliance/Appliance';
import FoodPharmaceutical from './pages/Food&Pharmaceutical';
import KiefelAppliance from './pages/industries/appliance/KiefelAppliance';
import Washing from './pages/industries/recycling/Washing';
import Sorting from './pages/industries/recycling/Sorting';
import Recycling from './pages/industries/recycling/Recycling';
import Packaging from './pages/industries/packaging/Packaging';
import KiefelPackaging from './pages/industries/packaging/KiefelPackaging';
import SpeedformerKMD from './pages/industries/packaging/machines/SpeedformerKMD';
import StackingAutomation from './pages/industries/packaging/machines/StackingAutomation';
import UpstreamDownstream from './pages/industries/packaging/machines/UpstreamDownstream';
import KmdTooling from './pages/industries/packaging/machines/KmdTooling';
import SpeedformerKTR from './pages/industries/packaging/machines/SpeedformerKTR';
import StackingKTR from './pages/industries/packaging/machines/StackingKTR';
import TiltingTools from './pages/industries/packaging/machines/TiltingTools';
import KiefelFiber from './pages/industries/packaging/KiefelFiber';
import NatureprepKFP from './pages/industries/packaging/machines/fiber/NatureprepKFP';
import NatureformerKFT from './pages/industries/packaging/machines/fiber/NatureformerKFT';
import NatureformerKFL from './pages/industries/packaging/machines/fiber/NatureformerKFL';

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
            
            {/* Industry Routes */}
            <Route path="/industries/packaging" element={<PageWrapper><Packaging /></PageWrapper>} />
            <Route path="/industries/appliance" element={<PageWrapper><Appliance /></PageWrapper>} />
            <Route path="/industries/recycling" element={<PageWrapper><Recycling /></PageWrapper>} />
            <Route path="/industries/food-pharmaceutical" element={<PageWrapper><FoodPharmaceutical /></PageWrapper>} />
            
            {/* Sub-routes */}
            <Route path="/industries/appliance/kiefel-appliance" element={<PageWrapper><KiefelAppliance /></PageWrapper>} />
            <Route path="/industries/recycling/washing" element={<PageWrapper><Washing /></PageWrapper>} />
            <Route path="/industries/recycling/sorting" element={<PageWrapper><Sorting /></PageWrapper>} />
            <Route path="/industries/packaging/kiefel" element={<PageWrapper><KiefelPackaging /></PageWrapper>} />
            
            {/* Machine Routes */}
            <Route path="/industries/packaging/kiefel/kmd" element={<PageWrapper><SpeedformerKMD /></PageWrapper>} />
            <Route path="/industries/packaging/kiefel/stacking" element={<PageWrapper><StackingAutomation /></PageWrapper>} />
            <Route path="/industries/packaging/kiefel/upstream" element={<PageWrapper><UpstreamDownstream /></PageWrapper>} />
            <Route path="/industries/packaging/kiefel/tooling" element={<PageWrapper><KmdTooling /></PageWrapper>} />
            <Route path="/industries/packaging/kiefel/ktr" element={<PageWrapper><SpeedformerKTR /></PageWrapper>} />
            <Route path="/industries/packaging/kiefel/stacking-ktr" element={<PageWrapper><StackingKTR /></PageWrapper>} />
            <Route path="/industries/packaging/kiefel/tilting-tools" element={<PageWrapper><TiltingTools /></PageWrapper>} />
            <Route path="/industries/packaging/kiefel-fiber" element={<KiefelFiber />} />
            <Route path="/industries/packaging/kiefel-fiber/natureprep" element={<PageWrapper><NatureprepKFP /></PageWrapper>} />
            <Route path="/industries/packaging/kiefel-fiber/kft" element={<PageWrapper><NatureformerKFT /></PageWrapper>} />
            <Route path="/industries/packaging/kiefel-fiber/kfl" element={<PageWrapper><NatureformerKFL /></PageWrapper>} />
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
