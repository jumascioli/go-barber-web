import React from 'react';

import { Container } from './styles';

interface BackgroundImgProps {
  image: string;
}

const Button: React.FC<BackgroundImgProps> = ({ image }) => (
  <Container image={image} />
);

export default Button;
