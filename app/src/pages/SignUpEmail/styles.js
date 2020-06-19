import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.white};
`;

export const Spacer = styled.View`
  margin: 30px auto;
  width: 100%;
`;

export const Description = styled.Text`
  text-align: center;
  margin: 20px auto;
  color: ${(props) => props.theme.black};
  font-weight: 700;
`;
