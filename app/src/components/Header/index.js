import React from 'react';
import { Container, Title, BackIcon, IconWrapper } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title }) {
  const navigation = useNavigation();
  return (
    <Container>
      <IconWrapper
        onPress={() => {
          console.log('alo');
          navigation.goBack();
        }}>
        <BackIcon />
      </IconWrapper>
      <Title>{title}</Title>
    </Container>
  );
}
