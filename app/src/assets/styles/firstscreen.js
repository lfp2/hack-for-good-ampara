
import styled from 'styled-components/native';

import { TextCenter } from './index';

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

export const ButtonsView = styled.View`
  flex: 2;
  align-items: center;
`;

export const ButtonView = styled.View`
  padding: 8px;
  align-items: center;
`;

export const LogoImage = styled.Image`
    width: 250px;
    height: 40px;
    resize-mode: contain;
    flex: 4;
    justifyContent: center;
`;