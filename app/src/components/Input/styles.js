import React from 'react';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  width: 90%;
  max-width: 350px;
  margin: 10px auto;
`;

export const Label = styled.Text`
  color: #479dec;
  font-weight: bold;
`;

export const Line = styled.View`
  background-color: #7777774d;
  width: 100%;
  height: 2px;
  margin: 2px 0;
`;

export const TextInput = styled.TextInput`
  padding: 5px 5px;
  flex: 1;
`;

export const Error = styled.Text`
  color: #ff0000;
  /* margin: 3px 0; */
`;

export const InputIcon = styled(Icon)`
  color: #76b1e6;
  font-size: 24px;
  margin: 10px;
  ${(props) =>
    props.reverse &&
    css`
      transform: scaleX(-1);
    `}
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Hint = styled.Text`
  color: #adadad;
  font-size: 10px;
`;
export const EyeIcon = styled(FontAwesomeIcons)`
  color: #adadad;
  font-size: 20px;
`;

export const HintedError = styled(Error)`
  font-size: 10px;
`;

export const Eye = styled(({ name, ...props }) => (
  <TouchableOpacity {...props}>
    <EyeIcon name={name} />
  </TouchableOpacity>
))`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;
