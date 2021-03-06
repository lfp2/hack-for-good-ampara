import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  height: 80px;
  width: 100%;
  /* flex: 1; */
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) =>
    props.type === 'primary' ? props.theme.blue : 'transparent'};
`;

export const IconWrapper = styled.TouchableOpacity`
  align-items: center;
  position: absolute;
  left: 15px;
  z-index: 100;
`;

export const BackIcon = styled(Icon).attrs((props) => ({
  name: 'arrow-left',
  color: props.type === 'primary' ? props.theme.white : props.theme.blue,
  size: 30,
}))``;

export const Title = styled.Text`
  font-size: 24px;
  font-family: Poppins-ExtraBold;
  letter-spacing: 1px;
  color: ${(props) =>
    props.type === 'primary' ? props.theme.white : props.theme.black};
  line-height: 35px;
  text-align: center;
  margin: 10px auto;
  width: 70%;
`;
