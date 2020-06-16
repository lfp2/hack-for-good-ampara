import React from 'react';
import { Container } from './styles';
import Header from '../../../components/Header';
import MyAppointmentCard from '../../../components/MyAppointmentCard';
import { FlatList } from 'react-native';
import useToggle from 'react-use/lib/useToggle';
import Modal from '../../../components/Modal';
const MyAppointmentScreen = () => {
  const [cancelModal, toggleCancelModal] = useToggle(false);
  return (
    <>
      <Container>
        <Header title="Minhas Consultas" />
        <FlatList
          keyExtractor={(e) => e.toString()}
          data={[0, 1, 2]}
          renderItem={() => (
            <MyAppointmentCard
              cancelAction={() => {
                toggleCancelModal(true);
              }}
            />
          )}
        />
      </Container>
      <Modal
        isOn={cancelModal}
        icon={require('../../../assets/images/appointment_cancelation.png')}
        title="Deseja cancelar sua consulta?">
        <Modal.Buttons>
          <Modal.SmallButton
            type="secondary"
            onPress={() => {
              toggleCancelModal(false);
            }}>
            NÃO
          </Modal.SmallButton>
          <Modal.SmallButton
            onPress={() => {
              toggleCancelModal(false);
            }}>
            SIM
          </Modal.SmallButton>
        </Modal.Buttons>
      </Modal>
    </>
  );
};

export default MyAppointmentScreen;
