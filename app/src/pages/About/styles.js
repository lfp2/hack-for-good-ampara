import React from 'react';
import styled from 'styled-components/native';
import { Linking, TouchableOpacity, View } from 'react-native';

export const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: require('../../assets/images/Ampara-Logo-preto.png'),
})`
  margin: 10px auto;
  width: 60%;
  min-width: 200px;
  resize-mode: contain;
`;

export const Text = styled.Text`
  font-family: Poppins;
  color: #333333;
  margin: 0;
  width: 100%;
  padding: 0 20px;
  text-align: left;
`;

export const Description = styled(Text)`
  margin: 10px 0;
  width: 100%;
  max-width: 500px;
`;
export const LinkText = styled(Text)`
  color: #74b0e8;
`;

export const Section = styled.View`
  margin: 10px 0;
  width: 100%;
  max-width: 500px;
`;

export const Link = styled(({ to, children, ...props }) => (
  <TouchableOpacity
    onPress={() => {
      Linking.openURL(to);
    }}
    {...props}>
    <LinkText>{children}</LinkText>
  </TouchableOpacity>
))`
  margin: 3px 0;
`;
