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
import * as Localization from 'expo-localization';
import moment from 'moment';

const AppointmentCard = ({
  acceptAction,
  finishAction,
  cancelAction,
  data,
}) => {
  const deviceTimezone = Localization.timezone;
  const timestamp = moment(data.timestamp).tz(deviceTimezone);
  moment.locale('pt-br');

  return (
    <Container>
      <Row>
        <ProfilePic />
        <Info>
          <Name>{data.healthDisplayName}</Name>
          <T>Técnica em Enfermagem</T>
          <Desc>COREN 58963</Desc>
        </Info>
      </Row>
      <DateSection>
        <DateRow time="Dia:">{timestamp.format('L')}</DateRow>
        <DateRow time="Hora:">{timestamp.format('LT')}</DateRow>
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
