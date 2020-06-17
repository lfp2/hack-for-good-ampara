import React, { useState, useRef } from 'react';
import Button from '../../components/LoadingButton';
import { CircleGradientBackground } from '../../assets/styles/signup';
import { brazilStates } from '../../assets/strings/states';
import ImagePicker from 'react-native-image-picker';
import IconedInput, {
  MaskedIconedInput,
} from '../../components/Input/IconedInput';
import IconedSelector from '../../components/Input/iconedSelector';
import Switch from '../../components/Switch';
import { Form } from '@unform/mobile';
import { Container, Description, SeeTerms } from './styles';
import Header from '../../components/Header';
import Camera from '../../components/Camera';
import validate from '../../util/validate';
import { volunteerSchema, healthSchema } from './validation';
import ModalInput from '../../components/Input/ModalInput';
import { useStoreState } from 'easy-peasy';
import useAwait from '../../util/useAwait';
import api from '../../services/api';

const healthTypes = [
  { label: 'Tipo de Profissional', value: 'none' },
  { label: 'Médico(a)', value: 'medic' },
  { label: 'Enfermeiro(a)', value: 'nurse' },
  { label: 'Técnico(a) de enfermagem', value: 'practicalNurse' },
  { label: 'Auxiliar de enfermagem', value: 'nursingAssistant' },
  { label: 'Outro', value: 'other' },
];

const createVolunteer = ({
  name,
  bio,
  documentName,
  documentNumber,
  email,
  password,
  phone,
  state,
  city,
}) =>
  api.post('/volunteer', {
    displayName: name,
    bio,
    documentName,
    documentNumber,
    email,
    password,
    phoneNumber: phone,
    uf: state,
    city,
  });
const createHealthProfessional = ({
  name,
  bio,
  documentName,
  documentNumber,
  email,
  password,
  phone,
  state,
  city,
}) =>
  api.post('/healthprofessional', {
    displayName: name,
    bio,
    documentName,
    documentNumber,
    email,
    password,
    phoneNumber: phone,
    uf: state,
    city,
  });

export default function SignUpProfileScreen() {
  const [avatarSource, setAvatarSource] = useState('');
  const accountType = useStoreState((state) => state.userData.accountType);
  const { email, password } = useStoreState((state) => state.userData);
  function pickImage() {
    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
        ('You cancelled image picker 😟');
      } else if (response.error) {
        alert('And error occured: ', response.error);
      } else {
        const source = { uri: response.uri };
        setAvatarSource(source);
      }
    });
  }
  const formRef = useRef(null);
  const [
    isCreatingVolunteer,
    signUpVolunteer,
    { toggle: toggleIsCreatingVolunteer },
  ] = useAwait(createVolunteer);
  const [
    isCreatingHealthProfessional,
    signUpHealthProfessional,
    { toggle: toggleIsCreatingHealthProfessional },
  ] = useAwait(createVolunteer);
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
      <CircleGradientBackground colors={['#79e7e1', '#FFFFFF']} />
      <Header title="Perfil" type="secondary" />
      <Description>
        Falta pouco para você acessar o Ampara. Preencha seus dados abaixo:
      </Description>
      <Camera onPress={() => pickImage()} source={avatarSource} />

      <Form ref={formRef} onSubmit={handleSubmit}>
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
