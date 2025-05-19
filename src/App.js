import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Page Components
// import Home from "./pages/Home";

import Home from "./pages/home/Home";
import OurStory from "./pages/About";
import OurProjects from "./pages/Projects";
import Contact from "./pages/Contact";

// UI Components
import Navbar from "./Navbar";
import Footer from "./components/footer";
import Loader from "./loader";
import WhatsAppButton from "./components/WhatsAppButton";
import Button from "./components/button";
import "bootstrap/dist/css/bootstrap.min.css";

function LoaderWrapper({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Loader /> : children;
}

function App() {
  return (
    <Router>
      <Navbar />
      <LoaderWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<OurStory />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Button />
        <Footer />
        <WhatsAppButton />
      </LoaderWrapper>
    </Router>
  );
}

export default App;
