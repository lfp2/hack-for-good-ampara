import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export const Container = styled.View`
  height: 64px;
  width: 100%;
  /* flex: 1; */
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #74b0e8;
`;
export const IconWrapper = styled.TouchableOpacity`
  align-items: center;
  position: absolute;
  left: 15px;
`;
export const BackIcon = styled(Icon).attrs({
  name: 'arrow-left',
  color: 'white',
  size: 30,
})``;

export const Title = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  line-height: 35px;
  text-align: center;
  margin: 10px auto;
`;
