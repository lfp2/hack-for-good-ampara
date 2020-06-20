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
import { useStoreActions, useStoreState } from 'easy-peasy';
import healthTypes from 'src/assets/strings/healthTypes';
const Nav = ({ orientation, navigation, progress, ...props }) => {
  const goTo = (to) => {
    navigation.navigate(to);
    navigation.closeDrawer();
  };
  const resetVolunteer = useStoreActions((state) => state.volunteer.reset);
  const resetHealth = useStoreActions((state) => state.health.reset);
  const accountType = useStoreState((state) => state.user.accountType);
  const volunteerData = useStoreState((state) => state.volunteer);
  const healthData = useStoreState((state) => state.health);
  const data = accountType === 'health' ? healthData : volunteerData;
  const { displayName } = data;
  const profession =
    healthTypes.find(({ value }) => value === data.profession)?.label ||
    'Psicólogo(a)';

  const exit = async () => {
    await resetVolunteer();
    await resetHealth();
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
          <Name>{displayName}</Name>
          <Role>{profession}</Role>
        </Info>
      </Header>
      <Separator />
      <Anchor
        icon="ios-person"
        iconPack={Ionicons}
        noRightArrow
        onPress={() => {
          goTo('MyInfo');
        }}>
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
