import React from 'react';
import { LinkProps } from 'react-router-dom';

import { Wrapper } from './styles';

const Link: React.FC<LinkProps> = ({ children, to, ...rest }) => (
  <Wrapper to={to} {...rest}>
    {children}
  </Wrapper>
);

export default Link;
