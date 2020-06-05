import React from 'react';
import { Container, ButtonText } from './styles';

export const Button = ({ children, isLoading = false, ...props }) => {
  return (
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};
