import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Athele from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";
import MovieState from "../Data/MovieState";
const OurWork = () => {
  return (
    <Work>
      {MovieState().map((item) => {
        return (
          <Movie>
            <h2>{item.title}</h2>
            <div className="line"></div>
            <Link to={item.url}>
              <img src={item.mainImg} alt="item.title" />
            </Link>
          </Movie>
        );
      })}
    </Work>
  );
};
export default OurWork;

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
  .line {
    min-height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
