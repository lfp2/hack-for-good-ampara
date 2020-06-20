import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Container, Description, SeeTerms } from './styles';
import { volunteerSchema, healthSchema } from './validation';
import { brazilStates } from 'src/assets/strings/states';

import Button, { LoadingButton } from 'src/components/LoadingButton';
import IconedInput, {
  MaskedIconedInput,
} from 'src/components/Input/IconedInput';
import IconedSelector from 'src/components/Input/iconedSelector';
import Switch from 'src/components/Switch';
import Header from 'src/components/Header';
import Camera from 'src/components/Input/Camera';
import validate from 'src/util/validate';
import ModalInput from 'src/components/Input/ModalInput';
import CircleGradientBackground from 'src/components/CircleGradientBackground';
import useAwait from 'src/util/useAwait';
import api from 'src/services/api';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import healthTypes from 'src/assets/strings/healthTypes';

export default function SignUpProfileScreen() {
  const signUp = useStoreActions((state) => state.register);
  const navigation = useNavigation();
  const [isLoading, register, { toggle }] = useAwait(signUp);
  const accountType = useStoreState((state) => state.user.accountType);
  const userData = useStoreState((state) => state.user);
  const formRef = useRef(null);
  useFocusEffect(() => {
    formRef.current.setData({
      displayName: 'name',
      bio: 'bio',
      phoneNumber: '12345678933333',
      uf: 'AC',
      city: 'Ferraz',
      cep: '08544600',
      documentNumber: '1111111',
      terms: true,
      profession: 'medic',
    });
  }, []);
  const handleSubmit = async ({ terms, ...data }) => {
    const isValid = await validate(
      accountType === 'health' ? healthSchema : volunteerSchema,
      data,
      formRef,
    );
    if (!isValid) {
      return;
    }
    const { email, password } = userData;
    const {
      bio,
      uf,
      city,
      cep,
      phoneNumber,
      displayName,
      documentNumber,
      profession,
    } = data;

    try {
      await register({
        role: accountType,
        data: {
          email,
          password,
          phoneNumber,
          displayName,
          bio,
          documentNumber,
          profession,
          uf,
          city,
          cep,
        },
      });
      navigation.navigate('FirstScreen');
    } catch (err) {
      toggle(false);
    }

    // const {
    //   name,
    //   bio,
    //   documentNumber,

    //   phone,
    //   state,
    //   city,
    // } = data;
  };
  const scrollRef = useRef();
  const bioRef = useRef();
  const phoneRef = useRef();
  const cepRef = useRef();
  const numberRegistryRef = useRef();
  return (
    <Container ref={scrollRef}>
      <CircleGradientBackground />
      <Header title="Perfil" type="secondary" />
      <Description>
        Falta pouco para você acessar o Ampara. Preencha seus dados abaixo:
      </Description>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Camera />
        <IconedInput
          name="displayName"
          placeholder="Nome Completo*"
          icon="account"
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => {
            bioRef?.current.focus();
          }}
        />
        <ModalInput
          ref={bioRef}
          name="bio"
          label="Bio"
          placeholder={accountType === 'health' ? 'Biografia' : 'Biografia*'}
          icon="file-document-box-multiple"
          scrollViewRef={scrollRef}
        />
        {accountType === 'volunteer' && (
          <MaskedIconedInput
            type={'custom'}
            options={{
              mask: '99/99999',
            }}
            ref={numberRegistryRef}
            name="documentNumber"
            placeholder="CRP*"
            icon="account-card-details"
            blurOnSubmit={false}
            returnKeyType="next"
            onSubmitEditing={() => {
              phoneRef.current?.getElement().focus();
            }}
          />
        )}

        <MaskedIconedInput
          ref={phoneRef}
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          name="phoneNumber"
          placeholder="Telefone*"
          icon="phone"
        />

        <IconedSelector
          name="uf"
          icon="city"
          options={brazilStates.map((item, index) => ({
            label: item,
            value: index === 0 ? 'none' : item,
          }))}
        />
        {accountType === 'health' && (
          <IconedSelector
            name="profession"
            icon="clipboard-plus"
            options={healthTypes}
            mode="dropdown"
          />
        )}
        <IconedInput
          name="city"
          placeholder="Cidade de atuação*"
          icon="city"
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => {
            cepRef.current?.getElement().focus();
          }}
        />

        <MaskedIconedInput
          type={'custom'}
          options={{
            mask: '99999-999',
          }}
          ref={cepRef}
          name="cep"
          keyboardType="numeric"
          placeholder="CEP*"
          icon="city"
        />
        {accountType === 'health' && (
          <Switch label="Perfil anônimo" name="anonymous" />
        )}
        <Switch label="Habilitar notificações" name="notifications" />
        <Switch label="Concordo com os Termos de Uso" name="terms" />
      </Form>
      <LoadingButton
        isLoading={isLoading}
        onPress={() => formRef.current.submitForm()}>
        CADASTRAR
      </LoadingButton>
      <SeeTerms to="/Terms">
        VER TERMOS DE USO E POLÍTICA DE PRIVACIDADE
      </SeeTerms>
    </Container>
  );
}
