import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.white};
`;

export const VoluntarioImage = styled.Image.attrs({
  source: require('src/assets/images/voluntario.png'),
})`
  width: 250px;
  height: 40px;
  margin: 0 auto;
  resize-mode: contain;
  margin: 20px auto;
  flex: 3;
  justify-content: center;
`;

export const FootnoteImage = styled.Image.attrs({
  source: require('src/assets/images/footnote_volunteer.png'),
})`
  resize-mode: cover;
  flex: 1;
  background-color: yellow;
  /* justify-content: flex-end; */
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

export const TitleText = styled.Text`
  font-size: 48px;
  color: ${(props) => props.theme.black};
`;

export const SubtitleText = styled.Text`
  padding-left: 48px;
  padding-right: 48px;
  text-align: center;
  font-size: 16px;
  color: #000000;
`;
