import React from 'react';
import { Container } from './styles';
import Anchor, { Anchors } from '../../components/Anchor';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HelpScreen = ({ navigation }) => {
  return (
    <Container>
      <Header title="Segurança" type="secondary" />
      <Anchors>
        <Anchor
        src={require("../../assets/images/Ampara-Simbolo.png")}
        >
            Problemas com o aplicativo
        </Anchor>
        <Anchor
          icon="md-help"
          iconPack={Ionicons}
          iconSize={30}
          onPress={() => {
            navigation.navigate('Security');
          }}>
          Dúvidas Frequentes
        </Anchor>
      </Anchors>
    </Container>
  );
};

export default HelpScreen;
