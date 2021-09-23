import React from "react";
import styled from "styled-components";

export const Nav = () => {
  return (
    <NavBar>
      <h1 className="title">Capture</h1>
      <ul>
        <li>
          <a href="#">1. About Us</a>
        </li>
        <li>
          <a href="#">2. Our Work</a>
        </li>
        <li>
          <a href="#">3. Contact Us</a>
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
