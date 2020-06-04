import React, { useState } from 'react';
import Calendar from '../../components/Calendar';

import {
  MyScreen,
  RectangleBackground,
  CalendarView,
  ButtonView,
} from '../../assets/styles/calendar';

import moment from 'moment';
import 'moment/locale/pt-br';
import { Button } from 'react-native';
import Header from '../../components/Header';
import CalendarStrip from '../../components/CalendarStrip';

export default function CalendarScreen() {
  moment.locale('pt-br');

  const today = moment(new Date()).add(1, 'd').format('MM/DD/YYYY'); //.format('L');

  const maxDate = moment(new Date()).add(1, 'M');

  const [timeSelected, setTime] = useState('');
  const [dateSelected, setDate] = useState(today);

  const onDateSelected = () => {
    setDate(moment(new Date()).format('DD/MM/YYYY'));
  };

  function handleBook() {
    console.log(timeSelected, dateSelected);
  }

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
          maxDate={maxDate}
          onDateSelected={onDateSelected}
        />
      </CalendarView>
      <Calendar onChange={setTime} />

      <ButtonView>
        <Button onPress={handleBook} title="Disponibilizar" color="#79e7e1" />
      </ButtonView>
    </MyScreen>
  );
}
