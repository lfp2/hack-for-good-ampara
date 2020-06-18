import React from 'react';
import { Container, Button, SecretIconedInput } from './styles';
import { Form } from '@unform/mobile';
import Header from 'src/components/Header';

const NewPasswordScreen = () => {
  const formRef = React.useRef();
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Header title="Senha" type="secondary" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <SecretIconedInput
          icon="key-variant"
          reverseIcon
          name="password"
          placeholder="Senha nova*"
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
          placeholder="Confirmar Senha nova*"
          hint="Defina uma senha com o minimo de 8 caracteres"
          blurOnSubmit
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
        />
      </Form>
      <Button
        onPress={() => {
          formRef.current?.submitForm();
        }}>
        Atualizar
      </Button>
    </Container>
  );
};

export default NewPasswordScreen;
