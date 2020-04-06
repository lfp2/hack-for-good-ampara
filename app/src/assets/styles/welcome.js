import styled from 'styled-components/native';

import { Button } from './index';

export const VoluntarioImage = styled.Image`
    width: 250px;
    height: 40px;
    resize-mode: contain;
    flex: 3;
    justifyContent: center;
`;


export const FootnoteImage = styled.Image`
    resize-mode: cover;
    flex: 1;
    justifyContent: flex-end;
`;

export const ButtonsView = styled.View`
  flex: 2;
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
    shadowColor: #000;
    shadowOffset: {
        width: 0,
        height:1,
    };
    shadowOpacity: 0.05;
    elevation: 1;
`;

export const TitleText = styled.Text`
    fontSize: 48px;
    color: #000000;
`;

export const SubtitleText = styled.Text`
    padding-left: 48px;
    padding-right: 48px;
    textAlign: center;
    fontSize: 16px;
    color: #000000;
`;