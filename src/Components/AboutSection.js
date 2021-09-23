import React from "react";
import home1 from "../img/home1.png";
const AboutSection = () => {
  return (
    <div className="AboutUs">
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
    </div>
  );
};
export default AboutSection;
