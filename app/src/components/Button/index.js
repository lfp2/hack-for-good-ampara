import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const ButtonText = styled.Text`
  font-size: 14px;
  font-family: Poppins-Medium;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${(p) => (p.type === 'primary' ? 'white' : '#333333')};
`;

const Button = styled(({ type, ...props }) => (
  <TouchableOpacity {...props}>
    <ButtonText type={type}>{props.children}</ButtonText>
  </TouchableOpacity>
))`
  padding: 12px 25px;
  border-radius: 500px;
  margin: 10px auto;
  box-shadow: 0px 5px 10px #00000029;
  elevation: 1;
  width: ${(props) => props.width || '90%'};
  max-width: 350px;
  background-color: ${(p) => (p.type === 'primary' ? '#74b0e8' : 'white')};
`;

Button.defaultProps = {
  type: 'primary',
};

export default Button;
