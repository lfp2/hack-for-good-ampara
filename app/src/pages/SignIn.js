import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {ScreenCenter, TextCenter} from '../assets/styles';
import {
  ContainerForm,
  Button,
  TextButton,
  SubPagesSignIn,
  SubPagesText,
  Input,
  ViewInputs,
  Logo,
} from '../assets/styles/signIn';

import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default function SigIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn(email, password) {
    try {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);
          setEmail('');
          setPassword('');
        });
    } catch (error) {
      console.log(error);
    }
  }

  function navigateGoBack() {
    navigation.navigate('Login');
  }

  return (
    <ScreenCenter>
      <ContainerForm>
        <Logo>Hugs...</Logo>
        <TextCenter>Cadastre-se</TextCenter>
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
          <SubPagesSignIn>
            <TouchableOpacity onPress={() => navigateGoBack()}>
              <SubPagesText>Voltar</SubPagesText>
            </TouchableOpacity>
          </SubPagesSignIn>
          <Button onPress={() => signIn(email, password)}>
            <TextButton>CADASTRAR</TextButton>
          </Button>
        </View>
      </ContainerForm>
    </ScreenCenter>
  );
}
