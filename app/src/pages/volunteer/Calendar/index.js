import React, { useState, useEffect } from 'react';
import Calendar from '../../../components/Calendar';

import { MyScreen, RectangleBackground, CalendarView } from './styles';

import { View, Text, FlatList, ScrollView } from 'react-native';

import moment from 'moment';
import 'moment-timezone';
import * as RNLocalize from 'react-native-localize';
import { PrimaryButton, PrimaryTextButton } from '../../../assets/styles';
import Header from '../../../components/Header';
import CalendarStrip from '../../../components/CalendarStrip';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../services/api';

export default function CalendarScreen() {
  moment.locale('pt-br');
  const today = moment(new Date()).add(1, 'd').format('MM/DD/YYYY');
  const deviceTimezone = RNLocalize.getTimeZone();

  const [timeSelected, setTime] = useState('');
  const [dateSelected, setDate] = useState(today);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [uploadTimestamp, setUploadTimestamp] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    retrieveAgenda();
  }, []);

  useEffect(() => {
    retrieveAgenda();
  }, [uploadTimestamp]);

  const onDateSelected = (date) => {
    setDate(date.format('MM/DD/YYYY'));
    console.log(dateSelected);
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
      console.log(error);
    }
  }

  async function handleBook() {
    try {
      setButtonDisabled(true);
      console.log(timeSelected, dateSelected);
      const timestamp = moment.tz(
        dateSelected + ' ' + timeSelected,
        'MM/DD/YYYY hh:mm',
        deviceTimezone,
      );
      console.log(timestamp);
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

      console.log(response.data);

      setUploadTimestamp(timestamp);
    } catch (error) {
      console.log(error);
    }
    setButtonDisabled(false);
  }

  const renderItem = ({ item }) => (
    <View>
      <Text>{moment(item.timestamp).tz(deviceTimezone).format('LLL')}</Text>
    </View>
  );

  return (
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
      <Calendar onChange={setTime} />
      <CalendarView>
        <PrimaryButton onPress={handleBook} disabled={buttonDisabled}>
          <PrimaryTextButton>DISPONIBILIZAR HORÁRIO</PrimaryTextButton>
        </PrimaryButton>
      </CalendarView>
      <ScrollView>
        <FlatList data={data} renderItem={renderItem} />
      </ScrollView>
    </MyScreen>
  );
}
