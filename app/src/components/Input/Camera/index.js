import React from 'react';
import {
  Container,
  Touchable,
  DefaultImage,
  CircleImage,
  Info,
} from './styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
// import ImagePicker from 'react-native-image-picker';
import { useState } from 'react';

const Camera = () => {
  // return null;
  const [source, setSource] = useState('');
  const getPermissionAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      throw new Error('Permission to access camera roll is required!');
    }
  };

  async function pickImage() {
    try {
      await getPermissionAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        const source = { uri: result.uri };
        setSource(source);
      }
      // console.log(result);
    } catch (E) {
      // console.log("You cancelled image picker 😟");
      // console.log(E);
    }
    //   ImagePicker.showImagePicker((response) => {
    //     if (response.didCancel) {
    //     } else if (response.error) {
    //       alert('And error occured: ', response.error);
    //     } else {
    //     }
    //   });
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
