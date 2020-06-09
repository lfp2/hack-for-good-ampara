import React from 'react';
import { useField } from '@unform/core';
import { IconedInputTemplate } from './IconedInput';
import { HintedError, Hint } from './styles';
import BaseSelector from '../Selector/base';

const IconedSelector = ({
  name,
  label,
  icon,
  hint,
  reverseIcon,
  children,
  options,
  ...rest
}) => {
  const props = useField(name);
  const { error } = props;
  return (
    <IconedInputTemplate
      label={label}
      reverseIcon={reverseIcon}
      icon={icon}
      footer={error ? <HintedError>{error}</HintedError> : <Hint>{hint}</Hint>}>
      <BaseSelector
        style={{ flex: 1, height: '100%' }}
        {...rest}
        {...props}
        options={options}
      />
    </IconedInputTemplate>
  );
};

export default IconedSelector;
