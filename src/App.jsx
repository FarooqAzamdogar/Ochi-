import React from "react";
import Navbar from "./assets/components/Navbar";
import LandingPage from "./assets/components/LandingPage";
import Marquee from "./assets/components/Marquee";
import About from "./assets/components/About";
import Eyes from "./assets/components/Eyes";
import Featured from "./assets/components/Featured";
import Lards from "./assets/components/Lards";
import Footer from "./assets/components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Lards />
      <Footer />
    </div>
  );
}

export default App;
