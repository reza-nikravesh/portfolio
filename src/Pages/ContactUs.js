import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { contactPageAnimation, titleAnimation } from "../Animation";

const ContactUs = () => {
  return (
    <ContactUsStyle variants={contactPageAnimation} initial="hide" animate="show">
      <Hide>
        <Title variants={titleAnimation} >
          Get in touch
        </Title>
      </Hide>
      <Social variants={titleAnimation}>
        <Circle />
        <h2>Send Us A Message</h2>
      </Social>
      <Social variants={titleAnimation}>
        <Circle />
        <h2>Send An Email</h2>
      </Social>
      <Social variants={titleAnimation}>
        <Circle />
        <h2>Social Media</h2>
      </Social>
    </ContactUsStyle>
  );
};
export default ContactUs;

const ContactUsStyle = styled(motion.div)`
  background-color: white;
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media screen and (max-width: 460px) {
    padding: 1rem;
  }
`;
const Title = styled(motion.h1)`
  margin-bottom: 4rem;
  color: black;

`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  display: inline-block;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
