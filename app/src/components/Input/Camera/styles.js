import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
`;
export const Touchable = styled.TouchableOpacity`
  height: 120px;
  width: 120px;
  padding: 5px;
  border-radius: 200px;
  background-color: ${(props) => props.theme.blue};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DefaultImage = styled.Image.attrs({
  source: require("src/assets/icons/camera.png"),
})`
  width: 30%;
  /* height: 50px; */
  /* width: 50px; */
  /* padding: 5px; */
  aspect-ratio: 1;
`;
export const CircleImage = styled.Image`
  height: 120px;
  width: 120px;
  padding: 5px;
  border-radius: 160px;
  border-width: 5px;
  border-color: ${(props) => props.theme.blue};
  margin: 10px auto;
`;

export const Info = styled.Text`
  color: #8c8c8c;
  font-size: 12px;
  margin: 2px;
`;
