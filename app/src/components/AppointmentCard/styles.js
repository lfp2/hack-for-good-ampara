import React from 'react';
import styled, { css } from 'styled-components/native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const AppointmentCards = styled.View`
  width: 100%;
  margin: 10px auto;
  flex: 1;
`;

export const Container = styled.View`
  padding: 5px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  elevation: 2;
  justify-content: center;
  align-items: center;
  margin: 10px 20px;
  border-radius: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  /* width: 100%; */
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ProfilePic = styled.Image.attrs({
  source: require('../../assets/images/emanuelly.png'),
})`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 0 10px;
  border: 7px #74e8e2;
`;

export const Info = styled.View`
  margin: 0 10px;
`;

export const T = styled.Text`
  font-size: 12px;
  color: #333333;
`;

export const Name = styled.Text`
  color: #333333;
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: bold;
`;

export const Desc = styled.Text`
  color: #333333;
  font-size: 10px;
`;

const Time = styled.Text`
  color: #74b0e8;
  font-size: 12px;
  width: 35px;
`;

const Value = styled.Text`
  margin-left: 0px;
  font-size: 12px;
`;

export const DateRow = styled((props) => (
  <View {...props}>
    <Time>{props.time}</Time>
    <Value>{props.children}</Value>
  </View>
))`
  flex-direction: row;
`;

export const DateSection = styled.View`
  margin: 16px 10px;
`;

const ButtonText = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  color: white;
`;
const SecondaryButtonText = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  color: #74b0e8;
`;

const btnstyles = css`
  padding: 15px 20px;
  border-radius: 50px;
  margin: 10px 0;
  box-shadow: 0px 5px 10px #00000029;
  elevation: 1;
`;

export const Button = styled((props) => (
  <TouchableOpacity {...props}>
    <ButtonText>{props.children}</ButtonText>
  </TouchableOpacity>
))`
  background-color: #74b0e8;
  ${btnstyles}
`;
export const SecondaryButton = styled((props) => (
  <TouchableOpacity {...props}>
    <SecondaryButtonText>{props.children}</SecondaryButtonText>
  </TouchableOpacity>
))`
  background-color: white;
  ${btnstyles}
`;
export const Column = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */
  flex: 1;
`;
