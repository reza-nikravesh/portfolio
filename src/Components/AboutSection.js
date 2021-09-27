import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fade, pageAnimation, photoAnim, titleAnimation } from "../Animation";

const AboutSection = () => {
  return (
    <AboutUsSection variants={pageAnimation}>
      <div className="description">
        <motion.div
          variants={titleAnimation}
          initial="hide"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnimation} className="piece">
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} className="piece">
              your <span>dreames</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} className="piece">
              true.
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Join the World's leading platform for health, happiness, and
          performance.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact us</motion.button>
        </Link>
      </div>
      <motion.img
        variants={photoAnim}
        src={home1}
        alt="camera man"
      />
    </AboutUsSection>
  );
};
const Hide = styled.div`
  min-height: 5rem;
  overflow: hidden;
`;
const AboutUsSection = styled(motion.div)`
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
