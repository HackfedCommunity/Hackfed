import { useEffect } from 'react';
import './App.css';
import Footer from './components/Fotter'; // Ensure the spelling matches
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StickyNav from './components/StickeyNav';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <div className="app-container bg-black"> {/* Added wrapper div */}
        <Navbar />
        <StickyNav />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/About" element={<AboutUs />} exact />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
