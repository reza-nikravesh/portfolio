import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
const AboutSection = () => {
  return (
    <AboutUsSection>
      <div className="description">
        <div className="title">
          <h2 className="piece">We work to make</h2>
          <h2 className="piece">
            your <span>dreames</span> come
          </h2>
          <h2 className="piece">true.</h2>
        </div>
        <p>
          Join the World's leading platform for health, happiness, and
          performance.
        </p>
        <button>Contact us</button>
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
