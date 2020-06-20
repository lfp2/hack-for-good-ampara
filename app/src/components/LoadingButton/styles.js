import React from 'react';
import styled from 'styled-components/native';
import BaseSpinner from 'react-native-spinkit';

const SpinnerWrapper = styled.View`
  position: absolute;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.blue};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  /* top: ${(props) => (props.isVisible ? '10px' : '-100%')};
  transform: translateX(-35px);
  left: 50%; */
`;

export const Spinner = styled((props) => (
  <SpinnerWrapper isVisible={props.isVisible}>
    <BaseSpinner {...props} />
  </SpinnerWrapper>
))`
  /* height: 30px; */
  width: 60px;
  /* background-color: yellow; */
  margin: 0 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.white};
  font-size: 14px;
  font-family: Poppins-Medium;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.5px;
`;

export const Container = styled.TouchableOpacity`
  width: 90%;
  max-width: 350px;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  position: relative;
  overflow: hidden;
  padding: 12px 25px;
  border-radius: 500px;
  margin: 10px auto;
  box-shadow: 0px 5px 10px #00000029;
  elevation: 2;
  width: ${(props) => props.width || '90%'};
  max-width: 350px;
  background-color: ${(props) => props.theme.blue};
`;
