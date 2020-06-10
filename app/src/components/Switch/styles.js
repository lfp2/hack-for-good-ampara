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

export const StyledSwitch = styled.Switch.attrs((props) => {
  return {
    trackColor: {
      false: '#959595',
      true: '#7AC1CE',
    },
    thumbColor: props.value ? '#99EAF9' : '#797979',
  };
})``;

export const Text = styled.Text`
  color: #333333;
  font-family: Poppins-Medium;
  font-weight: 600;
  font-size: 14px;
`;

export const Error = styled.Text`
  font-size: 10px;
  color: #ff0000;
  /* margin: 5px 0; */
`;
