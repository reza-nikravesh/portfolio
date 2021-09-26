import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body{
    background: #1b1b1b;
}
button{
    
    background-color: transparent;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}
`;

export default GlobalStyle;
