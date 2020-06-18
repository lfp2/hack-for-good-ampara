import React, { useState } from 'react';
import { Input } from 'src/assets/styles/signup';
import { Controller } from 'react-hook-form';

export default function BioScreen(control) {
  return (
    <Controller
      as={Input}
      control={control}
      name="profession"
      onChange={(args) => args[0].nativeEvent.text}
      rules={{ required: true }}
      placeholder="Profissão*"
    />
  );
}
