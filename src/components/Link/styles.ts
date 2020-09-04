import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

export const Wrapper = styled(Link)<LinkProps>`
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
