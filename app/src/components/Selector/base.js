import React, { useEffect, useState } from 'react';
import { Picker } from './styles';
import { Picker as P } from '@react-native-community/picker';

const BasePicker = ({
  options,
  defaultValue = '',
  registerField,
  fieldName,
  ...props
}) => {
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
    <Picker selectedValue={value} onValueChange={handleChange} {...props}>
      {options.map(({ label, value }, index) => (
        <P.Item label={label} color="#333333" value={value} key={index} />
      ))}
    </Picker>
  );
};

export default BasePicker;
