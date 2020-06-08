import React from 'react';
import { Container, Title, BackIcon, IconWrapper } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, type = 'primary' }) {
  const navigation = useNavigation();
  return (
    <Container type={type}>
      <IconWrapper
        onPress={() => {
          navigation.goBack();
        }}>
        <BackIcon type={type} />
      </IconWrapper>
      <Title type={type}>{title}</Title>
    </Container>
  );
}
