import React from 'react';

import {
  ScreenCenter,
  PrimaryButton,
  PrimaryTextButton,
  TextButton,
} from '../assets/styles';

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
      <TextView>
        <TitleText>Bem-vindo!</TitleText>
        <SubtitleText>
          Escolha a opção que mais se encaixar com você
        </SubtitleText>
      </TextView>
      <VoluntarioImage source={require('../assets/images/voluntario.png')} />
      <ButtonsView>
        <ButtonView>
          <PrimaryButton onPress={() => navigateToVolunteerSignUp()}>
            <PrimaryTextButton>QUERO SER VOLUNTÁRIO</PrimaryTextButton>
          </PrimaryButton>
        </ButtonView>
        <ButtonView>
          <BoxShadowButton onPress={() => navigateToHealthSignUp()}>
            <TextButton>AGENDAR CONSULTA</TextButton>
          </BoxShadowButton>
        </ButtonView>
      </ButtonsView>
      <FootnoteImage
        source={require('../assets/images/footnote_volunteer.png')}
      />
    </ScreenCenter>
  );
}
