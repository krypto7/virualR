import React from "react";
import Navbar from "./component/Navbar/Navbar";
import HeroSection from "./component/HeroSection/HeroSection";
import Feature from "./component/Feature/Feature";
import Workflow from "./component/Workflow/Workflow";
import Pricing from "./component/Pricing/Pricing";
import Testimonial from "./component/Testimonial/Testimonial";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Feature />
        <Workflow />
        <Pricing />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
