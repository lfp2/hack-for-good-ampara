import styled from 'styled-components/native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.white};
`;

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.white};
  flex: 1;
`;

const Text = styled.Text`
  color: ${(props) => props.theme.black};
  margin: 0;
  width: 100%;
  padding: 0 20px;
  text-align: left;
`;

export const Title = styled(Text)`
  font-family: Poppins-SemiBold;
  font-size: 16px;
  width: 100%;
  max-width: 500px;
`;

export const Description = styled(Text)`
  font-family: Poppins-Regular;
  font-size: 14px;
  margin: 10px 0;
  width: 100%;
  max-width: 500px;
`;

export const Section = styled.View`
  margin: 10px 0;
  width: 100%;
  max-width: 500px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  color: ${(p) => (p.type === 'primary' ? p.theme.white : p.theme.black)};
  font-weight: bold;
  text-align: center;
`;

export const Button = styled(({ type, ...props }) => (
  <TouchableOpacity {...props}>
    <ButtonText type={type}>{props.children}</ButtonText>
  </TouchableOpacity>
))`
  background-color: ${(p) =>
    p.type === 'primary' ? p.theme.blue : p.theme.white};
  padding: 10px 15px;
  border-radius: 26px;
  margin: 10px auto;
  width: 120px;
  height: 40px;
  box-shadow: 0px 5px 10px #00000029;
  elevation: 1;
`;

Button.defaultProps = {
  type: 'primary',
};

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px;
`;
