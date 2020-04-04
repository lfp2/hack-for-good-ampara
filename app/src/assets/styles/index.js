import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

export const ViewCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScreenCenter = styled(ViewCenter)`
  background: #d9d9d9;
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
