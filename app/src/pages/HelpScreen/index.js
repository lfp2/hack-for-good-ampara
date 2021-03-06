import React from 'react';
import { Container } from './styles';
import Anchor, { Anchors } from 'src/components/Anchor';
import Header from 'src/components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HelpScreen = ({ navigation }) => {
  return (
    <Container>
      <Header title="Ajuda" type="secondary" />
      <Anchors>
        <Anchor
          src={require('src/assets/images/Ampara-Simbolo.png')}
          onPress={() => {
            navigation.navigate('Troubleshoot');
          }}>
          Problemas com o aplicativo
        </Anchor>
        <Anchor
          icon="md-help"
          iconPack={Ionicons}
          iconSize={30}
          onPress={() => {
            navigation.navigate('Faq');
          }}>
          Dúvidas Frequentes
        </Anchor>
      </Anchors>
    </Container>
  );
};

export default HelpScreen;
