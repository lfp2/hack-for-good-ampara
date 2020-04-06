import React, { useState } from 'react';

import {
    ScreenCenter,
    Button,
    TextButton,
} from '../assets/styles';

import {
    CircleButton,
    ViewInput,
    Input,
    HeaderView,
    HeaderTextView,
    HeaderInput,
    SwitchNotification,
    SwitchText,
    TextInputIcons,
    TextInputView,
    CircleIcon,
    CircleButtonText,
    CameraView,
    SwitchView,
    TextTitle,
} from '../assets/styles/volunteersignup';

import api from '../services/api';

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function VolunteerSignUpScreen() {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [profissao, setProfissao] = useState('');
    const [number_registry, setNumberRegistry] = useState('');
    const [phone, setPhone] = useState('');

    async function handleSignUpPress() {
        try {
            const response = await api.post('/volunteer', {
                "name": name,
                "bio": bio,
                "number_registry": number_registry,
                "email": email,
                "password": password,
                "city": city,
                "uf": uf,
                "phone": phone,
            });

            await AsyncStorage.setItem('@AmparaApp:volunteer_token', response.data.token);

            navigation.navigate('Login');
        } catch (error) {
            console.log(error.response)
            console.log(error);
        }
    }

    return (
        <ScreenCenter>
            <TextTitle>Voluntário</TextTitle>
            <HeaderView>
                <CameraView>
                    <CircleButton>
                        <CircleIcon source={require('../assets/icons/camera.png')} />
                    </CircleButton>
                    <CircleButtonText>foto de perfil</CircleButtonText>
                </CameraView>
                <HeaderTextView>
                    <TextInputView>
                        <TextInputIcons source={require('../assets/icons/ionic-ios-person.png')} />
                        <ViewInput>
                            <HeaderInput placeholder="Nome" onChangeText={data => setName(data)} />
                        </ViewInput>
                    </TextInputView>
                    <TextInputView>
                        <TextInputIcons source={require('../assets/icons/ionic-ios-paper.png')} />
                        <ViewInput>
                            <HeaderInput placeholder="Biografia" onChangeText={data => setBio(data)} />
                        </ViewInput>
                    </TextInputView>
                </HeaderTextView>
            </HeaderView>
            <TextInputView>
                <TextInputIcons source={require('../assets/icons/material-location-city.png')} />
                <ViewInput>
                    <Input placeholder="Cidade" onChangeText={data => setCity(data)} />
                </ViewInput>
            </TextInputView>
            <TextInputView>
                <TextInputIcons source={require('../assets/icons/map-city-hall.png')} />
                <ViewInput>
                    <Input placeholder="UF" onChangeText={data => setUf(data)} />
                </ViewInput>
            </TextInputView>
            <TextInputView>
                <TextInputIcons source={require('../assets/icons/map-doctor.png')} />
                <ViewInput>
                    <Input placeholder="Número de registro profissional" onChangeText={data => setNumberRegistry(data)} />
                </ViewInput>
            </TextInputView>
            <TextInputView>
                <TextInputIcons source={require('../assets/icons/awesome-phone-alt.png')} />
                <ViewInput>
                    <Input placeholder="Telefone" onChangeText={data => setPhone(data)} />
                </ViewInput>
            </TextInputView>
            <TextInputView>
                <TextInputIcons source={require('../assets/icons/material-email.png')} />
                <ViewInput>
                    <Input placeholder="Email" onChangeText={data => setEmail(data)} />
                </ViewInput>
            </TextInputView>
            <TextInputView>
                <TextInputIcons source={require('../assets/icons/awesome-key.png')} />
                <ViewInput>
                    <Input
                        placeholder="Senha"
                        onChangeText={data => setPassword(data)}
                        secureTextEntry={true}
                        autoCorrect={false}
                    />
                </ViewInput>
            </TextInputView>
            <SwitchView>
                <TextInputView>
                    <SwitchNotification onValueChange={() => setIsEnabled(previousState => !previousState)}
                        value={isEnabled} />
                    <SwitchText>quero receber notificações</SwitchText>
                </TextInputView>
            </SwitchView>
            <Button onPress={() => handleSignUpPress()}>
                <TextButton>CADASTRAR</TextButton>
            </Button>
        </ScreenCenter>
    );
}