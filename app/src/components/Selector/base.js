import React, { useEffect, useState, useRef } from 'react';
import { Picker as P } from '@react-native-community/picker';

const BasePicker = ({
  options,
  defaultValue = '',
  registerField,
  fieldName,
  ...props
}) => {
  const inputRef = useRef();
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
    <P
      ref={inputRef}
      selectedValue={value}
      onValueChange={handleChange}
      {...props}>
      {options.map(({ label, value }, index) => (
        <P.Item label={label} color="#333333" value={value} key={index} />
      ))}
    </P>
  );
};

export default BasePicker;
