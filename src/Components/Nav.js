import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = () => {
  return (
    <NavBar>
      <h1 className="title">
        <Link to="/">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </NavBar>
  );
};

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
