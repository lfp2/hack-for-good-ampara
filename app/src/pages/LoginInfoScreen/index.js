import React from 'react';
import { Container, Description } from './styles';
import Header from '../../components/Header';
import { RegularSwitch } from '../../components/Switch';
import useToggle from 'react-use/lib/useToggle';

const LoginInfoScreen = () => {
  const [loginInfo, toggle] = useToggle();
  return (
    <Container>
      <Header title="Informação de login" type="secondary" />
      <RegularSwitch
        value={loginInfo}
        onValueChange={(e) => toggle(e)}
        label="Informações de login salvas"
      />
      <Description>
        Nós lembraremos as informações da sua conta para você neste dispositivo.
        Você não precisará inseri-las ao fazer login novamente.
      </Description>
    </Container>
  );
};

export default LoginInfoScreen;
