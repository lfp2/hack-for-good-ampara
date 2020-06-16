import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    // flex: 1,
    // marginBottom: 20,
  },
})`
  height: 100%;
  position: relative;
  flex: 1;
  background: white;
`;

export const Body = styled.View`
  /* margin-top: 80px; */
  /* height: 60%; */
  flex: 1;
  /* margin-bottom: 20px; */
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background: white; */
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
  background-color: white;
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
  background-color: #74b0e8;
`;

export const ProfilePic = styled.Image.attrs({
  source: require('../../assets/images/julio.png'),
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

export const LogoBranca = styled.Image.attrs({
  source: require('../../assets/images/Ampara-Simbolo-branco.png'),
})`
  /* width: 150px; */
  height: 50px;
  resize-mode: contain;
  margin: 10px auto;
`;

export const Title = styled.Text`
  color: #ffffff;
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
  source: require('../../assets/icons/menu-btn.png'),
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
  background-color: #74b0e8;
  flex-direction: column;
`;
