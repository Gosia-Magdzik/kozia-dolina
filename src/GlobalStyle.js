import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    //font-family: 'Montserrat', sans-serif;
    background: #3549bbc9;
    margin: 0px;
    //transition: background 0.3s;
  };

  `;