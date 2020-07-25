import React, {
  InputHTMLAttributes,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';

import { Container, Content, ErrorMessage, ErrorIcon } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Content isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
        {Icon && <Icon size={20} />}

        <input
          defaultValue={defaultValue}
          ref={inputRef}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...rest}
        />

        {error && <ErrorIcon size={20} />}
      </Content>

      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
};

export default Input;
