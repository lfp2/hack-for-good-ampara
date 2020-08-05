import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, AsyncStorage } from 'react-native';
import AvailableCard from 'src/components/AvailableCard';
import api from 'src/services/api';
import Modal from 'src/components/Modal';
import useToggle from 'react-use/lib/useToggle';
import Container from './styles';

export default function AvailableDoctors({ route, navigation }) {
  const { timestamp } = route.params;
  const [data, setData] = useState([]);
  const [isLoading, toggleLoading] = useToggle(true);
  const [isConfirmedModalVisible, toggleConfirmedModalVisibility] = useToggle(
    false,
  );

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.post('/agenda/availableDoctors', {
          timestamp,
        });
        // console.log(response);
        setData(response.data);
      } catch (error) {
        console.warn('erro');
        // console.warn(error.response);
      }
    };
    fetch();
  }, [timestamp]);

  async function appointmentAction(item) {
    try {
      const value = await AsyncStorage.getItem('@AmparaApp:health');
      const { token, displayName, email, phone } = JSON.parse(value);
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
        renderItem={({ item }) => (
          <AvailableCard
            appointmentAction={() => {
              appointmentAction(item);
            }}
            data={item}
          />
        )}
        keyExtractor={(item, index) => index}
      />
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
    </>
  );
}
