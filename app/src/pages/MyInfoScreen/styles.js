import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Link } from '@react-navigation/native';

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.white};
`;

export const Description = styled.Text`
  text-align: center;
  margin: 20px auto;
  color: ${(props) => props.theme.black};
  font-weight: 700;
  padding: 0 30px;
`;

export const SeeTerms = styled(Link)`
  color: ${(props) => props.theme.blue};
  margin: 10px auto;
`;
