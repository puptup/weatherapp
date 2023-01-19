import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body{
    background-color: #8db7eb;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
`;
