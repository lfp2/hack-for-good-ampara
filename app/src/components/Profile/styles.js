import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Logo = styled.Image`
  height: 50px;
  margin: 10px;
  resize-mode: contain;
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

export const TextTitle = styled.Text`
  font-family: Suprema-Bold;
  color: ${(props) => props.theme.white};
  font-size: 24px;
  text-align: center;
`;

export const Container = styled.ScrollView`
  height: 100%;
  position: relative;
  flex: 1;
  background: ${(props) => props.theme.white};
`;

export const Body = styled.View`
  /* margin-top: 80px; */
  /* height: 60%; */
  flex: 1;
  /* margin-bottom: 20px; */
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background: ${(props) => props.theme.white}; */
  margin-top: 90px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  position: relative;
`;

const InnerBorder = styled.View`
  position: absolute;
  bottom: -10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  left: 0;
  right: 0;
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.theme.white};
`;
export const Border = styled((props) => (
  <View {...props}>
    <InnerBorder />
  </View>
))`
  position: absolute;
  top: -90px;
  left: 0;
  right: 0;
  width: 100%;
  height: 90px;
  background-color: ${(props) => props.theme.blue};
`;

export const ProfilePic = styled.Image.attrs({
  source: require('src/assets/images/profile-ex.png'),
})`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-top: -90px;
  margin-bottom: 15px;
  border-width: 8px;
  border-color: #74e8e2;
`;

export const Name = styled.Text`
  font-family: Poppins-Bold;
  font-weight: bold;
  color: ${(props) => props.theme.black};
  font-size: 24px;
`;

export const Role = styled.Text`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.black};
`;

export const LogoBranca = styled.Image.attrs({
  source: require('src/assets/images/Ampara-Simbolo-branco.png'),
})`
  /* width: 150px; */
  height: 50px;
  resize-mode: contain;
  margin: 10px auto;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.white};
  text-align: center;
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 35px;
  margin: 0px auto;
`;

export const MenuBtnWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 25px;
`;

export const MenuBtn = styled.Image.attrs({
  source: require('src/assets/icons/menu-btn.png'),
})`
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

export const TopSection = styled.View`
  background-color: ${(props) => props.theme.blue};
  flex-direction: column;
`;
