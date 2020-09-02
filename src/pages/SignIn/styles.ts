import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 4rem 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
`;
