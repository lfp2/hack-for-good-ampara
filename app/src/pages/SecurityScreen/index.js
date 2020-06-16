import React from 'react';
import { Container } from './styles';
import Anchor, { Anchors } from '../../components/Anchor';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SecurityScreen = ({ navigation }) => {
  return (
    <Container>
      <Header title="Segurança" type="secondary" />
      <Anchors>
        <Anchor
          icon="ios-person"
          iconPack={Ionicons}
          iconSize={30}
          onPress={() => {
            navigation.navigate('NewPassword');
          }}>
          Senha
        </Anchor>
        <Anchor iconSize={20} icon="key">
          Informação de Login Salvas
        </Anchor>
      </Anchors>
    </Container>
  );
};

export default SecurityScreen;
