import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Link } from '@react-navigation/native';

export const Container = styled.ScrollView`
  background-color: white;
`;

export const Description = styled.Text`
  text-align: center;
  margin: 20px auto;
  color: #333333;
  font-weight: 700;
  padding: 0 30px;
`;

export const SeeTerms = styled(Link)`
  color: #74b0e8;
  margin: 10px auto;
`;
