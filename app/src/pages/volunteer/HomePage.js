import React, { useState } from 'react';
import { ScreenCenter, TextCenter } from '../../assets/styles';
import {
    MenuButton,
    MenuIcon,
    MenuText,
    MenuView,
    MenuRow,
    RectangleBackground,
    Logo,
    HeaderView,
    PrimaryText,
    HeaderTextView,
    CircleButton,
    HeaderPictureTextView,
    SecondaryText,
    TextTitle,
} from '../../assets/styles/volunteer/homepage';

import { useNavigation } from '@react-navigation/native';

export default function HomePageScreen() {
    const navigation = useNavigation();

    return (
        <ScreenCenter>
            <RectangleBackground />
            <HeaderView>
                <Logo source={require('../../assets/images/Ampara-Simbolo-branco.png')} />
                <TextTitle>Meu Perfil</TextTitle>
                <HeaderPictureTextView>
                    <CircleButton></CircleButton>
                    <HeaderTextView>
                        <PrimaryText>Nome</PrimaryText>
                        <SecondaryText>Bio</SecondaryText>
                        <SecondaryText>Registro</SecondaryText>
                    </HeaderTextView>
                </HeaderPictureTextView>
            </HeaderView>
            <MenuView>
                <MenuRow>
                    <MenuButton>
                        <MenuIcon source={require('../../assets/icons/awesome-clock.png')} />
                        <MenuText>Meus Horários</MenuText>
                    </MenuButton>
                    <MenuButton>
                        <MenuIcon source={require('../../assets/icons/awesome-book.png')} />
                        <MenuText>Consultas Marcadas</MenuText>
                    </MenuButton>
                </MenuRow>
                <MenuRow>
                    <MenuButton>
                        <MenuText>Mensagens</MenuText>
                    </MenuButton>
                    <MenuButton>
                        <MenuIcon source={require('../../assets/icons/ionic-ios-heart.png')} />
                        <MenuText>Avaliações</MenuText>
                    </MenuButton>
                </MenuRow>
            </MenuView>
        </ScreenCenter>
    );
}