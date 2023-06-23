import { createGlobalStyle, styled } from "styled-components";
import meadow from "./images/meadow.jpg";
import { Container } from "react-bootstrap";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-image: url(${meadow});
    background-size: contain;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  };
`;

  export const StyledContainer = styled(Container)`
    margin: 200px 30px 50px 30px;
    width: 2000px;
    padding: 25px;
    background-color: #efefefa6;
    border-radius: 20px;
    box-shadow: 10px 10px 11px -2px rgba(66, 68, 90, 1);

  @media (max-width: 768px) {
    width: 100%;
    margin: 200px 10px 50px 10px;
    padding: 5px;
  }

  @media (max-width: 575px) {
    width: 100%;
    margin: 200px 5px 50px 5px;
    margin-left: 15px;
    padding: 3px;
  }
`;