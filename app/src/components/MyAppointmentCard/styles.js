import React from 'react';
import styled, { css } from 'styled-components/native';
import BaseButton from 'src/components/Button';

export const Button = styled(BaseButton)`
  padding: 5px 10px;
  width: 70%;
  margin: 25px auto;
`;

export const Container = styled.View`
  /* padding: 5px 10px; */
  width: 80%;
  max-width: 350px;
  margin: 10px auto;
  background: ${(props) => props.theme.white};
  box-shadow: 0px 3px 6px #00000029;
  elevation: 2;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  /* width: 100%; */
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ProfilePic = styled.Image.attrs({
  source: require('src/assets/images/emanuelly.png'),
})`
  border-radius: 500px;
  margin: 10px;
  aspect-ratio: 1;
  border-width: 6px;
  border-color: #74e8e2;
  width: 70px;
`;

export const Info = styled.View`
  margin: 0 20px;
`;

export const Key = styled.Text`
  font-family: Poppins-Medium;
  color: ${(props) => props.theme.blue};
`;

export const Value = styled.Text`
  font-family: Poppins-Medium;
  color: ${(props) => props.theme.black};
`;

export const T = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.black};
  font-family: Poppins;
`;

export const Name = styled.Text`
  color: ${(props) => props.theme.black};
  font-family: Poppins-Medium;
  font-size: 18px;
  font-weight: bold;
`;

export const Sections = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 0 20px;
`;

export const Section = styled.View`
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 0 10px;
`;
