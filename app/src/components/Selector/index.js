import React, { useEffect, useState } from 'react';
import { Picker, Container, Error, PickerWrapper } from './styles';
import { useField } from '@unform/core';

const Selector = ({ name, options }) => {
  const {
    fieldName,
    registerField,
    defaultValue = options[0].value,
    error,
  } = useField(name);
  const [value, setValue] = useState();
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: { value },
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, newValue) {
        setValue(newValue);
      },
      getValue({ value: currentValue }) {
        return currentValue;
      },
    });
  }, [fieldName, registerField, value]);
  return (
    <Container>
      <PickerWrapper>
        <Picker selectedValue={value} onValueChange={handleChange}>
          {options.map(({ label, value }, index) => (
            <Picker.Item
              label={label.toUpperCase()}
              color="#333333"
              value={value}
              key={index}
            />
          ))}
        </Picker>
      </PickerWrapper>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Selector;
