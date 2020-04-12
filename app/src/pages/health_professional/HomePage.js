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
import { Linking } from 'react-native';

export default function HomePageScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState(null);
    const [bio, setBio] = useState(null);
    const [number_registry, setNumberRegistry] = useState('');
    const text = "join oxygen-heavy";
    const phone = "+1 415 523 8886";

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem('@AmparaApp:health');
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

    function handleAgendaPress() {
        Linking.openURL(`whatsapp://send?text=${text}&phone${phone}`);
    }

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
                    <MenuButton onPress={() => handleAgendaPress()}>
                        <MenuIconView>
                            <MenuIcon name="calendar" />
                        </MenuIconView>
                        <MenuText>Agendar Consulta</MenuText>
                    </MenuButton>
                    <MenuButton>
                        <MenuIcon source={require('../../assets/icons/awesome-book.png')} />
                        <MenuText>Minhas Consultas</MenuText>
                    </MenuButton>
                </MenuRow>
                <MenuRow>
                    <MenuButton>
                        <MenuIcon source={require('../../assets/icons/message.png')} />
                        <MenuText>Mensagens</MenuText>
                    </MenuButton>
                    <MenuButton>
                        <MenuIcon source={require('../../assets/icons/hospital.png')} />
                        <MenuText>Histórico</MenuText>
                    </MenuButton>
                </MenuRow>
            </MenuView>
        </ScreenCenter>
    );
}