import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const ViewCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScreenCenter = styled(ViewCenter)`
  background: #ffffff;
`;

export const TextCenter = styled.Text`
  text-align: center;
`;

export const BackgroundImage = styled.Image`
    flex: 1;
    resizeMode: cover;
    justifyContent: center;
    position: absolute;
`;

export const Button = styled.TouchableOpacity`
  background: #ffffff;
  width: 250px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
`;

export const PrimaryButton = styled(Button)`
    background: #76b1e6; 
`;

export const TextButton = styled(TextCenter)`
    color: #000000;
    font-size: 15px;
`;

export const PrimaryTextButton = styled(TextButton)`
    color: #ffffff;
`;
