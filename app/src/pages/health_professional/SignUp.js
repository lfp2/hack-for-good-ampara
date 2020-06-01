import React, { useState } from 'react';
import { Text } from 'react-native';
import * as Yup from 'yup';
import { ScreenCenter } from '../../assets/styles';
import { ScrollView } from 'react-native';

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
  Button,
  TextButton,
} from '../../assets/styles/signup';

import api from '../../services/api';

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [isAnonymousEnabled, setIsAnonymousEnabled] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [number_registry, setNumberRegistry] = useState('');
  const [phone, setPhone] = useState('');

  const yupValidation = Yup.object().shape({
    name: Yup.string().required('Nome é um campo obrigatório'),
    bio: Yup.string().required('Biografia é um campo obrigatório'),
    number_registry: Yup.string().required(
      'Número de registro é um campo obrigatório',
    ),
    email: Yup.string().email().required('Email é um campo obrigatório'),
    password: Yup.string().required('Senha é um campo obrigatório').min(6),
    city: Yup.string().required('Cidade é um campo obrigatório'),
    uf: Yup.string().required('UF é um campo obrigatório'),
    phone: Yup.string().required('Telefone é um campo obrigatório'),
  });

  async function handleSignUpPress() {
    const objectForm = {
      password,
      email,
      phone,
      number_registry,
      uf,
      city,
      bio,
      name,
    };
    console.log(objectForm);

    await yupValidation
      .validate(objectForm)
      .then(async (res) => {
        await api
          .post('/health_professional', {
            name,
            bio,
            number_registry,
            email,
            password,
            city,
            uf,
            phone,
          })
          .then(async (res) => {
            await AsyncStorage.setItem(
              '@AmparaApp:health',
              JSON.stringify(res.data),
            );

            navigation.navigate('HealthHome');
          })
          .catch((err) => {
            console.log(err.response);
            console.log(err);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <ScreenCenter>
      <TextTitle>Perfil</TextTitle>
      <HeaderView>
        <CameraView>
          <CircleButton>
            <CircleIcon source={require('../../assets/icons/camera.png')} />
          </CircleButton>
          <CircleButtonText>foto de perfil</CircleButtonText>
        </CameraView>
        <HeaderTextView>
          <TextInputView>
            <TextInputIcons
              source={require('../../assets/icons/ionic-ios-person.png')}
            />
            <ViewInput>
              <HeaderInput
                placeholder="Nome"
                onChangeText={(data) => setName(data)}
              />
            </ViewInput>
          </TextInputView>
          <TextInputView>
            <TextInputIcons
              source={require('../../assets/icons/ionic-ios-paper.png')}
            />
            <ViewInput>
              <HeaderInput
                placeholder="Biografia"
                onChangeText={(data) => setBio(data)}
              />
            </ViewInput>
          </TextInputView>
        </HeaderTextView>
      </HeaderView>
      <ScrollView>
        <TextInputView>
          <TextInputIcons
            source={require('../../assets/icons/material-location-city.png')}
          />
          <ViewInput>
            <Input
              placeholder="Cidade"
              onChangeText={(data) => setCity(data)}
            />
          </ViewInput>
        </TextInputView>
        <TextInputView>
          <TextInputIcons
            source={require('../../assets/icons/map-city-hall.png')}
          />
          <ViewInput>
            <Input placeholder="UF" onChangeText={(data) => setUf(data)} />
          </ViewInput>
        </TextInputView>
        <TextInputView>
          <TextInputIcons
            source={require('../../assets/icons/map-doctor.png')}
          />
          <ViewInput>
            <Input
              placeholder="Número de registro profissional"
              onChangeText={(data) => setNumberRegistry(data)}
            />
          </ViewInput>
        </TextInputView>
        <TextInputView>
          <TextInputIcons
            source={require('../../assets/icons/awesome-phone-alt.png')}
          />
          <ViewInput>
            <Input
              placeholder="Telefone"
              onChangeText={(data) => setPhone(data)}
            />
          </ViewInput>
        </TextInputView>
        <TextInputView>
          <TextInputIcons
            source={require('../../assets/icons/material-email.png')}
          />
          <ViewInput>
            <Input
              placeholder="Email"
              onChangeText={(data) => setEmail(data)}
            />
          </ViewInput>
        </TextInputView>
        <TextInputView>
          <TextInputIcons
            source={require('../../assets/icons/awesome-key.png')}
          />
          <ViewInput>
            <Input
              placeholder="Senha"
              onChangeText={(data) => setPassword(data)}
              secureTextEntry={true}
              autoCorrect={false}
            />
          </ViewInput>
        </TextInputView>
      </ScrollView>
      <SwitchView>
        <TextInputView>
          <SwitchNotification
            onValueChange={() =>
              setIsNotificationEnabled((previousState) => !previousState)
            }
            value={isNotificationEnabled}
          />
          <SwitchText>quero receber notificações</SwitchText>
        </TextInputView>
      </SwitchView>
      <SwitchView>
        <TextInputView>
          <SwitchNotification
            onValueChange={() =>
              setIsAnonymousEnabled((previousState) => !previousState)
            }
            value={isAnonymousEnabled}
          />
          <SwitchText>perfil anônimo</SwitchText>
        </TextInputView>
      </SwitchView>
      {!!error && <Text>{error}</Text>}
      <Button onPress={() => handleSignUpPress()}>
        <TextButton>CADASTRAR</TextButton>
      </Button>
    </ScreenCenter>
  );
}
