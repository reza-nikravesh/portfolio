import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { underLineAnim } from "../Animation";

export const Nav = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <NavBar>
      <h1 className="title">
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        {pages.map((item) => {
          return (
            <li key={item.id}>
              {currentPage.url === item.url ? (
                <PageLink current url={item.url} name={item.name} />
              ) : (
                <PageLink url={item.url} name={item.name} />
              )}
            </li>
          );
        })}
      </ul>
    </NavBar>
  );
};

const PageLink = ({ current, url, name }) => {
  return (
    <NavItem>
      <Link to={url}>{name}</Link>
      {current && (
        <motion.div
          variants={underLineAnim}
          initial="hide"
          animate="show"
          className="line"
        ></motion.div>
      )}
    </NavItem>
  );
};

const NavItem = styled(motion.div)`
  .line {
    width: 100%;
    min-height: 4px;
    background-color: #23d997;
  }
`;

const NavBar = styled.nav`
  display: flex;
  min-height: 10vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
  background-color: #282828;
  h1 {
    font-family: "Lobster", cursive;
    color: white;
    font-weight: 100;
  }
  h1 > a {
    text-decoration: none;
    font-family: "Lobster", cursive;
    color: white;
    font-weight: 100;
  }
  ul {
    display: flex;
    li {
      margin: 0 3rem;
      list-style: none;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;
export default Nav;
