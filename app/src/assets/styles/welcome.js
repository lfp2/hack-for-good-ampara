import styled from 'styled-components/native';

import { Button } from './index';

export const VoluntarioImage = styled.Image`
  width: 250px;
  height: 40px;
  resize-mode: contain;
  margin: 20px auto;
  flex: 3;
  justify-content: center;
`;

export const FootnoteImage = styled.Image`
  resize-mode: cover;
  flex: 1;
  justify-content: flex-end;
`;

export const ButtonsView = styled.View`
  flex: 2;
  width: 100%;
  align-items: center;
`;

export const TextView = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const ButtonView = styled.View`
  padding: 8px;
  align-items: center;
`;

export const BoxShadowButton = styled(Button)`
  box-shadow: 5px 5px 5px #000;
  elevation: 1;
`;

export const TitleText = styled.Text`
  font-size: 48px;
  color: #000000;
`;

export const SubtitleText = styled.Text`
  padding-left: 48px;
  padding-right: 48px;
  text-align: center;
  font-size: 16px;
  color: #000000;
`;
