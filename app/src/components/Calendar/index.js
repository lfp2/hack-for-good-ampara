import React, { useState } from 'react';
import { Container, Time, Times } from './styles';
import Header from '../Header';
import { FlatList } from 'react-native';
const times = [...Array(25)].map((e, index) =>
  index < 10 ? `0${index}` : index,
);

const extractKey = (_, index) => index;

const Calendar = () => {
  const [selected, setSelected] = useState(-1);
  return (
    <Container>
      <Header title="Agende sua consulta" />
      <Times>
        <FlatList
          horizontal
          data={times}
          renderItem={({ item: time, index }) => (
            <Time
              onSelect={() => {
                setSelected(index);
              }}
              selected={selected === index}
              time={time}
            />
          )}
          keyExtractor={extractKey}
        />
      </Times>
    </Container>
  );
};

export default Calendar;
