import React from 'react';
import { Container, Description } from './styles';
import Header from 'src/components/Header';
import { RegularSwitch } from 'src/components/Switch';
import useToggle from 'react-use/lib/useToggle';

const NotificationsScreen = () => {
  const [notifications, toggle] = useToggle();
  return (
    <Container>
      <Header title="Notificações" type="secondary" />
      <RegularSwitch
        value={notifications}
        onValueChange={(e) => toggle(e)}
        label="Notificações Push"
      />
      <Description>
        Você não receberá notificações push, mas poderá ver novas notificações
        ao abrir o Ampara.
      </Description>
    </Container>
  );
};

export default NotificationsScreen;
