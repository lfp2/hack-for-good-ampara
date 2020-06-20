import React, { useRef } from 'react';
import Button from 'src/components/LoadingButton';
import { brazilStates } from 'src/assets/strings/states';
import IconedInput, {
  MaskedIconedInput,
} from 'src/components/Input/IconedInput';
import IconedSelector from 'src/components/Input/iconedSelector';
import Switch from 'src/components/Switch';
import { Form } from '@unform/mobile';
import { Container, SeeTerms } from './styles';
import Header from 'src/components/Header';
import Camera from 'src/components/Input/Camera';
import validate from 'src/util/validate';
import { volunteerSchema, healthSchema } from './validation';
import ModalInput from 'src/components/Input/ModalInput';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import CircleGradientBackground from 'src/components/CircleGradientBackground';

const healthTypes = [
  { label: 'Tipo de Profissional', value: 'none' },
  { label: 'Médico(a)', value: 'medic' },
  { label: 'Enfermeiro(a)', value: 'nurse' },
  { label: 'Técnico(a) de enfermagem', value: 'practicalNurse' },
  { label: 'Auxiliar de enfermagem', value: 'nursingAssistant' },
  { label: 'Outro', value: 'other' },
];

export default function MyInfoScreen() {
  const token = useStoreState((state) => state.token);
  const accountType = useStoreState((state) => state.user.accountType);
  const formRef = useRef(null);
  const volunteerData = useStoreState((state) => state.volunteer);
  const healthData = useStoreState((state) => state.health);
  const update = useStoreActions((actions) => actions.update);
  const navigation = useNavigation();

  const handleSubmit = async (data) => {
    const isValid = await validate(
      accountType === 'health' ? healthSchema : volunteerSchema,
      data,
      formRef,
    );
    console.log(data, isValid);
    if (!isValid) {
      return;
    }
    await update({
      role: accountType,
      data: { ...data, token },
    });
    navigation.goBack();
  };
  const scrollRef = useRef();
  const bioRef = useRef();
  const phoneRef = useRef();
  const cepRef = useRef();
  const numberRegistryRef = useRef();
  useFocusEffect(() => {
    if (accountType === 'health') {
      formRef.current.setData(healthData);
    }
    if (accountType === 'volunteer') {
      formRef.current.setData(volunteerData);
    }
  }, []);
  return (
    <Container ref={scrollRef}>
      <CircleGradientBackground />
      <Header title="Editar Dados" type="secondary" />
      <Camera />

      <Form ref={formRef} onSubmit={handleSubmit}>
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
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => {
            phoneRef.current?.getElement().focus();
          }}
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
          placeholder="CEP*"
          icon="city"
        />
        {accountType === 'health' && (
          <Switch label="Perfil anônimo" name="anonymous" />
        )}
      </Form>
      <Button onPress={() => formRef.current.submitForm()}>ATUALIZAR</Button>
      <SeeTerms to="/Terms">
        VER TERMOS DE USO E POLÍTICA DE PRIVACIDADE
      </SeeTerms>
    </Container>
  );
}
