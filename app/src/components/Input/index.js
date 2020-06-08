import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import { Container, TextInput, Label, Error, Line } from './styles';
import BaseInput from './base';

function Input({ name, label, ...rest }) {
  const props = useField(name);
  const { error } = props;
  // console.log(error);
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <BaseInput {...props} {...rest} />
      <Line />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
export default Input;
