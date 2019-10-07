import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 316px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 2em;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 4px;
      color: #fff;
      height: 3em;
      margin: 0 0 0.625em;
      padding: 0 1em;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;
