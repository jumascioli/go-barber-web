import { createGlobalStyle } from 'styled-components';
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
  }

  html {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: "Roboto", "Ubuntu", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Oxygen", "Helvetica Neue", Arial, sans-serif;
    font-size: 100%;
    height: 100%;
    margin: 0;
  }

  input, button {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  #root {
    height: 100%;
  }
`;
