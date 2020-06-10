import React from 'react';
import styled from 'styled-components/native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const AnchorText = styled.Text`
  color: #333333;
  font-weight: bold;
  font-size: 16px;
`;

export const Icon = styled(FontAwesome5Icons).attrs({
  color: '#74B0E8',
  size: 25,
})`
  margin: 0 20px;
  width: 30px;
  /* height: 30px; */
`;

export const Separator = styled.View`
  width: 80%;
  margin: 0 auto;
  height: 1px;
  background-color: #adadad29;
`;

const RightArrow = styled(SimpleLineIcons).attrs({
  size: 18,
  color: 'rgba(0,0,0,0.4)',
  name: 'arrow-right',
})`
  margin-left: auto;
  font-weight: bold;
`;

export const Anchor = styled(({ icon, name, children, iconPack, ...props }) => (
  <>
    <TouchableOpacity {...props}>
      <Icon {...(iconPack ? { as: iconPack } : {})} name={icon} />
      <AnchorText>{children}</AnchorText>
      <RightArrow />
    </TouchableOpacity>
    <Separator />
  </>
))`
  flex-direction: row;
  padding: 20px 25px;
  align-items: center;
`;

export const Anchors = styled.View`
  flex-direction: column;
  margin: 20px 0;
`;
