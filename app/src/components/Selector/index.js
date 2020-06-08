import React from 'react';
import { Container, Error, PickerWrapper } from './styles';
import { useField } from '@unform/core';
import BasePicker from './base';

const Selector = ({ name, options }) => {
  const props = useField(name);
  const { error } = props;
  return (
    <Container>
      <PickerWrapper>
        <BasePicker options={options} {...props} />
      </PickerWrapper>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Selector;
