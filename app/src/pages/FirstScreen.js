import React from 'react';

import {
    ScreenCenter,
    BackgroundImage,
    Button,
    PrimaryButton,
    PrimaryTextButton,
    TextButton
} from '../assets/styles';
import {
    ButtonsView,
    LogoImage,
    ButtonView
} from '../assets/styles/firstscreen';

import { useNavigation } from '@react-navigation/native';

export default function FirstScreen() {
    const navigation = useNavigation();

    function navigateToWelcome() {
        navigation.navigate('Welcome');
    }

    return (
        <ScreenCenter>
            <BackgroundImage source={require('../assets/images/background.png')} />
            <LogoImage source={require('../assets/images/Ampara-Logo-branco.png')} />
            <ButtonsView>
                <ButtonView>
                    <PrimaryButton onPress={() => navigateToWelcome()} >
                        <PrimaryTextButton>QUERO ME CADASTRAR</PrimaryTextButton>
                    </PrimaryButton>
                </ButtonView>
                <ButtonView>
                    <Button>
                        <TextButton>LOGIN</TextButton>
                    </Button>
                </ButtonView>
            </ButtonsView>
        </ScreenCenter>
    );
}