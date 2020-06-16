import React, { useState } from 'react';

import { Eye, HintedError, Hint } from './styles';
import useToggle from 'react-use/lib/useToggle';
import IconedInput, { IconedInputTemplate } from './IconedInput';
import { useField } from '@unform/core';
import BaseInput from './base';

function SecretIconedInput({
  name,
  label,
  icon,
  hint,
  reverseIcon,
  children,
  style,
  ...rest
}) {
  const props = useField(name);
  const { error } = props;
  const [isHidden, toggle] = useToggle(true);
  return (
    <IconedInputTemplate
      style={style}
      label={label}
      hint={hint}
      reverseIcon={reverseIcon}
      icon={icon}
      footer={error ? <HintedError>{error}</HintedError> : <Hint>{hint}</Hint>}>
      <BaseInput secureTextEntry={isHidden} {...rest} {...props} />
      <Eye onPress={() => toggle()} name={isHidden ? 'eye' : 'eye-slash'} />
    </IconedInputTemplate>
  );
}
export default SecretIconedInput;
