import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { ScreenCenter } from '../assets/styles';
import {
  CircleGradientBackground,
  TextTitle,
  Input,
  TextInputIcons,
  TextInputView,
  Button,
  TextButton,
  InputIcon,
  CameraView,
  CircleButton,
  CircleIcon,
  CircleButtonText,
  SwitchView,
  SwitchNotification,
  SwitchText,
  CircleImage,
  TextError,
  StyledScrollView,
  StyledPicker,
} from '../assets/styles/signup';
import { Picker } from '@react-native-community/picker';
import { brazilStates } from '../assets/strings/states';
import ImagePicker from 'react-native-image-picker';

export default function SignUpProfileScreen() {
  const { control, handleSubmit, errors } = useForm();
  const [avatarSource, setAvatarSource] = useState('');
  const [notification, setNotification] = useState(false);
  const [terms, setTerms] = useState(false);
  const [brazilianState, setBraziliaState] = useState('UF de atuação*');
  const updateUserData = useStoreActions((actions) => actions.updateUserData);
  const accountType = useStoreState((state) => state.userData.accountType);
  const email = useStoreState((state) => state.userData.email);

  function pickImage() {
    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
        console.log('You cancelled image picker 😟');
      } else if (response.error) {
        alert('And error occured: ', response.error);
      } else {
        const source = { uri: response.uri };
        setAvatarSource(source);
      }
    });
  }

  return (
    <ScreenCenter>
      <CircleGradientBackground colors={['#79e7e1', '#FFFFFF']} />
      <TextTitle>Perfil</TextTitle>
      <CameraView>
        <CircleButton onPress={() => pickImage()}>
          {avatarSource === '' ? (
            <CircleIcon source={require('../assets/icons/camera.png')} />
          ) : (
            <CircleImage source={avatarSource} />
          )}
        </CircleButton>
        <CircleButtonText>foto de perfil</CircleButtonText>
      </CameraView>
      <StyledScrollView>
        <TextInputView>
          <InputIcon name="account" />
          <Controller
            as={Input}
            control={control}
            name="name"
            onChange={(args) => args[0].nativeEvent.text}
            rules={{ required: true }}
            placeholder="Nome completo*"
          />
        </TextInputView>
        {errors.name && <TextError>Esse campo é obrigatório</TextError>}
        <TextInputView>
          <InputIcon name="file-document-box-multiple" />
          <Input placeholder="Biografia*" />
        </TextInputView>
        {errors.bio && <TextError>Esse campo é obrigatório</TextError>}
        <TextInputView>
          <TextInputIcons source={require('../assets/icons/map-doctor.png')} />
          <Controller
            as={Input}
            control={control}
            name="profession"
            onChange={(args) => args[0].nativeEvent.text}
            rules={{ required: true }}
            placeholder="Profissão*"
          />
        </TextInputView>
        {errors.profession && <TextError>Esse campo é obrigatório</TextError>}
        <TextInputView>
          <InputIcon name="account-card-details" />
          <Controller
            as={Input}
            control={control}
            name="numberRegistry"
            onChange={(args) => args[0].nativeEvent.text}
            rules={{ required: true }}
            placeholder="Número de registro profissional*"
          />
        </TextInputView>
        <TextInputView>
          <InputIcon name="phone" />
          <Controller
            as={Input}
            control={control}
            name="phone"
            onChange={(args) => args[0].nativeEvent.text}
            mask="(99) 99999-9999"
            rules={{ required: true }}
            placeholder="Telefone*"
          />
        </TextInputView>
        <TextInputView>
          <InputIcon name="city" />
          <StyledPicker
            selectedValue={brazilianState}
            onValueChange={(v) => setBraziliaState(v)}>
            {brazilStates.map((item, index) => {
              return <Picker.Item value={index} key={index} label={item} />;
            })}
          </StyledPicker>
        </TextInputView>
        <TextInputView>
          <InputIcon name="city" />
          <Controller
            as={Input}
            control={control}
            name="city"
            onChange={(args) => args[0].nativeEvent.text}
            rules={{ required: true }}
            placeholder="Cidade de atuação"
          />
        </TextInputView>
        <TextInputView>
          <InputIcon name="city" />
          <Controller
            as={Input}
            control={control}
            name="cep"
            onChange={(args) => args[0].nativeEvent.text}
            rules={{ required: true }}
            placeholder="CEP"
          />
        </TextInputView>
        <SwitchView>
          <SwitchText>Habilitar notificações</SwitchText>
          <SwitchNotification
            onValueChange={() =>
              setNotification((previousState) => !previousState)
            }
            value={notification}
          />
        </SwitchView>
        <SwitchView>
          <SwitchText>Concordo com os Termos de Uso</SwitchText>
          <SwitchNotification
            onValueChange={() => setTerms((previousState) => !previousState)}
            value={terms}
          />
        </SwitchView>
        <ScreenCenter>
          <Button onPress={handleSubmit()}>
            <TextButton>CADASTRAR</TextButton>
          </Button>
        </ScreenCenter>
      </StyledScrollView>
    </ScreenCenter>
  );
}
