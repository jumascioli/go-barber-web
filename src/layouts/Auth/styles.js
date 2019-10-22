import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  height: 100%;
`;

export const Content = styled.div`
  max-width: 316px;
  text-align: center;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 2em;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 4px;
      color: #fff;
      font-size: 0.875em;
      height: 3em;
      margin: 0.625em 0 0;
      padding: 0 1em;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      background-color: #3b9eff;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-size: 0.875em;
      font-weight: bold;
      height: 3em;
      margin: 1em 0 0;
      padding: 0 1em;
      transition: background-color 0.15s ease-in-out;

      &:focus,
      &:hover {
        background-color: #2c8cea;
      }
    }

    a {
      color: #fff;
      font-size: 0.875em;
      margin-top: 1em;
      opacity: 0.7;
      text-decoration: none;
      transition: opacity 0.15s ease-in-out;

      &:focus,
      &:hover {
        opacity: 1;
      }
    }

    span {
      align-self: flex-start;
      color: #fff;
      font-size: 0.875em;
      font-style: italic;
      margin: 0.25em 0 0.5em 0.25em;
      opacity: 0.8;
    }
  }
`;
