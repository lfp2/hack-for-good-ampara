import React from 'react';

import { ScreenCenter, BackgroundImage } from '../assets/styles';
import { Button, TextButton, ButtonsView, PrimaryButton, LogoImage, ButtonView } from '../assets/styles/firstscreen';

export default function FirstScreen() {
    return (
        <ScreenCenter>
            <BackgroundImage source={require('../assets/images/background.png')} />
            <LogoImage source={require('../assets/images/Ampara-Logo-branco.png')} />
            <ButtonsView>
                <ButtonView>
                    <PrimaryButton>
                        <TextButton>QUERO ME CADASTRAR</TextButton>
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