import React, { useRef } from 'react';
import Button from 'src/components/LoadingButton';
import { brazilStates } from 'src/assets/strings/states';
import IconedInput, {
  MaskedIconedInput,
} from 'src/components/Input/IconedInput';
import IconedSelector from 'src/components/Input/iconedSelector';
import Switch from 'src/components/Switch';
import { Form } from '@unform/mobile';
import { Container, Description, SeeTerms } from './styles';
import Header from 'src/components/Header';
import Camera from 'src/components/Input/Camera';
import validate from 'src/util/validate';
import { volunteerSchema, healthSchema } from './validation';
import ModalInput from 'src/components/Input/ModalInput';
import { useStoreState } from 'easy-peasy';
import { CircleGradientBackground } from 'src/assets/styles/signup';

const healthTypes = [
  { label: 'Tipo de Profissional', value: 'none' },
  { label: 'Médico(a)', value: 'medic' },
  { label: 'Enfermeiro(a)', value: 'nurse' },
  { label: 'Técnico(a) de enfermagem', value: 'practicalNurse' },
  { label: 'Auxiliar de enfermagem', value: 'nursingAssistant' },
  { label: 'Outro', value: 'other' },
];

export default function SignUpProfileScreen() {
  const accountType = useStoreState((state) => state.userData.accountType);
  const formRef = useRef(null);
  const handleSubmit = async (data) => {
    const isValid = await validate(
      accountType === 'health' ? healthSchema : volunteerSchema,
      data,
      formRef,
    );
    if (!isValid) {
      return;
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
          name="name"
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
          afterFinishing={() => {
            accountType === 'volunteer'
              ? numberRegistryRef.current?.focus()
              : formRef.current?.getFieldRef('phone').focus();
          }}
        />
        {accountType === 'volunteer' && (
          <MaskedIconedInput
            type={'custom'}
            options={{
              mask: '99/99999',
            }}
            ref={numberRegistryRef}
            name="numberRegistry"
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
          name="phone"
          placeholder="Telefone*"
          icon="phone"
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => {
            phoneRef.current?.getElement().focus();
          }}
        />

        <IconedSelector
          name="state"
          icon="city"
          options={brazilStates.map((item, index) => ({
            label: item,
            value: index === 0 ? 'none' : item,
          }))}
        />
        {accountType === 'health' && (
          <IconedSelector
            name="healthType"
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
        <Switch label="Habilitar notificações" name="notifications" />
        <Switch label="Concordo com os Termos de Uso" name="terms" />
      </Form>
      <Button onPress={() => formRef.current.submitForm()}>CADASTRAR</Button>
      <SeeTerms to="/Terms">
        VER TERMOS DE USO E POLÍTICA DE PRIVACIDADE
      </SeeTerms>
    </Container>
  );
}
