import React from 'react';
import {
  Container,
  Touchable,
  DefaultImage,
  CircleImage,
  Info,
} from './styles';
import ImagePicker from 'react-native-image-picker';
import { useState } from 'react';

const Camera = () => {
  const [source, setSource] = useState('');
  function pickImage() {
    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
        ('You cancelled image picker 😟');
      } else if (response.error) {
        alert('And error occured: ', response.error);
      } else {
        const source = { uri: response.uri };
        setSource(source);
      }
    });
  }
  return (
    <Container>
      <Touchable onPress={pickImage}>
        {source === '' ? <DefaultImage /> : <CircleImage source={source} />}
      </Touchable>
      <Info>Definir Foto</Info>
    </Container>
  );
};

export default Camera;
