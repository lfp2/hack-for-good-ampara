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
  Column,
  CircleButton,
} from './styles';
export { AppointmentCards } from './styles';

const AppointmentCard = ({ acceptAction, finishAction, cancelAction }) => {
  return (
    <Container>
      <Row>
        <ProfilePic />
        <Info>
          <Name>{data.healthDisplayName}</Name>
          <T>{data.healthPhone}</T>
          <Desc>{data.healthEmail}</Desc>
        </Info>
      </Row>
      <DateSection>
        <DateRow time="Dia:">05/05/2020</DateRow>
        <DateRow time="Hora:">12:00</DateRow>
      </DateSection>
      <Row>
        <CircleButton
          icon="close"
          type="secondary"
          onPress={() => {
            if (cancelAction) {
              cancelAction();
            }
          }}
        />
        <Button
          type="primary"
          onPress={() => {
            if (finishAction) {
              finishAction();
            }
          }}>
          Finalizar consulta
        </Button>
        <CircleButton
          icon="check"
          type="primary"
          onPress={() => {
            if (acceptAction) {
              acceptAction();
            }
          }}
        />
      </Row>
    </Container>
  );
};

export default AppointmentCard;
