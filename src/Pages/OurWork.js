import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MovieState from "../Data/MovieState";
import { motion } from "framer-motion";
import { fade, lineAnim, pageAnimation, photoAnim, slider, sliderContainer } from "../Animation";
const OurWork = () => {
  return (
    <>
      <motion.div variants={sliderContainer} initial="hide" animate="show">
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Work variants={pageAnimation} initial="hide" animate="show">
        {MovieState().map((item) => {
          return (
            <Movie>
              <motion.h2 variants={fade}>{item.title}</motion.h2>
              <motion.div variants={lineAnim} className="line"></motion.div>
              <Link to={item.url}>
                <Hide>
                  <motion.img
                    variants={photoAnim}
                    src={item.mainImg}
                    alt="item.title"
                  />
                </Hide>
              </Link>
            </Movie>
          );
        })}
      </Work>
    </>
  );
};
export default OurWork;

const Work = styled(motion.div)`
  background-color: white;
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  h2 {
    padding: 1rem 0rem;
    color: black;
  }
  .line {
    min-height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled(motion.div)`
  min-height: 5rem;
  overflow: hidden;
`;

// frame animation

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 3;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
