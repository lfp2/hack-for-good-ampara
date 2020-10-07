import React, {useState, useEffect} from 'react';
import { Container } from './styles';
import Header from 'src/components/Header';
import MyAppointmentCard from 'src/components/MyAppointmentCard';
import { FlatList } from 'react-native';
import useToggle from 'react-use/lib/useToggle';
import Modal from 'src/components/Modal';
import { useStoreState } from 'easy-peasy';
import api from 'src/services/api';
import * as Localization from 'expo-localization';

const MyAppointmentScreen = () => {
  const [cancelModal, toggleCancelModal] = useToggle(false);
  const [canceledModal, toggleCanceledModal] = useToggle(false);
  const { token, email } = useStoreState((state) => state.health);
  const [data, setData] = useState([]);
  const [selectedItem, setItem] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.post('/health/list_appointments', {
          token
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  
  async function cancelAction() {
    try {
      await api.delete('/appointments', {
        timestamp: selectedItem.timestamp,
        healthEmail: email,
        accountType: "healthProfessional"
      });
      toggleCanceledModal(true);
      toggleCancelModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container>
        <Header title="Minhas Consultas" />
        <FlatList
          keyExtractor={(item, index) => index}
          data={data}
          renderItem={({item}) => (
            <MyAppointmentCard
              data={item}
              cancelAction={() => {
                toggleCancelModal(true);
                setItem(item);
              }}
            />
          )}
        />
      </Container>
      <Modal
        isOn={cancelModal}
        icon={require('src/assets/images/appointment_cancelation.png')}
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
              cancelAction()
            }}>
            SIM
          </Modal.SmallButton>
        </Modal.Buttons>
      </Modal>
      <Modal
        isOn={canceledModal}
        icon={require('src/assets/images/appointment_cancelled.png')}
        title="Sua consulta foi cancelada!"
        desc="Verifique o e-mail cadastrado para mais detalhes do seu cancelamento.">
        <Modal.BigButton
          onPress={() => {
            toggleCanceledModal(false);
          }}>
          OK
        </Modal.BigButton>
      </Modal>
    </>
  );
};

export default MyAppointmentScreen;
