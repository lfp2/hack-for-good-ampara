import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from './styles';
import { TextInputMask } from 'react-native-masked-text';
const MaskedBaseInput = React.forwardRef(
  ({ fieldName, registerField, defaultValue = '', mask, ...rest }, ref) => {
    const [value, setValue] = useState(defaultValue);
    useEffect(() => {
      setValue(defaultValue);
    }, [defaultValue]);
    useEffect(() => {
      registerField({
        name: fieldName,
        ref: { value },
        path: 'value',
        clearValue() {
          setValue('');
        },
        setValue(_, newValue) {
          setValue(newValue);
          // inputRef.current.value = value;
        },
        getValue() {
          return value;
        },
      });
    }, [fieldName, registerField, value, setValue]);
    return (
      <TextInput
        as={TextInputMask}
        ref={ref}
        type={mask}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onChangeText={(text) => {
          setValue(text);
        }}
        value={value}
        placeholderTextColor="#7777774D"
        {...rest}
      />
    );
  },
);
export default MaskedBaseInput;
