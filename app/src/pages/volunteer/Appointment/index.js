import React from 'react';
import { Container } from './styles';
import Header from '../../../components/Header';
import AppointmentCard, {
  AppointmentCards,
} from '../../../components/AppointmentCard';
import { FlatList } from 'react-native-gesture-handler';
import Modal, {
  ModalBigButton,
  ModalButtons,
  ModalSmallButton,
} from '../../../components/Modal';
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
        icon={require('../../../assets/images/appointment_confirmation.png')}
        title="Sua consulta foi agendada!"
        desc="Verifique o e-mail cadastrado para mais detalhes da consulta.">
        <ModalBigButton
          onPress={() => {
            toggleConfirmedModalVisibility(false);
          }}>
          OK
        </ModalBigButton>
      </Modal>
      <Modal
        isOn={isFinishedModalVisible}
        icon={require('../../../assets/images/appointment_finished.png')}
        title="Sua consulta foi finalizada!"
        desc="Verifique o e-mail cadastrado para mais detalhes da sua consulta.">
        <ModalBigButton
          onPress={() => {
            toggleFinishedModalVisibility(false);
          }}>
          OK
        </ModalBigButton>
      </Modal>
      <Modal
        isOn={isCancelationModalVisible}
        icon={require('../../../assets/images/appointment_cancelation.png')}
        title="Deseja cancelar sua consulta?">
        <ModalButtons>
          <ModalSmallButton
            type="secondary"
            onPress={() => {
              toggleCancelationModalVisibility(false);
            }}>
            NÃO
          </ModalSmallButton>
          <ModalSmallButton
            onPress={() => {
              toggleCancelationModalVisibility(false);
            }}>
            SIM
          </ModalSmallButton>
        </ModalButtons>
      </Modal>
    </Container>
  );
};

export default AppointmentScreen;
