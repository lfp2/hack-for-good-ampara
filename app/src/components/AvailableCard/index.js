import React from 'react';
import {
  Container,
  ProfilePic,
  Info,
  Name,
  T,
  Header,
  Section,
  Button,
} from './styles';

const AvailableCard = ({ appointmentAction, data }) => {
  return (
    <Container>
      <Header>
        <ProfilePic />
        <Info>
          <Name>{data.displayName}</Name>
        </Info>
      </Header>
      <Section>
        <T>{data.bio}</T>
        <T>CRP: {data.documentNumber}</T>
      </Section>
      <Button
        onPress={() => {
          if (appointmentAction) {
            appointmentAction(data);
          }
        }}>
        Agendar consulta
      </Button>
    </Container>
  );
};

export default AvailableCard;
