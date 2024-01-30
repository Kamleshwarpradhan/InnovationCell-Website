import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./HomePage.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import SnowfallComponent from "./Components/Snowfall/SnowfallComponent";
import Contact from "./Components/ContactUs/Contact";
import Accordian from "./Components/Faq/Accordian";
import Timeline from "./Components/Timeline/Timeline";
import Footer from "./Components/Footer/Footer";
import Snitch from "./Components/snitch/Snitch";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setScrolled(true);
      setScrolled(false);
    }
  };

  return (
    <>
      <>
        <SnowfallComponent />
        <Snitch />
        <div className="App">
          <div className={scrolled ? "dark-overlay" : ""}></div>
          <LandingPage />
          <a id="" className="scroll-down" href="#aboutusnav">
            <div className="mouse">
              <span></span>
            </div>
            <div className="arrow">
              <span></span>
              <span></span>
            </div>
          </a>
          <div id="aboutusnav"></div>
          <AboutUs />

          <div id="eventsnav"></div>
          <Timeline />
          <div id="faqnav"></div>
          <Accordian />
          <div id="contactusnav"></div>
          <Contact />
          <Footer />
        </div>
      </>
    </>
  );
}

export default App;
