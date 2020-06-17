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
import { BackHandler } from 'react-native';
import Input, { SecretInput } from '../../components/Input';
import Selector from '../../components/Selector';
import validate from '../../util/validate';
import { schema } from './validation';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../../services/api';
import useAwait from '../../util/useAwait';
import LoadingButton from '../../components/LoadingButton';

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

const signVolunteer = ({ email, password }) =>
  api.post('/volunteer/signIn', {
    email,
    password,
  });
const signHealthProfessional = ({ email, password }) =>
  api.post('/healthprofessional/signIn', {
    email,
    password,
  });

const LoginScreen = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();
  const [
    isLoadingVolunteer,
    signVolunteerIn,
    { toggle: toggleVolunteerLoading },
  ] = useAwait(signVolunteer);
  const [
    isLoadingHealthProfessional,
    signHealthProfessionalIn,
    { toggle: toggleHealthProfessionalLoading },
  ] = useAwait(signHealthProfessional);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (data) => {
    const isValid = await validate(schema, data, formRef);
    if (!isValid) {
      return;
    }
    const { role, email, password } = data;
    if (role === 'volunteer') {
      try {
        const response = await signVolunteerIn({ email, password });
        await AsyncStorage.setItem(
          '@AmparaApp:volunteer',
          JSON.stringify(response.data),
        );

        navigation.reset({
          index: 0,
          routes: [{ name: 'VolunteerHome' }],
        });
        toggleVolunteerLoading(false);
      } catch (error) {
        toggleVolunteerLoading(false);
        showError(error, error?.response?.data?.error, (newErrorMessage) =>
          setErrorMessage(newErrorMessage),
        );
      }
    }

    if (role === 'health') {
      try {
        const response = await signHealthProfessionalIn({ email, password });

        await AsyncStorage.setItem(
          '@AmparaApp:health',
          JSON.stringify(response.data),
        );
        navigation.reset({
          index: 0,
          routes: [{ name: 'HealthHome' }],
        });
        toggleHealthProfessionalLoading(false);
      } catch (error) {
        toggleHealthProfessionalLoading(false);
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
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => {
            formRef.current?.getFieldRef('password').focus();
          }}
        />
        <SecretInput
          name="password"
          label="SENHA"
          placeholder="digite sua senha"
          type="password"
        />
        <InfoRow>
          {errorMessage !== '' && <Error>{errorMessage}</Error>}
          <Forgot
            onPress={() => {
              navigation.navigate('LoginTroubleshoot');
            }}>
            Esqueceu a senha?
          </Forgot>
        </InfoRow>

        <Selector defaultValue="none" name="role" options={rolesOptions} />
        <LoadingButton
          isLoading={isLoadingVolunteer || isLoadingHealthProfessional}
          onPress={() => formRef.current.submitForm()}>
          Login
        </LoadingButton>
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
