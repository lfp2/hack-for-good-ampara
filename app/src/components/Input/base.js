import React, { useEffect, useRef } from 'react';
import { TextInput } from './styles';

function BaseInput({ fieldName, registerField, defaultValue = '', ...rest }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);
  return (
    <TextInput
      ref={inputRef}
      keyboardAppearance="dark"
      defaultValue={defaultValue}
      placeholderTextColor="#7777774D"
      onChangeText={(value) => {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      }}
      {...rest}
    />
  );
}
export default BaseInput;
