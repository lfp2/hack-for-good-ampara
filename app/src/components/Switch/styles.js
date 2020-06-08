import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  max-width: 350px;
  margin: 5px auto;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSwitch = styled.Switch.attrs({
  trackColor: {
    false: '#767577',
    true: '#81b0ff',
  },
})``;

export const Text = styled.Text`
  color: #333333;
  font-size: 14px;
`;

export const Error = styled.Text`
  font-size: 10px;
  color: #ff0000;
  /* margin: 5px 0; */
`;
