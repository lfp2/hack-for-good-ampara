import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, AsyncStorage } from 'react-native';
import AvailableCard from 'src/components/AvailableCard';
import api from 'src/services/api';
import Modal from 'src/components/Modal';
import Header from 'src/components/Header';
import useToggle from 'react-use/lib/useToggle';
import { useStoreState } from 'easy-peasy';

export default function AvailableDoctors({ route, navigation }) {
  const { timestamp } = route.params;
  const [data, setData] = useState([]);
  const [isLoading, toggleLoading] = useToggle(true);
  const [isDoctorsAvailable, toggleDoctorsAvailable] = useToggle(true);
  const [isConfirmedModalVisible, toggleConfirmedModalVisibility] = useToggle(
    false,
  );

  const {
    displayName,
    phoneNumber,
    token,
    email
  } = useStoreState((state) => state.health);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.post('/appointments/list', {
          timestamp,
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [timestamp]);

  async function appointmentAction(item) {
    try {
      await api.post('/appointments', {
        timestamp,
        volunteerToken: item.token,
        volunteerDisplayName: item.displayName,
        volunteerEmail: item.email,
        healthDisplayName: displayName,
        healthEmail: email,
        healthToken: token,
        healthPhone: phoneNumber,
      });
      toggleConfirmedModalVisibility(true);
    } catch (error) {}
  }

  return (
    <>
      <Header title="Voluntários disponíveis" />
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
        isOn={!isDoctorsAvailable}
        title="Não há voluntários disponíveis neste horário">
      </Modal>
      <Modal
        isOn={isConfirmedModalVisible}
        icon={require('src/assets/images/appointment_confirmation.png')}
        title="Sua consulta foi agendada!"
        desc="Verifique o e-mail cadastrado para mais detalhes da consulta.">
        <Modal.BigButton
          onPress={() => {
            toggleConfirmedModalVisibility(false);
            navigation.navigate('HealthHome', {
              timestamp,
            });
          }}>
          OK
        </Modal.BigButton>
      </Modal>
    </>
  );
}
