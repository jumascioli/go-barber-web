import React, { AnchorHTMLAttributes } from 'react';

import { Container } from './styles';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Link;
