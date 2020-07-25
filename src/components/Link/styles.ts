import styled from 'styled-components';

export const Container = styled.a`
  color: #fff;
  display: block;
  margin-top: 1.5rem;
  text-decoration: none;
  opacity: 1;
  transition: opacity 100ms ease-in-out;

  :focus,
  :hover {
    opacity: 0.7;
  }
`;
