import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../hooks/toast';
import { Wrapper, Info, ButtonClose } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const iconSize = 24;

const icons = {
  info: <FiInfo size={iconSize} />,
  error: <FiAlertCircle size={iconSize} />,
  success: <FiCheckCircle size={iconSize} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Wrapper type={message.type} style={style}>
      {icons[message.type || 'info']}

      <Info>
        <strong>{message.title}</strong>

        {!!message.description && <span>{message.description}</span>}
      </Info>

      <ButtonClose type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </ButtonClose>
    </Wrapper>
  );
};

export default Toast;
