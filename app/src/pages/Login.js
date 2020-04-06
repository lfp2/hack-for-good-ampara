import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
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
} from '../assets/styles/login';

import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function Login(email, password) { }

  return (
    <ScreenCenter>
      <Logo source={require('../assets/images/Ampara-Simbolo.png')} />
      <ContainerForm>
        <View>
          <ViewInputs>
            <Input placeholder="Email" onChangeText={data => setEmail(data)} />
          </ViewInputs>
          <ViewInputs>
            <Input
              placeholder="Senha"
              onChangeText={data => setPassword(data)}
            />
          </ViewInputs>
          <SubPagesLogin>
            <TouchableOpacity>
              <SubPagesText>Esqueceu a senha?</SubPagesText>
            </TouchableOpacity>
          </SubPagesLogin>
          <Button onPress={() => Login(email, password)}>
            <TextButton>ENTRAR</TextButton>
          </Button>
        </View>
      </ContainerForm>
    </ScreenCenter>
  );
}
