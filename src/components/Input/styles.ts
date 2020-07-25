import styled, { css } from 'styled-components';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const Content = styled.div<InputProps>`
  background-color: #232129;
  border: 2px solid #232129;
  border-radius: 4px;
  display: flex;
  align-items: center;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    background: transparent;
    border: none;
    color: #fff;
    flex: 1;
    padding: 16px;

    ::placeholder {
      color: #666360;
    }
  }

  svg {
    margin: 0 1rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  margin-top: 0.25rem;
  text-align: left;
`;

export const ErrorIcon = styled(FiAlertCircle)`
  color: #c53030;
`;
