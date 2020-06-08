import React from 'react';
import { Container, ButtonText } from './styles';

export const Button = ({ children, isLoading = false, ...props }) => {
  return (
    <Container {...props}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
