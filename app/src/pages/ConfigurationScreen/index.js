import React from 'react';
import { Container, Anchors, Anchor } from './styles';
import Header from '../../components/Header';
import mdIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ConfigurationScreen = ({ navigation }) => {
  return (
    <Container>
      <Header title="Configurações" type="secondary" />
      <Anchors>
        <Anchor
          icon="shield-alt"
          onPress={() => {
            navigation.navigate('Security');
          }}>
          Segurança
        </Anchor>
        <Anchor
          icon="bell"
          iconPack={mdIcons}
          onPress={() => {
            navigation.navigate('Notifications');
          }}>
          Notificações
        </Anchor>
        <Anchor icon="information" iconPack={mdIcons}>
          Sobre
        </Anchor>
        <Anchor icon="help-circle" iconPack={mdIcons}>
          Ajuda
        </Anchor>
      </Anchors>
    </Container>
  );
};

export default ConfigurationScreen;
