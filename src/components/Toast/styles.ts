import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface WrapperProps {
  type?: 'success' | 'error' | 'info';
}

const toastTypes = {
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background-color: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background-color: #fddede;
    color: #c53830;
  `,
};

export const Wrapper = styled(animated.div)<WrapperProps>`
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  margin-bottom: 0.5rem;
  padding: 1rem 2rem 1rem 1rem;
  position: relative;
  width: 360px;

  ${({ type }) => toastTypes[type || 'info']}

  > svg {
    margin: 0.0625rem 0.75rem 0 0;
  }
`;

export const Info = styled.p`
  flex: 1;

  span {
    display: block;
    font-size: 0.875rem;
    line-height: 1.3;
    margin-top: 0.25rem;
    opacity: 0.8;
  }
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: 0;
  color: inherit;
  position: absolute;
  top: 1.125rem;
  right: 1rem;
  opacity: 0.6;
`;
