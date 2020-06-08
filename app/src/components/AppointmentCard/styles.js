import React from 'react';
import styled, { css } from 'styled-components/native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const AppointmentCards = styled.View`
  width: 100%;
  max-width: 350px;
  margin: 10px auto;
  flex: 1;
`;

export const Container = styled.View`
  padding: 5px 10px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  elevation: 2;
  justify-content: center;
  align-items: center;
  margin: 10px 20px;
  border-radius: 10px;
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
  border-radius: 500px;
  flex: 1;
  margin: 10px;
  aspect-ratio: 1;
  border: 6px #74e8e2;
`;

export const Info = styled.View`
  margin: 0 10px;
  flex: 3;
`;

export const T = styled.Text`
  font-size: 12px;
  color: #333333;
`;

export const Name = styled.Text`
  color: #333333;
  font-family: 'Poppins';
  font-size: 15px;
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
  margin: 0 10px;
`;

export const DateSection = styled.View`
  margin: 16px 10px;
  flex-direction: row;
`;

const ButtonText = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  color: ${(p) => (p.type === 'primary' ? 'white' : '#74b0e8')};
`;

export const Button = styled(({ type, ...props }) => (
  <TouchableOpacity {...props}>
    <ButtonText type={type}>{props.children}</ButtonText>
  </TouchableOpacity>
))`
  padding: 10px 20px;
  border-radius: 50px;
  margin: 10px 0;
  flex: 1;
  box-shadow: 0px 5px 10px #00000029;
  elevation: 1;
  width: 100%;
  background-color: ${(p) => (p.type === 'primary' ? '#74b0e8' : 'white')};
`;

Button.defaultProps = {
  type: 'primary',
};

const CircleIcon = styled(FontAwesomeIcon)`
  color: ${(p) => (p.type === 'primary' ? 'white' : '#ADADAD')};
  font-size: 16px;
`;

export const CircleButton = styled(({ type, iconPack, icon, ...props }) => (
  <TouchableOpacity {...props}>
    <CircleIcon
      type={type}
      {...(iconPack ? { as: iconPack } : {})}
      name={icon}
    />
  </TouchableOpacity>
))`
  border-radius: 50px;
  box-shadow: 0px 5px 10px #00000029;
  elevation: 1;
  height: 32px;
  margin: 0 10px;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  background-color: ${(p) => (p.type === 'primary' ? '#74E8E2' : 'white')};
`;

CircleButton.defaultProps = {
  type: 'primary',
};
