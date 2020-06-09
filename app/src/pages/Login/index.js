import React, { useRef, useState } from 'react';
import {
  Container,
  Logo,
  Forgot,
  Button,
  Error,
  InfoRow,
  Separator,
  Link,
  ClickableRow,
  Text,
} from './styles';
import { Form } from '@unform/mobile';
import Input, { SecretInput } from '../../components/Input';
import Selector from '../../components/Selector';
import validate from '../../util/validate';
import { schema } from './validation';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const rolesOptions = [
  { value: 'none', label: 'Escolha seu perfil' },
  { value: 'volunteer', label: 'Voluntário' },
  { value: 'health', label: 'Paciente' },
];

const showError = (error, path, action) => {
  const isFormated = path;
  if (isFormated) {
    const formattedError = path;
    action(formattedError);
  }
};

const LoginScreen = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (data) => {
    const isValid = await validate(schema, data, formRef);
    if (!isValid) {
      return;
    }
    const { role, email, password } = data;
    if (role === 'volunteer') {
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
        showError(error, error?.response?.data?.error, (newErrorMessage) =>
          setErrorMessage(newErrorMessage),
        );
      }
    }

    if (role === 'health') {
      try {
        const response = await api.post('/healthprofessional/signIn', {
          email: email,
          password: password,
        });

        await AsyncStorage.setItem(
          '@AmparaApp:health',
          JSON.stringify(response.data),
        );

        navigation.navigate('HealthHome');
      } catch (error) {
        showError(error, error?.response?.data?.error, (newErrorMessage) =>
          setErrorMessage(newErrorMessage),
        );
      }
    }
  };

  return (
    <Container>
      <Logo />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          label="E-MAIL"
          placeholder="email@gmail.com"
          type="email"
        />
        <SecretInput
          name="password"
          label="SENHA"
          placeholder="digite sua senha"
          type="password"
        />
        <InfoRow>
          {errorMessage !== '' && <Error>{errorMessage}</Error>}
          <Forgot>Esqueceu a senha?</Forgot>
        </InfoRow>

        <Selector name="role" options={rolesOptions} />
        <Button onPress={() => formRef.current.submitForm()}>Login</Button>
      </Form>
      <Separator />
      <ClickableRow
        onPress={() => {
          navigation.navigate('Welcome');
        }}>
        <Text>Não tem uma conta?</Text>
        <Link>Cadastrar-se</Link>
      </ClickableRow>
    </Container>
  );
};

export default LoginScreen;
