import React from 'react';
import {
  Container,
  Header,
  ProfilePicture,
  Info,
  Name,
  Role,
  Separator,
  Anchor,
  BottomAnchor,
  BackFold,
} from './styles';
import fontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import entypoIcon from 'react-native-vector-icons/Entypo';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { interpolate } from 'react-native-reanimated';
const Nav = ({ orientation, navigation, progress, ...props }) => {
  const goTo = (to) => {
    navigation.navigate(to);
    navigation.closeDrawer();
  };
  return (
    <Container orientation={orientation}>
      <Header
        onPress={() => {
          goTo('Perfil');
        }}>
        <ProfilePicture />
        <Info>
          <Name>Juilio Figueiredo</Name>
          <Role>Técnica em Enfermagem</Role>
        </Info>
      </Header>
      <Separator />
      <Anchor icon="ios-person">Meus Dados</Anchor>
      <Separator />
      <Anchor icon="check" iconPack={fontAwesomeIcon}>
        Boas práticas
      </Anchor>
      <Separator />
      <BackFold
        onPress={() => {
          navigation.closeDrawer();
        }}
        style={{
          transform: [
            {
              translateY: -80 / 2,
              translateX: interpolate(progress, {
                inputRange: [0, 1],
                outputRange: [0, 26],
              }),
            },
          ],
        }}
      />
      <Anchor icon="cog" iconPack={entypoIcon}>
        Configurações
      </Anchor>
      <Separator />
      <BottomAnchor
        orientation={orientation}
        icon="power-off"
        iconPack={fontAwesomeIcon}>
        Sair
      </BottomAnchor>
    </Container>
  );
};

export default Nav;
