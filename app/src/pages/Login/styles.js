import React from 'react';
import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.white};
`;

const centerize = css`
  width: 90%;
  max-width: 350px;
  margin: 0 auto;
`;

export const Logo = styled.Image.attrs({
  source: require('src/assets/images/Ampara-Simbolo.png'),
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

export const InfoRow = styled.View`
  ${centerize}
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Forgot = styled(({ children, ...props }) => (
  <TouchableOpacity {...props}>
    <ForgotText>{children}</ForgotText>
  </TouchableOpacity>
))``;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.white};
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
  ${centerize}
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.blue};
  padding: 15px 0;
  border-radius: 500px;
`;

export const Error = styled.Text`
  color: #ff0000;
`;

export const Separator = styled.View`
  ${centerize}
  height: 1px;
  margin: 10px auto;
  background-color: #7777774d;
`;

export const ClickableRow = styled.TouchableOpacity`
  ${centerize};
  flex-direction: row;
  margin: 10px auto;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #adadad;
  font-size: 14px;
`;

export const Link = styled.Text`
  color: ${(props) => props.theme.blue};
  margin: 0 10px;
`;
