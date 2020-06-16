import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonIcon = styled(Icon)`
  width: 30px;
`;

const ButtonText = styled.Text`
  color: #333333;
  text-align: center;
  font-family: 'Poppins';
  font-weight: bold;
`;

export const ProfileButtons = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const ProfileButton = styled(({ iconPack, ...props }) => (
  <TouchableOpacity onPress={props.onPress}>
    <View {...props}>
      <ButtonIcon
        {...(iconPack ? { as: iconPack } : {})}
        name={props.icon}
        color="#74E8E2"
        size={30}
      />
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

export default ProfileButton;
