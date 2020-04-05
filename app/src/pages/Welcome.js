import React from 'react';

import {
    ScreenCenter,
    PrimaryButton,
    PrimaryTextButton,
    TextButton
} from '../assets/styles';

import {
    ButtonView,
    ButtonsView,
    BoxShadowButton,
    FootnoteImage,
    VoluntarioImage,
    TextView,
    TitleText,
    SubtitleText
} from '../assets/styles/welcome';

import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();

    function navigateToVolunteerSignUp() {
        navigation.navigate('VolunteerSignUp');
    }

    return (
        <ScreenCenter>
            <TextView>
                <TitleText>Bem-vindo!</TitleText>
                <SubtitleText>Escolha a opção que mais se encaixar com você</SubtitleText>
            </TextView>
            <VoluntarioImage source={require('../assets/images/voluntario.png')} />
            <ButtonsView>
                <ButtonView>
                    <PrimaryButton onPress={() => navigateToVolunteerSignUp()}>
                        <PrimaryTextButton>QUERO SER VOLUNTÁRIO</PrimaryTextButton>
                    </PrimaryButton>
                </ButtonView>
                <ButtonView>
                    <BoxShadowButton>
                        <TextButton>AGENDAR CONSULTA</TextButton>
                    </BoxShadowButton>
                </ButtonView>
            </ButtonsView>
            <FootnoteImage source={require('../assets/images/footnote_volunteer.png')} />
        </ScreenCenter>
    );
}