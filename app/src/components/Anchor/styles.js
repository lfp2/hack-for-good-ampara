import styled from 'styled-components/native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px 25px;
  align-items: center;
`;

export const Anchors = styled.View`
  flex-direction: column;
  margin: 20px 0;
`;

export const Icon = styled(FontAwesome5Icons).attrs({
  color: '#74B0E8',
})`
  margin: 0 20px;
  width: 30px;
`;

export const Image = styled.Image`
  margin: 0 20px;
  width: 30px;
  height: 25px;
  resize-mode: contain;
`;

export const RightArrow = styled(SimpleLineIcons).attrs({
  size: 18,
  color: 'rgba(0,0,0,0.4)',
  name: 'arrow-right',
})`
  margin-left: auto;
  font-weight: bold;
`;

export const Separator = styled.View`
  width: 80%;
  margin: 0 auto;
  height: 1px;
  background-color: #adadad29;
`;
export const AnchorText = styled.Text`
  color: #333333;
  font-weight: bold;
  font-size: 16px;
`;
