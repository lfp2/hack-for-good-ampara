import React, { useState, useEffect } from 'react';
import TimeSelector from 'src/components/TimeSelector';
import { MyScreen, RectangleBackground, CalendarView } from './styles';
import { View, Text, FlatList, ScrollView } from 'react-native';
import moment from 'moment';
import 'moment-timezone';
import * as Localization from 'expo-localization';
import Header from 'src/components/Header';
import CalendarStrip from 'src/components/CalendarStrip';
import Button from 'src/components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import api from 'src/services/api';
import DataCard from 'src/components/DataCard';
import useToggle from 'react-use/lib/useToggle';
import Modal from 'src/components/Modal';

export default function CalendarScreen() {
  moment.locale('pt-br');

  const today = moment(new Date()).add(1, 'd').format('MM/DD/YYYY');

  const deviceTimezone = Localization.timezone;

  const [timeSelected, setTime] = useState('');

  const [dateSelected, setDate] = useState(today);

  const [uploadTimestamp, setUploadTimestamp] = useState('');

  const [data, setData] = useState([]);

  const [isDateAlreadyTaken, toggleIsDateAlreadyTaken] = useToggle(false);
  const [modalVisibility, toggleModalVisibility] = useToggle(false);

  useEffect(() => {
    const timestamp = moment
      .tz(dateSelected + ' ' + timeSelected, 'MM/DD/YYYY hh:mm', deviceTimezone)
      .toISOString();

    if (data.some((e) => e.timestamp === timestamp)) {
      toggleIsDateAlreadyTaken(true);
    } else {
      toggleIsDateAlreadyTaken(false);
      toggleModalVisibility(false);
    }
  }, [
    dateSelected,
    deviceTimezone,
    timeSelected,
    data,
    toggleIsDateAlreadyTaken,
    toggleModalVisibility,
  ]);

  useEffect(() => {
    retrieveAgenda();
  }, [uploadTimestamp]);

  const onDateSelected = (date) => {
    setDate(date.format('MM/DD/YYYY'));
  };

  async function retrieveAgenda() {
    try {
      const value = await AsyncStorage.getItem('@AmparaApp:volunteer');

      const { token } = JSON.parse(value);

      const response = await api.post('/volunteer/retrieveAvailableHours', {
        token,
      });

      setData(response.data);
    } catch (error) {
      // console.log(error);
    }
  }

  async function handleBook() {
    if (isDateAlreadyTaken) {
      toggleModalVisibility(true);
      return;
    }
    try {
      const timestamp = moment.tz(
        dateSelected + ' ' + timeSelected,
        'MM/DD/YYYY hh:mm',
        deviceTimezone,
      );

      const value = await AsyncStorage.getItem('@AmparaApp:volunteer');

      const {
        displayName,
        documentNumber,
        documentName,
        email,
        phoneNumber,
        token,
        bio,
      } = JSON.parse(value);

      const response = await api.post('/volunteer/makeAvailableHours', {
        token,
        displayName,
        bio,
        documentName,
        documentNumber,
        timestamp,
        email,
        phoneNumber,
      });

      setUploadTimestamp(timestamp);
    } catch (error) {
      // console.log(error);
    }
  }

  const removeAvailableHour = (timestamp, index) => async () => {
    try {
      console.log(token);
      console.log(timestamp);
      const response = await api.delete('/available_hours', {
        token,
        timestamp
      });
      console.log(response);
      const filteredData = data.filter((item) => item.index !== index);
      setData(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MyScreen>
        <RectangleBackground />

        <Header title="Meus horários" />

        <CalendarView>
          <CalendarStrip
            scrollable={true}
            useIsoWeekday={false}
            selectedDate={today}
            minDate={today}
            maxDate={moment(new Date()).add(1, 'M')}
            onDateSelected={onDateSelected}
          />
        </CalendarView>

        <TimeSelector onChange={setTime} />
        <Button onPress={handleBook}>DISPONIBILIZAR HORÁRIO</Button>

        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <DataCard data={item} />}
        />
      </MyScreen>
      <Modal
        isOn={modalVisibility}
        icon={require('src/assets/images/appointment_cancelation.png')}
        title="Você ja desponibilizou esse horário">
        <Modal.BigButton
          onPress={() => {
            toggleModalVisibility(false);
          }}>
          OK
        </Modal.BigButton>
      </Modal>
    </>
  );
}
