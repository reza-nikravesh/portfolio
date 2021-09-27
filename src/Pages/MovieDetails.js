import { motion } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { pageAnimation } from "../Animation";
import MovieState from "../Data/MovieState";

export const MovieDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState());
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    setMovie(() => {
      let current = movies.filter((item) => item.url === url);
      return current[0];
    });
  }, [movie, url]);
  return (
    <>
      {movie && (
        <Details variants={pageAnimation} initial="hide" animate="show">
          <Headline>
            <h2>{movie === null ? null : movie.title}</h2>
            <img src={movie === null ? null : movie.mainImg} alt="item.title" />
          </Headline>
          <Awards>
            {movie.awards.map((item) => (
              <Award
                title={item.title}
                text={item.description}
                key={item.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 2rem;
  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 0.5rem 0rem 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
//award component
const Award = ({ text, title }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{text}</p>
    </AwardStyle>
  );
};
