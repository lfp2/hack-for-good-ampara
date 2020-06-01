import React from 'react';
import {
  Container,
  Row,
  ProfilePic,
  Info,
  Name,
  T,
  Desc,
  DateSection,
  DateRow,
  Button,
  SecondaryButton,
  Column,
} from './styles';
export { AppointmentCards } from './styles';

const AppointmentCard = () => {
  return (
    <Container>
      <Row>
        <ProfilePic />
        <Info>
          <Name>Emanuelly Figueiredo</Name>
          <T>Técnica em Enfermagem</T>
          <T>(19) 9999-99999</T>
          <Desc>COREN 58963</Desc>
        </Info>
      </Row>
      <Row>
        <Column>
          <DateSection>
            <DateRow time="Dia:">05/05/2020</DateRow>
            <DateRow time="Hora:">12:00</DateRow>
          </DateSection>
          <SecondaryButton>Finalizar consulta</SecondaryButton>
        </Column>
        <Column>
          <Button>Aceitar Consulta</Button>
          <SecondaryButton>Cancelar consulta</SecondaryButton>
        </Column>
      </Row>
    </Container>
  );
};

export default AppointmentCard;
