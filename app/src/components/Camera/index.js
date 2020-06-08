import React from 'react';
import {
  Container,
  Touchable,
  DefaultImage,
  CircleImage,
  Info,
} from './styles';
const Camera = ({ source, onPress }) => {
  return (
    <Container>
      <Touchable onPress={onPress}>
        {source === '' ? <DefaultImage /> : <CircleImage source={source} />}
      </Touchable>
      <Info>Definir Foto</Info>
    </Container>
  );
};

export default Camera;
