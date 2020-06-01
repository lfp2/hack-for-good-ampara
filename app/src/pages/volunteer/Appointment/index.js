import React from 'react';
import { Container } from './styles';
import Header from '../../../components/Header';
import AppointmentCard, {
  AppointmentCards,
} from '../../../components/AppointmentCard';
import { FlatList } from 'react-native-gesture-handler';
import Modal, { ModalButton } from '../../../components/Modal';

const AppointmentScreen = () => {
  return (
    <Container>
      <Header title="Consultas" />
      <AppointmentCards>
        <FlatList
          keyExtractor={(e) => e}
          data={[0, 1, 2]}
          renderItem={() => <AppointmentCard />}
        />
      </AppointmentCards>
      <Modal
        icon={require('../../../assets/images/deal.png')}
        title="A consulta foi finalizada!"
        desc="Verifique o e-mail cadastrado para mais detalhes da consulta.">
        <ModalButton>OK</ModalButton>
      </Modal>
    </Container>
  );
};

export default AppointmentScreen;
