import React from 'react';
import { Container, Title, BackIcon, IconWrapper } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Header({
  children,
  title,
  goBackAction,
  type = 'primary',
}) {
  const navigation = useNavigation();
  return (
    <Container type={type}>
      <IconWrapper
        onPress={() => {
          if (goBackAction) {
            goBackAction();
          } else {
            navigation.goBack();
          }
        }}>
        <BackIcon type={type} />
      </IconWrapper>
      <Title type={type}>{title}</Title>
      {children}
    </Container>
  );
}
