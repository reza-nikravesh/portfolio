import React from "react";
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { UseScroll } from "./UseScroll";

const ServicesSection = () => {
  return (
    <UseScroll vieww={0.5}>
      <Services>
        <div className="description">
          <h2 className="piece">
            High <span>quality </span>service.
          </h2>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={clock} alt="" />
                <h3>Efficient</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                voluptates molestias cum vero saepe voluptate temporibus!
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={diaphragm} alt="" />
                <h3>Teamwork</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus cumque, non architecto quaerat aspernatur explicabo
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={money} alt="" />
                <h3>Pro Grade Gear</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                voluptates molestias cum vero saepe voluptate temporibus!
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={teamwork} alt="" />
                <h3>Affordable</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus cumque, non architecto quaerat aspernatur explicabo
              </p>
            </div>
          </div>
        </div>
        <img className="home2" src={home2} alt="camera" />
      </Services>
    </UseScroll>
  );
};

const Services = styled(motion.div)`
  display: flex;
  padding: 5rem 9rem;
  min-height: 90vh;

  @media screen and (max-width: 460px) {
    padding: 1rem;
    text-align: center;
    display: block;
  }
  .home2 {
    @media screen and (max-width: 460px) {
      width: 70%;
    }
  }
  .piece {
    color: white;
    font-weight: lighter;
    font-size: 4.2rem;
  }
  .piece span {
    color: #23d997;
    font-weight: bold;
  }
  .cards {
    grid-gap: 0.5rem;
    margin: 2rem 0;
    width: 70%;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    text-align: start;
  }
  .card {
    color: #ccc;
    margin: 0.5rem;
    .icon {
      margin: 0.3rem 0;
      display: flex;
      align-items: center;
      h3 {
        background-color: white;
        margin-left: 0.3rem;
        padding: 0.3rem;
        color: #1b1b1b;
      }
    }
  }
`;

export default ServicesSection;
