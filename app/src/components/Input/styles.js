import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  max-width: 350px;
  margin: 10px auto;
`;

export const Label = styled.Text`
  color: #479dec;
  font-weight: bold;
`;

export const Line = styled.View`
  background-color: #7777774d;
  width: 100%;
  height: 2px;
  margin: 2px 0;
`;

export const TextInput = styled.TextInput`
  padding: 5px 5px;
`;

export const Error = styled.Text`
  color: #ff0000;
  /* margin: 3px 0; */
`;
