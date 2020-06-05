import React, { useRef } from 'react';
import { Container, Logo, Forgot, Button } from './styles';
import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import Selector from '../../components/Selector';
import validate from '../../util/validate';
import { schema } from './validation';

const rolesOptions = [
  { value: 'none', label: 'Escolha seu perfil' },
  { value: 'volunteer', label: 'Voluntário' },
  { value: 'health', label: 'Paciente' },
];

const LoginScreen = () => {
  const formRef = useRef(null);

  const handleSubmit = async (data) => {
    const isValid = await validate(schema, data, formRef);
    console.log(isValid, data);
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
        <Input
          name="password"
          label="SENHA"
          placeholder="digite sua senha"
          type="password"
          secureTextEntry={true}
        />
        <Forgot>Esqueceu a senha?</Forgot>
        <Selector name="role" options={rolesOptions} />
        <Button onPress={() => formRef.current.submitForm()}>Login</Button>
      </Form>
    </Container>
  );
};

export default LoginScreen;
