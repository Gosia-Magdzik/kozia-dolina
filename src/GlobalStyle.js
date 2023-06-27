import { createGlobalStyle, styled } from "styled-components";
import { Container } from "react-bootstrap";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-color: #2e66668a;
    margin: 0;
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
    margin: 200px 10px 50px 10px;
    padding: 5px;
  }

  @media (max-width: 575px) {
    width: 500px;
    margin: 200px 5px 50px 5px;
    padding: 3px;
  }
`;