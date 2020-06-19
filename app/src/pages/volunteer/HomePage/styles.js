import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { StyledSwitch } from 'src/components/Switch/base';

const SwitchText = styled.Text`
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const HealthSwitch = styled(
  ({ children, onValueChange, value, ...props }) => (
    <View {...props}>
      <SwitchText>{children}</SwitchText>
      <StyledSwitch value={value} onValueChange={onValueChange} />
    </View>
  ),
)`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  margin: 20px auto;
`;
