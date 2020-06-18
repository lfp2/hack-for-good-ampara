import React, { useEffect, useState, useRef } from 'react';
import IconedInput, { IconedInputTemplate } from './IconedInput';
import { useField } from '@unform/core';
import {
  HintedError,
  Hint,
  ModalOverlay,
  TextInput,
  ModalTextInput,
  InnerModal,
  InputWrapper,
  Counter,
  ButtonWrapper,
  FinishText,
} from './styles';

import { BackHandler } from 'react-native';
import Header from '../Header';
import { useFocusEffect } from '@react-navigation/native';

function Input({
  e = '',
  innerRef,
  onChange,
  value,
  setValue,
  defaultValue,
  ...rest
}) {
  const inputRef = useRef(null);

  const handleChange = (text) => {
    onChange(text);
  };

  return (
    <ModalTextInput
      ref={(ref) => {
        inputRef.current = ref;
        if (innerRef) {
          innerRef.current = ref;
        }
      }}
      keyboardAppearance="dark"
      defaultValue={defaultValue}
      placeholderTextColor="#7777774D"
      onChangeText={handleChange}
      value={value}
      {...rest}
    />
  );
}

const ModalInput = React.forwardRef(
  (
    {
      name,
      label,
      icon,
      hint,
      reverseIcon,
      children,
      placeholder,
      scrollViewRef,
      afterFinishing,
      ...rest
    },
    ref,
  ) => {
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [value, setValue] = useState('');
    const [isModalOpened, setIsModalOpen] = useState(false);
    const [counter, setCounter] = useState(150);

    useEffect(() => {
      registerField({
        name: fieldName,
        ref: { value },
        path: 'value',
        clearValue(ref) {
          setValue('');
        },
        setValue(ref, newValue) {
          setValue(newValue);
        },
        getValue() {
          return value;
        },
      });
    }, [fieldName, registerField, value, setValue]);

    useEffect(() => {
      setCounter(150 - value.length);
    }, [value]);
    const openModal = () => {
      setIsModalOpen(true);
    };
    useEffect(() => {
      if (isModalOpened === true) {
        scrollViewRef.current.scrollTo({ y: 0 });
      }
    }, [isModalOpened, scrollViewRef]);
    const finish = () => {
      setIsModalOpen(false);
      if (afterFinishing) {
        afterFinishing();
      }
    };
    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          if (isModalOpened) {
            setIsModalOpen(false);
            return true;
          } else {
            return false;
          }
        };
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () =>
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      }, [setIsModalOpen, isModalOpened]),
    );
    const inputRef = useRef();
    const handleSubmit = () => {
      finish();
    };
    useEffect(() => {
      if (inputRef.current && isModalOpened) {
        inputRef.current.focus();
      }
    }, [inputRef, isModalOpened]);
    return (
      <>
        <IconedInputTemplate
          reverseIcon={reverseIcon}
          icon={icon}
          footer={
            error ? <HintedError>{error}</HintedError> : <Hint>{hint}</Hint>
          }>
          <TextInput
            ref={ref}
            value={value}
            placeholderTextColor="#7777774D"
            disabled
            onFocus={openModal}
            placeholder={placeholder}
          />
        </IconedInputTemplate>
        {isModalOpened && (
          <ModalOverlay>
            <Header
              type="secondary"
              goBackAction={() => {
                setIsModalOpen(false);
              }}
              title={label}>
              <ButtonWrapper onPress={finish}>
                <FinishText>Concluir</FinishText>
              </ButtonWrapper>
            </Header>
            <InnerModal>
              <InputWrapper>
                <Input
                  value={value}
                  placeholder={placeholder}
                  onChange={setValue}
                  innerRef={inputRef}
                  multiline
                  defaultValue={defaultValue}
                  {...rest}
                  blurOnSubmit
                  onSubmitEditing={handleSubmit}
                />
              </InputWrapper>
              <Counter isRed={counter <= 0}>{counter}</Counter>
            </InnerModal>
          </ModalOverlay>
        )}
      </>
    );
  },
);

export default ModalInput;
