import React from 'react';
import { Container } from './styles';
import Header from '../../../components/Header';
import AppointmentCard, {
  AppointmentCards,
} from '../../../components/AppointmentCard';
import { FlatList } from 'react-native-gesture-handler';
import Modal, { ModalButton } from '../../../components/Modal';
import useToggle from 'react-use/lib/useToggle';
const AppointmentScreen = () => {
  const [isOn, toggle] = useToggle(true);
  return (
    <Container>
      <Header title="Consultas" />
      <AppointmentCards>
        <FlatList
          keyExtractor={(e) => e}
          data={[0, 1, 2]}
          renderItem={() => (
            <AppointmentCard
              acceptAction={() => {
                toggle(true);
              }}
            />
          )}
        />
      </AppointmentCards>
      <Modal
        isOn={isOn}
        icon={require('../../../assets/images/appointment_confirmation.png')}
        title="A consulta foi finalizada!"
        desc="Verifique o e-mail cadastrado para mais detalhes da consulta.">
        <ModalButton
          onPress={() => {
            toggle(false);
          }}>
          OK
        </ModalButton>
      </Modal>
    </Container>
  );
};

export default AppointmentScreen;
