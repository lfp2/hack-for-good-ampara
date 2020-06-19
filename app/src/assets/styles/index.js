import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const ViewCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScreenCenter = styled(ViewCenter)`
  background: ${(props) => props.theme.white};
`;

export const TextCenter = styled.Text`
  text-align: center;
`;

export const BackgroundImage = styled.Image.attrs({
  source: require('src/assets/images/background.png'),
})`
  flex: 1;
  resize-mode: cover;
  width: 100%;
  height: 100%;
  justify-content: center;
  position: absolute;
`;

export const Button = styled.TouchableOpacity`
  background: ${(props) => props.theme.white};
  width: 250px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  justify-content: center;
`;

export const PrimaryButton = styled(Button)`
  background: #76b1e6;
`;

export const TextButton = styled(TextCenter)`
  color: #000000;
  font-size: 15px;
`;

export const PrimaryTextButton = styled(TextButton)`
  color: ${(props) => props.theme.white};
`;
