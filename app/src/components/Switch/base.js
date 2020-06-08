import React, { useEffect, useState } from 'react';
import { StyledSwitch } from './styles';

const BaseSwitch = ({
  defaultValue = false,
  registerField,
  fieldName,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: { value },
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(_, newValue) {
        setValue(newValue);
      },
      getValue({ value: currentValue }) {
        return currentValue;
      },
    });
  }, [fieldName, registerField, value]);
  return <StyledSwitch value={value} onValueChange={setValue} {...rest} />;
};

export default BaseSwitch;
