import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toast';
import { Wrapper } from './styles';

import Toast from '../Toast';

interface ToastMessageWrapperProps {
  messages: ToastMessage[];
}

const ToastWrapper: React.FC<ToastMessageWrapperProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Wrapper>
      {messagesWithTransition.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Wrapper>
  );
};

export default ToastWrapper;
