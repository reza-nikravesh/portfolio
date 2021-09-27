import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { titleAnimation } from "../Animation";

const AboutSection = () => {
  
  return (
    <AboutUsSection>
      <div className="description">
        <motion.div
          variants={titleAnimation}
          initial="hide"
          animate="show"
          className="title"
        >
          <motion.h2 variants={titleAnimation} className="piece">
            We work to make
          </motion.h2>
          <motion.h2 variants={titleAnimation} className="piece">
            your <span>dreames</span> come
          </motion.h2>
          <motion.h2 variants={titleAnimation} className="piece">
            true.
          </motion.h2>
        </motion.div>
        <motion.p variants={titleAnimation}>
          Join the World's leading platform for health, happiness, and
          performance.
        </motion.p>
        <Link to="/contact">
          <button>Contact us</button>
        </Link>
      </div>
      <img src={home1} alt="camera man" />
    </AboutUsSection>
  );
};

const AboutUsSection = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 7rem;
  color: white;
  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }
  h3 {
    color: white;
  }
  p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }
  .piece span {
    color: #23d997;
    font-weight: bold;
  }
`;

export default AboutSection;
