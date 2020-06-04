import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { ScreenCenter, TextCenter } from '../assets/styles';
import {
  ContainerForm,
  Button,
  TextButton,
  SubPagesLogin,
  SubPagesText,
  Input,
  ViewInputs,
  Logo,
  StyledPicker,
} from '../assets/styles/login';

import api from '../services/api';

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('perfil');

  async function handleLoginPress() {
    if (userType == 'volunteer') {
      try {
        const response = await api.post('/volunteer/signIn', {
          email: email,
          password: password,
        });

        await AsyncStorage.setItem(
          '@AmparaApp:volunteer',
          JSON.stringify(response.data),
        );

        navigation.navigate('VolunteerHome');
      } catch (error) {
        console.error(error.response);
        console.error(error);
      }
    }

    if (userType == 'health') {
      try {
        const response = await api.post('/auth/health', {
          email: email,
          password: password,
        });

        await AsyncStorage.setItem(
          '@AmparaApp:health',
          JSON.stringify(response.data),
        );

        navigation.navigate('HealthHome');
      } catch (error) {
        console.error(error.response);
      }
    }
  }

  return (
    <ScreenCenter>
      <Logo source={require('../assets/images/Ampara-Simbolo.png')} />
      <ContainerForm>
        <ViewInputs>
          <Input
            placeholder="Email"
            onChangeText={(data) => setEmail(data)}
            autoCorrect={false}
          />
        </ViewInputs>
        <ViewInputs>
          <Input
            placeholder="Senha"
            onChangeText={(data) => setPassword(data)}
            secureTextEntry={true}
            autoCorrect={false}
          />
        </ViewInputs>
        <SubPagesLogin>
          <TouchableOpacity>
            <SubPagesText>Esqueceu a senha?</SubPagesText>
          </TouchableOpacity>
        </SubPagesLogin>
        <StyledPicker
          selectedValue={userType}
          onValueChange={(itemValue, itemIndex) => setUserType(itemValue)}>
          <Picker.Item label="Escolha seu perfil" value="escolha seu perfil" />
          <Picker.Item label="Voluntário" value="volunteer" />
          <Picker.Item label="Paciente" value="health" />
        </StyledPicker>
        <Button onPress={() => handleLoginPress()}>
          <TextButton>ENTRAR</TextButton>
        </Button>
      </ContainerForm>
    </ScreenCenter>
  );
}
