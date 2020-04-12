import React, { useState, useEffect } from 'react';
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
    MenuIconView
} from '../../assets/styles/homepage';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default function HomePageScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState(null);
    const [bio, setBio] = useState(null);
    const [number_registry, setNumberRegistry] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem('@AmparaApp:volunteer');
                console.log(value);
                const item = JSON.parse(value);
                console.log(item.volunteer.number_registry);
                setName(item.volunteer.name);
                setBio(item.volunteer.bio);
                setNumberRegistry(item.volunteer.number_registry);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    });



    return (
        <ScreenCenter>
            <RectangleBackground />
            <HeaderView>
                <Logo source={require('../../assets/images/Ampara-Simbolo-branco.png')} />
                <TextTitle>Meu Perfil</TextTitle>
                <HeaderPictureTextView>
                    <CircleButton></CircleButton>
                    <HeaderTextView>
                        <PrimaryText>{name}</PrimaryText>
                        <SecondaryText>{bio}</SecondaryText>
                        <SecondaryText>{number_registry}</SecondaryText>
                    </HeaderTextView>
                </HeaderPictureTextView>
            </HeaderView>
            <MenuView>
                <MenuRow>
                    <MenuButton>
                        <MenuIconView><MenuIcon name="clock" /></MenuIconView>
                        <MenuText>Meus Horários</MenuText>
                    </MenuButton>
                    <MenuButton>
                        <MenuIconView><MenuIcon name="book" /></MenuIconView>
                        <MenuText>Consultas Marcadas</MenuText>
                    </MenuButton>
                </MenuRow>
                <MenuRow>
                    <MenuButton>
                        <MenuIconView><MenuIcon name="message-text" /></MenuIconView>
                        <MenuText>Mensagens</MenuText>
                    </MenuButton>
                    <MenuButton>
                        <MenuIconView><MenuIcon name="heart" /></MenuIconView>
                        <MenuText>Avaliações</MenuText>
                    </MenuButton>
                </MenuRow>
            </MenuView>
        </ScreenCenter>
    );
}