import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AvailableCard from '../../../components/AvailableCard';
import api from '../../../services/api';
import Modal from '../../../components/Modal';
import useToggle from 'react-use/lib/useToggle';
import Container from './styles';

export default function AvailableDoctors({ route, navigation }) {
  const { timestamp } = route.params;
  const [data, setData] = useState([]);
  const [isLoading, toggleLoading] = useToggle(
    true
  );
  const [isConfirmedModalVisible, toggleConfirmedModalVisibility] = useToggle(
    false
  );

  useEffect(() => {
    retrieveDoctors();
  }, []);

  async function retrieveDoctors() {
    try {
      const response = await api.post('/agenda/availableDoctors', {
        timestamp,
      });
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function appointmentAction({ item }) {
    try {
      const value = await AsyncStorage.getItem('@AmparaApp:health');
      const { token, displayName, email, phone } = JSON.parse(value);
      console.log("Agendar consulta");
      await api.post('/agenda/availableDoctors', {
        timestamp,
        volunteerToken: item.token,
        volunteerDisplayName: item.displayName,
        volunteerEmail: item.email,
        healthDisplayName: displayName,
        healthEmail: email,
        healthToken: token,
        healthPhone: phone,
      });
      toggleConfirmedModalVisibility(true);
    } catch (error) {}
  }

  return (
      <>
      <FlatList
        data={data}
        renderItem={({ item }) => <AvailableCard data={item} />}
        keyExtractor={(item, index) => index}
        appointmentAction={({item}) => appointmentAction({item})}
      />
      <Modal
      isOn={isConfirmedModalVisible}
      icon={require('../../../assets/images/appointment_confirmation.png')}
      title="Sua consulta foi agendada!"
      desc="Verifique o e-mail cadastrado para mais detalhes da consulta.">
      <Modal.BigButton
        onPress={() => {
          toggleConfirmedModalVisibility(false);
        }}>
        OK
      </Modal.BigButton>
    </Modal>
    </>
  );
}
