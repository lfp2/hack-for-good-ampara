import React, { useEffect } from 'react';

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
import AsyncStorage from '@react-native-community/async-storage';


export default function FirstScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        async function fetchData() {
            try {
                const volunteer_value = await AsyncStorage.getItem('@AmparaApp:volunteer');
                const health_value = await AsyncStorage.getItem('@AmparaApp:health');
                console.log(volunteer_value);
                if (volunteer_value != null) navigation.navigate('VolunteerHome');
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    });

    function navigateToWelcome() {
        navigation.navigate('Welcome');
    }

    function navigateToLogin() {
        navigation.navigate('Login');
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
                    <Button onPress={() => navigateToLogin()} >
                        <TextButton>LOGIN</TextButton>
                    </Button>
                </ButtonView>
            </ButtonsView>
        </ScreenCenter>
    );
}