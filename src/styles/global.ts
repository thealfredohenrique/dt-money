import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme["gray-500"]};
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
  }

  body,
  button,
  input,
  textarea {
    font: 400 1rem Roboto, sans-serif;
  }
`;
