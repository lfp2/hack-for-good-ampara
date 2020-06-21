import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.white};
`;

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.white};
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: require('src/assets/images/Ampara-Logo-preto.png'),
})`
  margin: 10px auto;
  width: 60%;
  min-width: 200px;
  resize-mode: contain;
`;
