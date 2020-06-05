import React from 'react';
import { Picker as BasePicker } from '@react-native-community/picker';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  max-width: 350px;
  margin: 10px auto;
`;

export const PickerWrapper = styled.View`
  border: 2px #7777774d;
  border-radius: 5px;
  width: 100%;
  margin: 2px 0;
`;

export const Picker = styled((props) => (
  <BasePicker {...props} mode="dropdown" />
))``;

export const Error = styled.Text`
  color: #ff0000;
`;
