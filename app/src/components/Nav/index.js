import React from 'react';
import {
  Container,
  Header,
  ProfilePicture,
  Info,
  Name,
  Role,
  BottomAnchor,
  BackFold,
} from './styles';

import Anchor, { Separator } from 'src/components/Anchor';
import fontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import entypoIcon from 'react-native-vector-icons/Entypo';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { interpolate } from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';
const Nav = ({ orientation, navigation, progress, ...props }) => {
  const goTo = (to) => {
    navigation.navigate(to);
    navigation.closeDrawer();
  };
  const exit = async () => {
    await AsyncStorage.removeItem('@AmparaApp:volunteer');
    await AsyncStorage.removeItem('@AmparaApp:health');
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'FirstScreen',
        },
      ],
    });
  };
  return (
    <Container orientation={orientation}>
      <Header
        onPress={() => {
          goTo('Perfil');
        }}>
        <ProfilePicture />
        <Info>
          <Name>Julio Figueiredo</Name>
          <Role>Psicologo</Role>
        </Info>
      </Header>
      <Separator />
      <Anchor icon="ios-person" iconPack={Ionicons} noRightArrow>
        Meus Dados
      </Anchor>
      <Anchor
        icon="check"
        iconPack={fontAwesomeIcon}
        onPress={() => {
          navigation.navigate('NiceHabits');
        }}
        noRightArrow>
        Boas práticas
      </Anchor>
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
      <Anchor
        icon="cog"
        iconPack={entypoIcon}
        onPress={() => {
          navigation.navigate('Configuration');
        }}
        noRightArrow>
        Configurações
      </Anchor>
      <Separator />
      <BottomAnchor
        onPress={exit}
        orientation={orientation}
        icon="power-off"
        iconPack={fontAwesomeIcon}>
        Sair
      </BottomAnchor>
    </Container>
  );
};

export default Nav;
