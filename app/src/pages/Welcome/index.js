import React from 'react';
import Header from 'src/components/Header';
import Button from 'src/components/Button';

import {
  Container,
  ButtonsView,
  FootnoteImage,
  VoluntarioImage,
  SubtitleText,
} from './styles';

import { useStoreActions } from 'easy-peasy';

import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const updateUserData = useStoreActions((actions) => actions.updateUserData);

  function navigateToVolunteerSignUp() {
    updateUserData({
      accountType: 'volunteer',
    });
    navigation.navigate('SignUpEmail');
  }

  function navigateToHealthSignUp() {
    updateUserData({
      accountType: 'health',
    });
    navigation.navigate('SignUpEmail');
  }

  return (
    <Container>
      <Header type="secondary" title="Bem-vindo!" />
      <SubtitleText>Escolha a opção que mais se encaixar com você</SubtitleText>
      <VoluntarioImage />
      <ButtonsView>
        <Button width="80%" onPress={() => navigateToVolunteerSignUp()}>
          QUERO SER VOLUNTÁRIO
        </Button>
        <Button
          width="80%"
          type="secondary"
          onPress={() => navigateToHealthSignUp()}>
          AGENDAR CONSULTA
        </Button>
      </ButtonsView>
      <FootnoteImage />
    </Container>
  );
}
