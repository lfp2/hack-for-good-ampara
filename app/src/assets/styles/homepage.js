import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MenuButton = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
    padding: 10px;
    border-radius: 20px;
    background: #ffff;
    justify-content: center;
    align-content: center;
    shadowColor: rgba(0,0,0,0.4);
    shadowOffset: {
        width: 0,
        height:1,
    };
    shadowOpacity: 0.05;
    elevation: 2;
`;

export const RectangleBackground = styled.View`
  position: absolute;
  height: 60%;
  width: 100%;
  background: #76b1e6;
  top: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const MenuIcon = styled(Icon)`
  color: #79e7e1;
  font-size: 30px;
`;

export const MenuIconView = styled.View`
  align-items: center;
`;

export const MenuText = styled.Text`
  color: #000000;
  font-size: 12px;
  margin: 2px;
  text-align: center;
  font-family: Suprema-Bold;
`;

export const MenuRow = styled.View`
  justify-content: space-around;
  flex-direction: row;
  margin: 10px;
`;

export const MenuView = styled.View`
  margin: 24px;
  width: 80%;
`;

export const Logo = styled.Image`
  height: 50px;
  margin: 10px;
  resize-mode: contain;
`;

export const HeaderView = styled.View`
  margin: 24px;
  flex: 2;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

export const CircleButton = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  padding: 5px;
  border-radius: 200px;
  background: #79e7e1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PrimaryText = styled.Text`
  color: #fff;
  font-size: 24px;
  text-align: left;
  font-family: Suprema-SemiBold;
`;
export const SecondaryText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: left;
  font-family: Suprema-Light;
`;

export const HeaderTextView = styled.View`
  justify-content: flex-start;
  margin: 10px;
`;

export const HeaderPictureTextView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const TextTitle = styled.Text`
  font-family: Suprema-Bold;
  color: #fff;
  font-size: 24px;
  text-align: center;
`;

import React from 'react';
import { View, Button as BaseButton } from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';

export const Container = styled.ScrollView`
  height: 100%;
  flex: 1;
  background: #74b0e8;
`;

export const Body = styled.View`
  /* margin-top: auto; */
  margin-top: 80px;
  /* height: 60%; */
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
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

export const LogoBranca = styled.Image.attrs({
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

export const MenuBtn = styled.Image.attrs({
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
