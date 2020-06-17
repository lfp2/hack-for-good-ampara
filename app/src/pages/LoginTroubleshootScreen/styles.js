import React from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

export const Illustration = styled.Image.attrs({
  source: require('../../assets/images/forgot-password.png'),
})`
  width: 60%;
  max-width: 350px;
  margin: 15px auto;
  resize-mode: contain;
`;

export const Title = styled.Text`
  margin: 10px auto;
  font-family: Poppins;
  font-weight: bold;
  font-size: 25px;
  color: #333333;
`;
export const Info = styled.Text`
  margin: 10px auto;
  text-align: center;
`;
const Separator = styled.View`
  flex: 1;
  margin: 0 50px;
  width: 30%;
  height: 1.5px;
  background-color: #adadad;
`;
const Or = styled.Text`
  font-size: 14px;
  font-family: Poppins;
  font-weight: bold;
  color: #333333;
`;

export const ORSeparator = styled((props) => (
  <View {...props}>
    <Separator />
    <Or>OU</Or>
    <Separator />
  </View>
))`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const InvisibleButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #333333;
`;

export const InvisibleButton = styled(({ children, ...props }) => (
  <TouchableOpacity {...props}>
    <InvisibleButtonText>{children}</InvisibleButtonText>
  </TouchableOpacity>
))`
  margin: 15px auto;
  padding: 20px 0;
`;
