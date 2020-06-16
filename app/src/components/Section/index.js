import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Linking } from 'react-native';

export const Text = styled.Text`
  font-family: Poppins;
  color: #333333;
  margin: 0;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  text-align: left;
`;

export const Title = styled(Text)`
  font-family: Poppins-SemiBold;
  font-size: 16px;
`;

export const Description = Text;

export const LinkText = styled(Text)`
  color: #74b0e8;
`;

export const BgEffect = styled.Image.attrs({
  source: require('../../assets/images/bg-effect.png'),
})`
  width: 100%;
  height: 100px;
  margin-top: 15px;
  resize-mode: stretch;
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

const Section = styled.View`
  margin: 10px 0;
  width: 100%;
  max-width: 500px;
`;

Section.Text = Text;
Section.Description = Description;
Section.Link = Link;

export default Section;
