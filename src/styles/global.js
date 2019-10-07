import { createGlobalStyle } from 'styled-components';
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: "Roboto", "Ubuntu", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Oxygen", "Helvetica Neue", Arial, sans-serif;
    font-size: 90%;
  }

  input, button {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  #root {
    margin: 0 auto;
    max-width: 63.75rem;
  }
`;
