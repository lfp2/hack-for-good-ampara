import styled from 'styled-components';
import BaseButton from '../../components/Button';
import BaseSecretIconedInput from '../../components/Input/SecretIconedInput';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Button = styled(BaseButton)`
  margin-top: auto;
  margin-bottom: 50px;
`;

export const SecretIconedInput = styled(BaseSecretIconedInput)`
  margin: 10px auto;
`;
