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
} from '../assets/styles/volunteersignup';

import api from '../services/api';

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function VolunteerSignUpScreen() {
    const navigation = useNavigation();
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

            await AsyncStorage.setItem('@AmparaApp:token', response.data.token);

            navigation.navigate('SignIn');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScreenCenter>
            <CircleButton>
            </CircleButton>
            <ViewInput>
                <Input placeholder="Nome" onChangeText={data => setName(data)} />
            </ViewInput>
            <ViewInput>
                <Input placeholder="Biografia" onChangeText={data => setBio(data)} />
            </ViewInput>
            <ViewInput>
                <Input placeholder="Cidade" onChangeText={data => setCity(data)} />
            </ViewInput>
            <ViewInput>
                <Input placeholder="UF" onChangeText={data => setUf(data)} />
            </ViewInput>
            <ViewInput>
                <Input placeholder="Número de registro profissional" onChangeText={data => setNumberRegistry(data)} />
            </ViewInput>
            <ViewInput>
                <Input placeholder="Telefone" onChangeText={data => setPhone(data)} />
            </ViewInput>
            <ViewInput>
                <Input placeholder="Email" onChangeText={data => setEmail(data)} />
            </ViewInput>
            <ViewInput>
                <Input
                    placeholder="Senha"
                    onChangeText={data => setPassword(data)}
                />
            </ViewInput>
            <Button onPress={() => handleSignUpPress()}>
                <TextButton>CADASTRAR</TextButton>
            </Button>
        </ScreenCenter>
    );
}