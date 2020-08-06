import React from 'react';
import { Container, ButtonText, Spinner, Row } from './styles';
export const LoadingButton = ({ children, isLoading = false, ...props }) => {
  return (
    <Container {...props}>
      <ButtonText>{children}</ButtonText>
      <Spinner
        isVisible={isLoading}
        size={35}
        // type="ThreeBounce"
        color="white"
      />
    </Container>
  );
};

export default LoadingButton;
