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
import { schema } from './validation';
import ModalInput from '../../components/Input/ModalInput';

export default function SignUpProfileScreen() {
  const [avatarSource, setAvatarSource] = useState('');

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
    const isValid = await validate(schema, data, formRef);
    console.log(isValid, data);
  };
  const scrollRef = useRef();
  const bioRef = useRef();
  const professionRef = formRef.current?.getFieldRef('profession');
  const numberRegistryRef = formRef.current?.getFieldRef('numberRegistry');
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
            professionRef?.focus();
          }}
        />
        <IconedInput
          name="profession"
          placeholder="Profissão*"
          icon="clipboard-plus"
          blurOnSubmit={false}
          returnKeyType="next"
          onSubmitEditing={() => {
            numberRegistryRef?.focus();
          }}
        />
        <IconedInput
          name="numberRegistry"
          placeholder="Número de registro profissional*"
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
      <SeeTerms to="Terms">
        VER TERMOS DE USO E POLÍTICA DE PRIVACIDADE
      </SeeTerms>
    </Container>
  );
}
