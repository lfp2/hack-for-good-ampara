import React, { useState, useRef } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import IconedInput from 'src/components/Input/IconedInput';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import Header from 'src/components/Header';
import Button from 'src/components/Button';
import { Container, Spacer, Description } from './styles';
import SecretIconedInput from 'src/components/Input/SecretIconedInput';
import { schema } from './validation';
import validate from 'src/util/validate';
import { useEffect } from 'react';

export default function SignUpEmailScreen() {
  const navigation = useNavigation();
  const d = useStoreState((state) => state.user);
  const setCredentials = useStoreActions(
    (actions) => actions.user.setCredentials,
  );
  const formRef = useRef();
  const handleSubmit = async (data) => {
    const isValid = await validate(schema, data, formRef);
    if (!isValid) {
      return;
    }
    navigation.navigate('SignUpProfile');
    const { email, password } = data;
    setCredentials({
      email,
      password,
    });
  };
  return (
    <Container>
      <Header type="secondary" title="Cadastro" />
      <Description>Defina seu e-mail e senha de acesso.</Description>
      <Spacer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <IconedInput
            icon="email"
            name="email"
            hint="* Obrigatorio"
            placeholder="E-mail*"
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              formRef.current?.getFieldRef('password').focus();
            }}
          />
          <SecretIconedInput
            icon="key-variant"
            reverseIcon
            name="password"
            placeholder="Senha*"
            hint="Defina uma senha com o minimo de 8 caracteres"
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              formRef.current?.getFieldRef('passwordConfirmation').focus();
            }}
          />
          <SecretIconedInput
            icon="key-variant"
            reverseIcon
            name="passwordConfirmation"
            placeholder="Confirmar Senha*"
            hint="Defina uma senha com o minimo de 8 caracteres"
            onSubmitEditing={() => {
              formRef.current.submitForm();
            }}
          />
        </Form>
      </Spacer>
      <Button onPress={() => formRef.current.submitForm()}>CONTINUAR</Button>
    </Container>
  );
}
