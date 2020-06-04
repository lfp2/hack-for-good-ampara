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

const AppointmentCard = ({ acceptAction, finishAction, cancelAction }) => {
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
        </Column>
        <Column>
          <Button
            onPress={() => {
              if (acceptAction) {
                acceptAction();
              }
            }}>
            Aceitar Consulta
          </Button>
          <SecondaryButton
            onPress={() => {
              if (cancelAction) {
                cancelAction();
              }
            }}>
            Cancelar consulta
          </SecondaryButton>
          <SecondaryButton
            onPress={() => {
              if (finishAction) {
                finishAction();
              }
            }}>
            Finalizar consulta
          </SecondaryButton>
        </Column>
      </Row>
    </Container>
  );
};

export default AppointmentCard;
