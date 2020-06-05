import React, { useState, useEffect } from 'react';
import { Container, Time, Times } from './styles';
import { FlatList } from 'react-native';
const times = [...Array(25)].map((e, index) =>
  index < 10 ? `0${index}:00` : `${index}:00`,
);

const extractKey = (_, index) => index;

const Calendar = ({ onChange }) => {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    if (onChange) {
      onChange(times[selected]);
    }
  }, [selected, onChange]);
  return (
    <Container>
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
