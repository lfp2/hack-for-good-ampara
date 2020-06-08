import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;
export const Touchable = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  padding: 5px;
  border-radius: 200px;
  background: #779fe0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DefaultImage = styled.Image.attrs({
  source: require('../../assets/icons/camera.png'),
})`
  width: 30%;
  /* height: 50px; */
  /* width: 50px; */
  /* padding: 5px; */
  aspect-ratio: 1;
`;
export const CircleImage = styled.Image`
  height: 80px;
  width: 80px;
  padding: 5px;
  border-radius: 160px;
`;

export const Info = styled.Text`
  color: #8c8c8c;
  font-size: 12px;
  margin: 2px;
`;
