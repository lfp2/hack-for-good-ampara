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
export const IconedContainer = styled(Container)`
  margin: 2px auto;
`;

export const Label = styled.Text`
  color: #479dec;
  font-weight: bold;
`;

export const Line = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 1px;
  margin-top: 2px;
`;

export const TextInput = styled.TextInput`
  padding: 5px 5px;
  background-color: white;

  flex: 1;
`;
export const ModalTextInput = styled.TextInput`
  padding: 5px 5px;
  background-color: white;
`;

export const Error = styled.Text`
  color: #ff0000;
  /* margin: 3px 0; */
`;

export const InputIcon = styled(Icon).attrs({
  size: 20,
})`
  color: #76b1e6;
  /* font-size: 24px; */
  margin: 10px;
  height: 20px;
  width: 20px;
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

export const ModalOverlay = styled.KeyboardAvoidingView.attrs({
  behavior: 'height',
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* height: 100%;
  width: 100%; */
  /* flex: 1; */
  background-color: white;
  z-index: 10;
`;

export const InnerModal = styled.View`
  flex: 1;
  /* background-color: yellow; */
  z-index: 15;
`;

export const InputWrapper = styled.View`
  width: 90%;
  margin: 10px auto;
  border: 0 #adadad;
  border-bottom-width: 1px;
`;

export const Counter = styled.Text`
  /* position: absolute; */
  /* bottom: 30px; */
  /* right: 20px; */
  margin-left: auto;
  margin-right: 30px;
  text-align: right;
  color: ${(props) => (props.isRed ? 'red' : '#adadad')};
  font-size: 20px;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  align-items: center;
  position: absolute;
  right: 15px;
`;

export const FinishText = styled.Text`
  color: #74b0e8;
  font-weight: bold;
`;
