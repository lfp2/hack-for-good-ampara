import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: require('../../assets/images/Ampara-Logo-preto.png'),
})`
  margin: 10px auto;
  width: 60%;
  min-width: 200px;
  resize-mode: contain;
`;
