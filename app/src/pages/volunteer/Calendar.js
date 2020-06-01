import React, { useState, useEffect } from 'react';
import { ScreenCenter, TextCenter } from '../../assets/styles';
import HorizontalDatePicker from '@logisticinfotech/react-native-horizontal-date-picker';
import { Calendar } from 'react-native-calendars';
import { Animated, FlatList, Button, View, Text } from 'react-native';

export default function CalendarScreen() {
  const [data, setData] = React.useState([]);
  const [date, setDate] = React.useState(Date() + 1);
  const [id, setId] = React.useState(0);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.hour}</Text>
    </View>
  );

  function onAddPress() {
    const newDate = {
      id: id,
      date: date.datetime,
    };
    setId(id + 1);
    const updateData = [...data, newDate];
    setData(updateData);
  }

  function onDateTimeSelected(datetime) {
    console.log('Selected Time:==>', datetime);
    setDate(datetime);
  }

  return (
    <ScreenCenter>
      <HorizontalDatePicker
        pickerType={'datetime'}
        onDateSelected={(datetime) => {
          onDateTimeSelected(datetime);
        }}
      />
    </ScreenCenter>
  );
}
