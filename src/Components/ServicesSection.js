import React from "react";
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

export const ServicesSection = () => {
  return (
    <div className="services-section">
      <img src={home2} alt="camera" />

      <div className="services">
        <div className="description">
          <h2 className="piece">
            High <span>quality</span>
          </h2>
          <h2 className="piece">service.</h2>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={clock} alt="" />
                <h3>Efficient</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus cumque, non architecto quaerat aspernatur explicabo
                quidem, placeat eos maiores ea et. Praesentium repellendus
                voluptates molestias cum vero saepe voluptate temporibus!
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus cumque, non architecto quaerat aspernatur explicabo
              quidem, placeat eos maiores ea et. Praesentium repellendus
              voluptates molestias cum vero saepe voluptate temporibus!
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={money} alt="" />
            <h3>Efficient</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus cumque, non architecto quaerat aspernatur explicabo
            quidem, placeat eos maiores ea et. Praesentium repellendus
            voluptates molestias cum vero saepe voluptate temporibus!
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <img src={teamwork} alt="" />
          <h3>Efficient</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          cumque, non architecto quaerat aspernatur explicabo quidem, placeat
          eos maiores ea et. Praesentium repellendus voluptates molestias cum
          vero saepe voluptate temporibus!
        </p>
      </div>
    </div>
  );
};
