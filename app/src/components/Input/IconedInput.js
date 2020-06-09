import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import {
  IconedContainer,
  Label,
  Line,
  InputIcon,
  Row,
  Hint,
  HintedError,
} from './styles';
import BaseInput from './base';
import MaskedBaseInput from './masked';

export const IconedInputTemplate = ({
  label,
  icon,
  reverseIcon,
  children,
  footer,
}) => {
  return (
    <IconedContainer>
      {label && <Label>{label}</Label>}
      <Row>
        <InputIcon reverse={reverseIcon} name={icon} />
        {children}
      </Row>
      <Line />
      {footer}
    </IconedContainer>
  );
};

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
    <IconedInputTemplate
      label={label}
      reverseIcon={reverseIcon}
      icon={icon}
      footer={error ? <HintedError>{error}</HintedError> : <Hint>{hint}</Hint>}>
      <BaseInput {...props} {...rest} />
    </IconedInputTemplate>
  );
}

export const MaskedIconedInput = React.forwardRef(
  (
    { name, label, icon, hint, reverseIcon, children, mask, options, ...rest },
    ref,
  ) => {
    const props = useField(name);
    const { error } = props;
    return (
      <IconedInputTemplate
        label={label}
        hint={hint}
        reverseIcon={reverseIcon}
        icon={icon}
        footer={
          error ? <HintedError>{error}</HintedError> : <Hint>{hint}</Hint>
        }>
        <MaskedBaseInput
          ref={ref}
          {...props}
          mask={mask}
          options={options}
          {...rest}
        />
      </IconedInputTemplate>
    );
  },
);
export default IconedInput;
