import styled from 'styled-components';

export const Container = styled.button`
  background: #ff9000;
  border: none;
  border-radius: 4px;
  color: #312e38;
  font-weight: 500;
  opacity: 1;
  padding: 1rem;
  transition: opacity 100ms ease-in-out;
  width: 100%;

  :focus,
  :hover {
    opacity: 0.7;
  }
`;
