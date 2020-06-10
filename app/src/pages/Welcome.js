import React from 'react';

import {
  ScreenCenter,
  PrimaryButton,
  PrimaryTextButton,
  TextButton,
} from '../assets/styles';

import Header from '../components/Header';
import Button from '../components/Button';

import {
  ButtonView,
  ButtonsView,
  BoxShadowButton,
  FootnoteImage,
  VoluntarioImage,
  TextView,
  TitleText,
  SubtitleText,
} from '../assets/styles/welcome';
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
    <ScreenCenter>
      <Header type="secondary" title="Bem-vindo!" />
      <SubtitleText>Escolha a opção que mais se encaixar com você</SubtitleText>
      <VoluntarioImage source={require('../assets/images/voluntario.png')} />
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
      <FootnoteImage
        source={require('../assets/images/footnote_volunteer.png')}
      />
    </ScreenCenter>
  );
}
