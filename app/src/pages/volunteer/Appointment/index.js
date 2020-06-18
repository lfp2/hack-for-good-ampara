import React from 'react';
import { Container } from './styles';
import Header from 'src/components/Header';
import AppointmentCard, {
  AppointmentCards,
} from 'src/components/AppointmentCard';
import { FlatList } from 'react-native-gesture-handler';
import Modal from 'src/components/Modal';
import useToggle from 'react-use/lib/useToggle';
const AppointmentScreen = () => {
  const [isConfirmedModalVisible, toggleConfirmedModalVisibility] = useToggle(
    false,
  );
  const [isFinishedModalVisible, toggleFinishedModalVisibility] = useToggle(
    false,
  );
  const [
    isCancelationModalVisible,
    toggleCancelationModalVisibility,
  ] = useToggle(false);
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
                toggleConfirmedModalVisibility(true);
              }}
              finishAction={() => {
                toggleFinishedModalVisibility(true);
              }}
              cancelAction={() => {
                toggleCancelationModalVisibility(true);
              }}
            />
          )}
        />
      </AppointmentCards>
      <Modal
        isOn={isConfirmedModalVisible}
        icon={require('src/assets/images/appointment_confirmation.png')}
        title="Sua consulta foi agendada!"
        desc="Verifique o e-mail cadastrado para mais detalhes da consulta.">
        <Modal.BigButton
          onPress={() => {
            toggleConfirmedModalVisibility(false);
          }}>
          OK
        </Modal.BigButton>
      </Modal>
      <Modal
        isOn={isFinishedModalVisible}
        icon={require('src/assets/images/appointment_finished.png')}
        title="Sua consulta foi finalizada!"
        desc="Verifique o e-mail cadastrado para mais detalhes da sua consulta.">
        <Modal.BigButton
          onPress={() => {
            toggleFinishedModalVisibility(false);
          }}>
          OK
        </Modal.BigButton>
      </Modal>
      <Modal
        isOn={isCancelationModalVisible}
        icon={require('src/assets/images/appointment_cancelation.png')}
        title="Deseja cancelar sua consulta?">
        <Modal.Buttons>
          <Modal.SmallButton
            type="secondary"
            onPress={() => {
              toggleCancelationModalVisibility(false);
            }}>
            NÃO
          </Modal.SmallButton>
          <Modal.SmallButton
            onPress={() => {
              toggleCancelationModalVisibility(false);
            }}>
            SIM
          </Modal.SmallButton>
        </Modal.Buttons>
      </Modal>
    </Container>
  );
};

export default AppointmentScreen;
