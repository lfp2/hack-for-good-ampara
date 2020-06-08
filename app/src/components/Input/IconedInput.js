import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import {
  Container,
  TextInput,
  Label,
  Error,
  Line,
  InputIcon,
  Row,
  Hint,
  HintedError,
} from './styles';
import BaseInput from './base';

function IconedInput({
  name,
  label,
  icon,
  hint,
  reverseIcon,
  children,
  ...rest
}) {
  const props = useField(name);
  const { error } = props;
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Row>
        <InputIcon reverse={reverseIcon} name={icon} />
        <BaseInput {...props} {...rest} />
        {children}
      </Row>
      <Line />
      {error ? <HintedError>{error}</HintedError> : <Hint>{hint}</Hint>}
    </Container>
  );
}
export default IconedInput;
