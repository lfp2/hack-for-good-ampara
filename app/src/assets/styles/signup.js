import styled from 'styled-components/native';

export const CircleButton = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
    padding: 5px;
    border-radius: 200px;
    background: #779fe0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CircleButtonText = styled.Text`
    color: #8c8c8c;
    font-size: 12px;
    margin: 2px;
`;

export const CameraView = styled.View`
  align-items: center;
`;

export const CircleIcon = styled.Image`
    height: 50px;
    width: 50px;
    padding: 5px;
    resize-mode: contain;
`;

export const ViewInput = styled.View`
  border-bottom-color: #8c8c8c;
  border-bottom-width: 1px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  padding-left: 5px;
  height: 40px;
  width: 280px;
  border-bottom-color: #000;
  margin: 0;
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

export const SwitchNotification = styled.Switch`
 track-color: { 
   false: "#767577", 
   true: "#81b0ff" 
  };
`;

export const SwitchText = styled.Text`
  padding-left: 5px;
  font-size: 15px;
`;

export const SwitchView = styled.View`
  align-self: flex-start;
  padding-left: 36px;
  margin: 5px;
`;

export const TextInputIcons = styled.Image`
    height: 20px;
    width: 20px;
    margin: 5px;
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
  padding:24px;
`;

export const Button = styled.TouchableOpacity`
  background: #79e7e1;
  width: 180px;
  height: 40px;
  padding: 24px;
  margin: 12px;
  border-radius: 24px;
  justifyContent: center;
`;

export const TextButton = styled.Text`
    color: #ffffff;
    font-size: 15px;
    font-family: Suprema-Regular;
    text-align: center;
`;
