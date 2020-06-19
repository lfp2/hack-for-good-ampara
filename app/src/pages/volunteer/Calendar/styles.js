import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MyScreen = styled.View`
  flex: 1;
  padding-vertical: 10px;
`;

export const RectangleBackground = styled.View`
  position: absolute;
  height: 10%;
  width: 100%;
  background: #76b1e6;
  top: 0;
`;

export const TextHeader = styled.Text`
  font-family: Suprema-Bold;
  color: ${(props) => props.theme.white};
  font-size: 23px;
  text-align: center;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 8%;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const HeaderIcon = styled(Icon)`
  color: ${(props) => props.theme.white};
  font-size: 30px;
`;

export const CalendarView = styled.View`
  padding: 20px;
`;

export const ButtonView = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
`;
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  align-items: baseline;
`;

export const SecondaryText = styled.Text`
  color: #ccc;
  font-size: 16px;
  text-align: left;
  font-family: Suprema-Light;
`;
