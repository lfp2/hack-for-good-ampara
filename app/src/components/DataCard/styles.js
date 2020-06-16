import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
  width: 80%;
  max-width: 300px;
  padding: 5px 0;
`;

export const Data = styled.Text`
  flex: 1;
`;

const TrashIconSize = 30;

const Icon = styled(FontAwesome5Icons).attrs({
  size: TrashIconSize / 2,
  color: 'white',
})``;

export const TrashIcon = styled((props) => (
  <TouchableOpacity {...props}>
    <Icon name="trash" />
  </TouchableOpacity>
))`
  margin: 0 20px;
  border-radius: ${Math.ceil(TrashIconSize / 2)}px;
  width: ${TrashIconSize}px;
  height: ${TrashIconSize}px;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
`;
