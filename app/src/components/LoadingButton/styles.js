import React from 'react';
import styled from 'styled-components/native';
import BaseSpinner from 'react-native-spinkit';

const SpinnerWrapper = styled.View`
  position: absolute;
  background-color: #74b0e8;
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
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Container = styled.TouchableOpacity`
  width: 90%;
  max-width: 350px;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  background-color: #74b0e8;
  padding: 10px 0;
  border-radius: 500px;
  position: relative;
  overflow: hidden;
`;
