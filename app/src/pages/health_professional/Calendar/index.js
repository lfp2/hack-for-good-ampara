import React, { useState } from 'react';
import TimeSelector from '../../../components/TimeSelector';
import { MyScreen, RectangleBackground, CalendarView } from './styles';
import moment from 'moment';
import 'moment-timezone';
import * as RNLocalize from 'react-native-localize';
import Header from '../../../components/Header';
import CalendarStrip from '../../../components/CalendarStrip';
import AppointmentButton from '../../../components/Button';

export default function CalendarScreen({ navigation }) {
  moment.locale('pt-br');

  const today = moment(new Date()).add(1, 'd').format('MM/DD/YYYY');
  const deviceTimezone = RNLocalize.getTimeZone();

  const [timeSelected, setTime] = useState('');
  const [dateSelected, setDate] = useState(today);

  const onDateSelected = (date) => {
    setDate(date.format('MM/DD/YYYY'));
  };

  const handleSubmit = () => {
    const timestamp = moment
      .tz(dateSelected + ' ' + timeSelected, 'MM/DD/YYYY hh:mm', deviceTimezone)
      .toISOString();

    // console.log(timestamp);

    navigation.navigate('AvailableDoctors', {
      timestamp,
    });
  };

  return (
    <MyScreen>
      <RectangleBackground />
      <Header title="Agende sua consulta" />
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
      <AppointmentButton onPress={handleSubmit}>
        AGENDAR CONSULTA
      </AppointmentButton>
    </MyScreen>
  );
}
