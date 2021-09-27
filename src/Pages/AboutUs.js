import { motion } from "framer-motion";
import React from "react";
import { pageAnimation } from "../Animation";
import AboutSection from "../Components/AboutSection";
import FaqSection from "../Components/FaqSection";
import ServicesSection from "../Components/ServicesSection";

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hide" animate="show">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};
export default AboutUs;
