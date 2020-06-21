import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`;

export const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.white};
  flex: 1;
`;

const Text = styled.Text`
  color: ${(props) => props.theme.black};
  margin: 0;
  width: 100%;
  padding: 0 20px;
  text-align: left;
`;

export const Title = styled(Text)`
  font-family: Poppins-SemiBold;
  font-size: 16px;
  width: 100%;
  max-width: 500px;
`;

export const Description = styled(Text)`
  font-family: Poppins-Regular;
  font-size: 14px;
  margin: 10px 0;
  width: 100%;
  max-width: 500px;
`;

export const Section = styled.View`
  margin: 10px 0;
  width: 100%;
  max-width: 500px;
`;
