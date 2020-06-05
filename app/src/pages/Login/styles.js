import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  background-color: white;
`;

export const Logo = styled.Image.attrs({
  source: require('../../assets/images/Ampara-Simbolo.png'),
})`
  resize-mode: contain;
  min-width: 150px;
  width: 40%;
  margin: 10px auto;
`;

const ForgotText = styled.Text`
  color: #479dec;
  margin: 10px 0;
  margin-left: auto;
`;

export const Forgot = styled(({ children, ...props }) => (
  <TouchableOpacity {...props}>
    <ForgotText>{children}</ForgotText>
  </TouchableOpacity>
))`
  width: 90%;
  max-width: 350px;
  margin: 0 auto;
`;

const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Button = styled(({ children, ...props }) => (
  <TouchableOpacity {...props}>
    <ButtonText>{children}</ButtonText>
  </TouchableOpacity>
))`
  width: 90%;
  max-width: 350px;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  background-color: #74b0e8;
  padding: 15px 0;
  border-radius: 500px;
`;
