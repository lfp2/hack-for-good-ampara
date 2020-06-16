import React from 'react';
import {
  Container,
  Row,
  ProfilePic,
  Info,
  Name,
  T,
  Header,
  Value,
  Key,
  Section,
  Sections,
  Button,
} from './styles';

const MyAppointmentCard = ({ cancelAction }) => {
  return (
    <Container>
      <Header>
        <ProfilePic />
        <Info>
          <Name>Andrea Lin</Name>
          <T>Psicóloga</T>
        </Info>
      </Header>
      <Sections>
        <Section>
          <Key>Dia: </Key>
          <Value>14/01/2002</Value>
          <Row>
            <Key>Hora: </Key>
            <Value>12h</Value>
          </Row>
        </Section>
        <Section>
          <Key>STATUS:</Key>
          <Value>CONSULTA AGENDADA</Value>
        </Section>
      </Sections>
      <Button
        onPress={() => {
          if (cancelAction) {
            cancelAction();
          }
        }}>
        Cancelar Consulta
      </Button>
    </Container>
  );
};

export default MyAppointmentCard;
