import React, { useEffect, useState } from 'react';
import { useField } from '@unform/core';
import { Text, Container, Row, Error, StyledSwitch } from './styles';
import BaseSwitch from './base';

const Switch = ({
  label,
  name,
  defaultValue = false,
  registerField,
  fieldName,
  ...rest
}) => {
  const props = useField(name);
  const { error } = props;
  return (
    <Container>
      <Row>
        <Text>{label}</Text>
        <BaseSwitch {...rest} {...props} />
      </Row>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export const RegularSwitch = ({ label, ...props }) => (
  <Container>
    <Row>
      <Text>{label}</Text>
      <StyledSwitch {...props} />
    </Row>
  </Container>
);

export default Switch;
