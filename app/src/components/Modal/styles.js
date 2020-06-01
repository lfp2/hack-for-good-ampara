import styled from 'styled-components/native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Overlay = styled.View`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  box-shadow: 0px 5px 30px #00000029;
  background: white;
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
  color: #333333;
`;

export const Desc = styled.Text`
  text-align: center;
  font-size: 15px;
  padding: 0 30px;
  color: #333333;
  margin: 10px auto;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const ModalButton = styled((props) => (
  <TouchableOpacity {...props}>
    <ButtonText>{props.children}</ButtonText>
  </TouchableOpacity>
))`
  background-color: #74b0e8;
  padding: 15px 15px;
  border-radius: 26px;
  margin: 10px auto;

  width: 40%;
  box-shadow: 0px 5px 10px #00000029;
  elevation: 1;
`;
