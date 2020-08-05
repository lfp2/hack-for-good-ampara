import React, { useRef } from 'react';
import {
  Container,
  Illustration,
  Title,
  Info,
  ORSeparator,
  InvisibleButton,
} from './styles';
import { Form } from '@unform/mobile';
import RoundedInput from 'src/components/Input/Rounded';
import Button from 'src/components/Button';
import { useNavigation } from '@react-navigation/native';

const LoginTroubleshootScreen = () => {
  const navigation = useNavigation();
  const formRef = useRef();
  const handleSubmit = (data) => {};
  return (
    <Container>
      <Illustration />
      <Title>Problemas para entrar?</Title>
      <Info>
        Insira seu e-mail e enviaremos um link para você voltar a acessar sua
        conta.
      </Info>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <RoundedInput name="email" placeholder="E-MAIL" />
        <RoundedInput name="crm" placeholder="CADASTRO PROFISSIONAL" />
      </Form>
      <Button
        onPress={() => {
          formRef.current?.submitForm();
        }}>
        ENVIAR LINK
      </Button>
      <ORSeparator />
      <Button
        type="secondary"
        onPress={() => {
          navigation.navigate('Welcome');
        }}>
        CRIAR UMA CONTA NOVA
      </Button>
      <InvisibleButton
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Voltar para o login
      </InvisibleButton>
    </Container>
  );
};

export default LoginTroubleshootScreen;
