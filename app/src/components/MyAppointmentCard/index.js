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
export { AppointmentCards } from './styles';
import * as Localization from 'expo-localization';
import moment from 'moment';

const MyAppointmentCard = ({ data, cancelAction }) => {
  const deviceTimezone = Localization.timezone;
  const timestamp = moment(data.timestamp).tz(deviceTimezone);
  moment.locale('pt-br');
  return (
    <Container>
      <Header>
        <ProfilePic />
        <Info>
          <Name>{data.volunteerDisplayName}</Name>
          <T>Psicólogo</T>
        </Info>
      </Header>
      <Sections>
        <Section>
          <Key>Dia: </Key>
          <Value>{timestamp.format('L')}</Value>
          <Row>
            <Key>Hora: </Key>
            <Value>{timestamp.format('LT')}</Value>
          </Row>
        </Section>
        <Section>
          <Key>STATUS:</Key>
          <Value>{data.status}</Value>
        </Section>
      </Sections>
      {(data.status === 'Consulta agendada' ||
        data.status === 'Consulta confirmada') && (
        <Button
          onPress={() => {
            if (cancelAction) {
              cancelAction();
            }
          }}>
          Cancelar Consulta
        </Button>
      )}
    </Container>
  );
};

export default MyAppointmentCard;
