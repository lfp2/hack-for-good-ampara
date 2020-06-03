/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components/native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';

export const Container = styled(({ orientation, ...props }) =>
  orientation === 'portrait' ? (
    <View {...props} />
  ) : (
    <DrawerContentScrollView {...props} />
  ),
)`
  flex: 1;
  box-shadow: 3px 0px 15px #00000029;
  elevation: 2;
`;

export const Header = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 30px 15px;
`;

export const ProfilePicture = styled.Image.attrs({
  source: require('../../assets/images/julio.png'),
})`
  width: 70px;
  height: 70px;
  border: 6px #8ce6ffcc;
  border-radius: 500px;
  margin: 0 10px;
`;

export const Info = styled.View`
  flex: 1;
  justify-content: center;
  /* padding: 0 5px; */
`;

export const Name = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const Role = styled.Text`
  font-size: 10px;
`;

export const Separator = styled.View`
  width: 80%;
  margin: 0 auto;
  height: 1px;
  background-color: #adadad29;
`;

export const AnchorText = styled.Text`
  color: #333333;
  font-weight: bold;
  font-size: 16px;
`;

export const Icon = styled(Ionicons).attrs({
  color: '#74B0E8',
  size: 30,
})`
  margin: 0 20px;
  width: 30px;
`;

export const Anchor = styled(({ icon, name, children, iconPack, ...props }) => (
  <TouchableOpacity {...props}>
    <Icon {...(iconPack ? { as: iconPack } : {})} name={icon} />
    <AnchorText>{children}</AnchorText>
  </TouchableOpacity>
))`
  flex-direction: row;
  padding: 20px 25px;
  align-items: center;
`;

export const BottomAnchor = styled(({ orientation, ...props }) => (
  <>
    {orientation === 'portrait' && <Separator style={{ marginTop: 'auto' }} />}
    <Anchor {...props} />
  </>
))``;

const backFoldSize = 80;
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const BackIcon = styled(Icon).attrs({
  name: 'ios-arrow-back',
  color: 'gray',
  size: 20,
})`
  right: -25px;
`;
export const BackFold = styled((props) => (
  <AnimatedTouchable {...props}>
    <BackIcon />
  </AnimatedTouchable>
))`
  width: ${backFoldSize}px;
  height: ${backFoldSize}px;
  border-radius: 500px;
  background-color: white;
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 50;
  justify-content: center;
  align-items: flex-end;
`;
