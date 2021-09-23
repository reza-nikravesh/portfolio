import React from "react";
import AboutSection from "../Components/AboutSection";
import { FaqSection } from "../Components/FaqSection";
import { ServicesSection } from "../Components/ServicesSection";

const AboutUs = () => {
  return (
    <React.Fragment>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </React.Fragment>
  );
};
export default AboutUs;
