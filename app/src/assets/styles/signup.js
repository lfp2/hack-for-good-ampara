import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-community/picker';

export const ViewInput = styled.View`
  border-bottom-color: #8c8c8c;
  border-bottom-width: 1px;
  margin-bottom: 5px;
  width: 80%;
`;

export const Input = styled.TextInput`
  padding-left: 5px;
  height: 40px;
  width: 80%;
  border-bottom-color: #8c8c8c;
  border-bottom-width: 1px;
  margin-bottom: 10px;
`;

export const HeaderInput = styled.TextInput`
  padding-left: 5px;
  height: 40px;
  width: 180px;
  border-bottom-color: #000;
  margin: 0;
`;

export const HeaderTextView = styled.View`
  justify-content: flex-start;
  margin: 10px;
`;

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
`;

export const SwitchNotification = styled.Switch.attrs({
  trackColor: {
    false: '#767577',
    true: '#81b0ff',
  },
})``;

export const SwitchText = styled.Text`
  padding-left: 5px;
  font-size: 15px;
`;

export const SwitchView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
`;

export const TextInputIcons = styled.Image`
  height: 24px;
  width: 24px;
  margin: 10px;
  resize-mode: contain;
`;

export const TextInputView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.Text`
  font-size: 24px;
  font-family: Suprema-Black;
  padding: 24px;
`;

export const Button = styled.TouchableOpacity`
  background: #79e7e1;
  width: 180px;
  height: 40px;
  padding: 24px;
  margin: 12px;
  border-radius: 24px;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-family: Suprema-Regular;
  text-align: center;
`;

export const CircleGradientBackground = styled(LinearGradient)`
  position: absolute;
  height: 30%;
  width: 100%;
  top: 0;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
`;

export const InputIcon = styled(Icon)`
  color: #76b1e6;
  font-size: 24px;
  margin: 10px;
`;

export const TextError = styled.Text`
  color: #ff0000;
  font-size: 10px;
  font-family: Suprema-Regular;
  text-align: left;
  margin: 10px;
`;

export const StyledScrollView = styled.ScrollView`
  width: 90%;
`;

export const StyledPicker = styled(Picker)`
  padding-left: 5px;
  height: 40px;
  width: 80%;
`;
