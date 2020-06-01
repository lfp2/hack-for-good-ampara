import React, {useState} from 'react';
import {
    Input,
} from '../../assets/styles/signup';

export default function BioScreen(control){
    return (
        <Controller
            as={Input}
            control={control}
            name="profession"
            onChange={(args) => args[0].nativeEvent.text}
            rules={{required: true}}
            placeholder="Profissão*"
        />
    );
}