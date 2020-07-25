import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }

  body {
    background-color: #312E38;
    font-size: 100%;
    color: #FFF;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
