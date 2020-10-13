import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
    font-family: 'Quantico', sans-serif;
  }
  button {
    cursor: pointer;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

`;
