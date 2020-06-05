import styled from 'styled-components/native';

import { TextCenter } from './index';
import { Picker } from '@react-native-community/picker';

export const ContainerForm = styled.View`
  width: 80%;
  flex: 2;
  background: #fff;
  padding: 18px;
  border-radius: 8px;
`;

export const Logo = styled.Image`
  width: 160px;
  height: 60px;
  resize-mode: contain;
  flex: 2;
  justifycontent: center;
`;

export const ViewInputs = styled.View`
  border-bottom-color: #8c8c8c;
  border-bottom-width: 1px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  padding-left: 5px;
  height: 40px;
  width: 80%;
  border-bottom-color: #000;
  margin: 0;
`;

export const Button = styled.TouchableOpacity`
  background: #779fe0;
  padding: 8px;
  border-radius: 5px;
`;

export const TextButton = styled(TextCenter)`
  color: #fff;
  font-size: 15px;
`;

export const SubPagesLogin = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 6px 0 24px 0;
`;

export const SubPagesText = styled.Text`
  font-size: 10px;
  font-weight: 400;
`;

export const StyledPicker = styled(Picker)`
  margin: 10px;
`;

export const TextMenu = styled(TextCenter)`
  color: #76b1e6;
  font-size: 24px;
`;
