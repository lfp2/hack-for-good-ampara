/* eslint-disable react-native/no-inline-styles */
import styled, { css } from 'styled-components/native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Overlay = styled.View`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  elevation: 2;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  opacity: 0;
  ${(p) =>
    p.isOn &&
    css`
      opacity: 1;
    `}
`;

export const Container = styled.View`
  box-shadow: 0px 5px 30px #00000029;
  background: ${(props) => props.theme.white};
  border-radius: 15px;
  padding: 5px;
  width: 80%;

  /* height: fit-content; */
`;

export const Icon = styled.Image`
  width: 300px;
  height: 200px;
  resize-mode: contain;
  margin: 0 auto;
`;

export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  padding: 0 20px;
  color: ${(props) => props.theme.black};
`;

export const Desc = styled.Text`
  text-align: center;
  font-size: 15px;
  padding: 0 30px;
  color: ${(props) => props.theme.black};
  margin: 10px auto;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  color: ${(p) => (p.type === 'primary' ? p.theme.white : p.theme.black)};
  font-weight: bold;
  text-align: center;
`;

export const ModalBigButton = styled(({ type, ...props }) => (
  <TouchableOpacity {...props}>
    <ButtonText type={type}>{props.children}</ButtonText>
  </TouchableOpacity>
))`
  background-color: ${(p) =>
    p.type === 'primary' ? p.theme.blue : p.theme.white};
  padding: 10px 15px;
  border-radius: 26px;
  margin: 10px auto;
  width: 80%;
  box-shadow: 0px 5px 10px #00000029;
  elevation: 1;
`;

ModalBigButton.defaultProps = {
  type: 'primary',
};

export const ModalSmallButton = styled(ModalBigButton)`
  padding: 10px 35px;
  border-radius: 26px;
  margin: 30px 20px;
  /* width: 100px; */
`;

export const ModalButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
