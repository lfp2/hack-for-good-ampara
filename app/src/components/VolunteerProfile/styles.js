import React from 'react';
import styled from 'styled-components/native';
import { View, Button as BaseButton } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';

export const Container = styled.View`
  height: 100%;
  flex: 1;
  background: #74b0e8;
`;

export const Body = styled.View`
  margin-top: auto;
  height: 60%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;

export const ProfilePic = styled.Image.attrs({
  source: require('../../assets/images/julio.png'),
})`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-top: -75px;
  margin-bottom: 15px;
  border: 8px #74e8e2;
`;

export const Name = styled.Text`
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 29px;
`;

export const Role = styled.Text`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 18px;
  color: #333333;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const ButtonIcon = styled(Icon)``;

const ButtonText = styled.Text`
  color: #333333;
  text-align: center;
  font-family: 'Poppins';
  font-weight: bold;
`;

export const Button = styled((props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View {...props}>
      <ButtonIcon name={props.icon} color="#74E8E2" size={40} />
      <ButtonText>{props.children}</ButtonText>
    </View>
  </TouchableOpacity>
))`
  background-color: white;
  padding: 20px 10px;
  box-shadow: 0px 3px 6px #0000004d;
  border-radius: 10px;
  elevation: 1;
  justify-content: center;
  align-items: center;
  width: 150px;
  margin: 10px;
  flex-direction: column;
`;

export const Logo = styled.Image.attrs({
  source: require('../../assets/images/Ampara-Simbolo-branco.png'),
})`
  width: 150px;
  resize-mode: contain;
  margin: 5px auto;
`;

export const Title = styled.Text`
  color: #ffffff;
  text-align: center;
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 35px;
  margin: 0px auto;
`;

export const MenuButton = styled.Image.attrs({
  source: require('../../assets/icons/menu-btn.png'),
})`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 40px;
  resize-mode: contain;
`;

export const SwitchText = styled.Text`
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  margin: 20px auto;
`;
