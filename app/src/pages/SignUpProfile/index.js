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

export default function SignUpProfileScreen() {
  const [avatarSource, setAvatarSource] = useState('');
  const accountType = useStoreState((state) => state.userData.accountType);
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
  const handleSubmit = async (data) => {
    const isValid = await validate(
      accountType === 'health' ? healthSchema : volunteerSchema,
      data,
      formRef,
    );
    console.log(isValid, data);
  };
  const scrollRef = useRef();
  const bioRef = useRef();
  const phoneRef = useRef();
  const cepRef = useRef();
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
          placeholder="Biografia"
          icon="file-document-box-multiple"
          scrollViewRef={scrollRef}
          afterFinishing={() => {
            formRef.current?.getFieldRef('profession').focus();
          }}
        />
        <IconedInput
          name="profession"
          placeholder="Profissão*"
          icon="clipboard-plus"
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => {
            formRef.current?.getFieldRef('numberRegistry').focus();
          }}
        />
        <IconedInput
          name="numberRegistry"
          placeholder={accountType === 'health' ? 'CRM*' : 'CRP*'}
          icon="account-card-details"
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => {
            phoneRef.current?.getElement().focus();
          }}
        />

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
