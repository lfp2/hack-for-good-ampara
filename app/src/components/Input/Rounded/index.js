import React from 'react';
import { Container, StyledInput } from './styles';
import { useField } from '@unform/core';
import BaseInput from '../base';

const RoundedInput = ({ name, ...rest }) => {
  const props = useField(name);
  const { error } = props;
  return (
    <Container>
      <BaseInput as={StyledInput} {...props} {...rest} />
    </Container>
  );
};

export default RoundedInput;
