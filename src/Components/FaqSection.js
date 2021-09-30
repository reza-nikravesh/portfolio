import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { UseScroll } from "./UseScroll";
const FaqSection = () => {
  return (
    <UseScroll>
      <Faq>
        <div className="description">
          <h2>Any question?</h2>
          <h2>
            <span>FAQ</span>
          </h2>
        </div>
        <AnimateSharedLayout>
          <Toggle title="HOW DO I START?">
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                nostrum recusandae debitis a, enim aliquid facilis, rem veniam
                itaque ad ipsa, ut illum! Ex eaque libero vitae fugit eius
                illum?
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
        <Toggle title="Daily scheduel">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              nostrum recusandae debitis a, enim aliquid facilis, rem veniam
              itaque ad ipsa, ut illum! Ex eaque libero vitae fugit eius illum?
            </p>
          </div>
        </Toggle>
        <Toggle title="Diferrent Payment Methods">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              nostrum recusandae debitis a, enim aliquid facilis, rem veniam
              itaque ad ipsa, ut illum! Ex eaque libero vitae fugit eius illum?
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              nostrum recusandae debitis a, enim aliquid facilis, rem veniam
              itaque ad ipsa, ut illum! Ex eaque libero vitae fugit eius illum?
            </p>
          </div>
        </Toggle>
      </Faq>
    </UseScroll>
  );
};

export const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
    </motion.div>
  );
};

const Faq = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  h2 {
    color: white;
    font-size: 4rem;
    font-weight: 100;
    @media screen and (max-width: 460px) {
    font-size: 3rem;

    }
    & span {
      color: #23d997;
      font-weight: bold;
    }
  }
  .question {
    padding: 1rem 0;
    border-bottom: 4px solid #cccccc;
    cursor: pointer;

    & h4 {
      color: white;
      font-size: 1.4rem;
    }
    p {
      color: #ccc;
    }
  }
`;

export default FaqSection;
