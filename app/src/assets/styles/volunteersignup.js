import styled from 'styled-components/native';

import { Button } from './index';

export const CircleButton = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
    padding: 5px;
    border-radius: 200px;
    background: #779fe0;
    justifyContent: center;
`;

export const CircleIcon = styled.Image`
    height: 90px;
    width: 90px;
    padding: 5px;
    resize-mode: contain;
`;

export const ViewInput = styled.View`
  border-bottom-color: #8c8c8c;
  border-bottom-width: 1px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  padding-left: 5px;
  height: 40px;
  border-bottom-color: #000;
  margin: 0;
`;

export const HeaderInput = styled.TextInput`
  padding-left: 5px;
  height: 20px;
  border-bottom-color: #000;
  margin: 0;
`;