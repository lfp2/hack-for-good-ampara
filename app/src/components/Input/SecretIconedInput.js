import React, { useState } from 'react';

import { Eye } from './styles';
import useToggle from 'react-use/lib/useToggle';
import IconedInput from './IconedInput';

function SecretIconedInput(props) {
  const [isHidden, toggle] = useToggle(true);
  return (
    <IconedInput {...props} secureTextEntry={isHidden}>
      <Eye onPress={() => toggle()} name={isHidden ? 'eye' : 'eye-slash'} />
    </IconedInput>
  );
}
export default SecretIconedInput;
