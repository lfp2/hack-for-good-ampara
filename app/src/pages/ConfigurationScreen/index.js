import React from "react";
import { Container } from "./styles";
import Anchor, { Anchors } from "src/components/Anchor";
import Header from "src/components/Header";
import mdIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ConfigurationScreen = ({ navigation }) => {
  return (
    <Container>
      <Header title="Configurações" type="secondary" />
      <Anchors>
        <Anchor
          icon="shield-alt"
          onPress={() => {
            navigation.navigate("Security");
          }}
        >
          Segurança
        </Anchor>
        <Anchor
          icon="bell"
          iconPack={mdIcons}
          onPress={() => {
            navigation.navigate("Notifications");
          }}
        >
          Notificações
        </Anchor>
        <Anchor
          icon="information"
          iconPack={mdIcons}
          onPress={() => {
            navigation.navigate("About");
          }}
        >
          Sobre
        </Anchor>
        <Anchor
          icon="help-circle"
          iconPack={mdIcons}
          onPress={() => navigation.navigate("Help")}
        >
          Ajuda
        </Anchor>
      </Anchors>
    </Container>
  );
};

export default ConfigurationScreen;
