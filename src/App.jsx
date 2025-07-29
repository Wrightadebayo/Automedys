import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Services from './component/Services';
import Condition from './component/Condition';
import MeetUs from './component/MeetUs';
import FeedBack from './component/FeedBack';
import FAQ from './component/FAQ';
import Latest from './component/Latest';
import Contact from './component/Contact';
import Footer from './component/Footer';

const Home = () => (
  <>
    <Hero />
    <Services />
    <Condition />
    <MeetUs />
    <FeedBack />
    <FAQ />
    <Latest />
    <Contact />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;

