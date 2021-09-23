import React from "react";
import styled from "styled-components";

const FaqSection = () => {
  return (
    <Faq>
      <div className="description">
        <h2>Any question?</h2>
        <h2>
          <span>FAQ</span>
        </h2>
      </div>
      <div className="question">
        <h4>HOW DO I START?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum
            recusandae debitis a, enim aliquid facilis, rem veniam itaque ad
            ipsa, ut illum! Ex eaque libero vitae fugit eius illum?
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Daily scheduel</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum
            recusandae debitis a, enim aliquid facilis, rem veniam itaque ad
            ipsa, ut illum! Ex eaque libero vitae fugit eius illum?
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Diferrent Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum
            recusandae debitis a, enim aliquid facilis, rem veniam itaque ad
            ipsa, ut illum! Ex eaque libero vitae fugit eius illum?
          </p>
        </div>
      </div>
      <div className="question">
        <h4>What Products do you offer</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum
            recusandae debitis a, enim aliquid facilis, rem veniam itaque ad
            ipsa, ut illum! Ex eaque libero vitae fugit eius illum?
          </p>
        </div>
      </div>
    </Faq>
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
