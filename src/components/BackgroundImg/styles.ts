import styled from 'styled-components';

interface BackgroundImgProps {
  image: string;
}

export const Container = styled.div<BackgroundImgProps>`
  background: url(${({ image }) => image}) no-repeat center;
  background-size: cover;
  flex: 1;
`;
