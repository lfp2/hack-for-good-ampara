import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  /* flex: 1; */
`;

const TimeText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${(p) => (p.selected ? p.theme.blue : p.theme.black)};
`;

export const Times = styled.View`
  width: 90%;
  margin: 5px auto;
  border-radius: 15px;
  border: 2px #dbd9d9;
  padding: 0 10px;
`;

export const Time = styled(({ time, selected, onSelect, ...props }) => (
  <TouchableOpacity {...props} onPress={onSelect}>
    <TimeText selected={selected}>{time}</TimeText>
  </TouchableOpacity>
))`
  margin: 10px auto;
  padding: 20px 10px;
`;
