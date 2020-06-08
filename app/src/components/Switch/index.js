import React, { useEffect, useState } from 'react';
import { useField } from '@unform/core';
import { Text, Container, Row, Error } from './styles';
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
    <Container {...props}>
      <Row>
        <Text>{label}</Text>
        <BaseSwitch {...rest} {...props} />
      </Row>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Switch;
