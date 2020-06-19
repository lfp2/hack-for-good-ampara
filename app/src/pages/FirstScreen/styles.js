import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.white};
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

export const Buttons = styled.View`
  flex: 2;
  align-items: center;
  width: 100%;
`;

export const ButtonView = styled.View`
  padding: 8px;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: require('src/assets/images/Ampara-Logo-branco.png'),
})`
  width: 70%;
  max-width: 300px;
  height: 40px;
  resize-mode: contain;
  flex: 4;
  margin: 0 auto;
  justify-content: center;
`;
