import React from 'react';
import Profile from 'src/components/Profile';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import ProfileButton, { ProfileButtons } from 'src/components/ProfileButton';
import { useNavigation } from '@react-navigation/native';
import Button from 'src/components/Button';
import { useStoreState } from 'easy-peasy';
import healthTypes from 'src/assets/strings/healthTypes';
import * as Linking from 'expo-linking';

const HomePageScreen = () => {
  const { displayName, profession } = useStoreState((state) => state.health);

  const navigation = useNavigation();
  const safeProfession = healthTypes.find(({ value }) => value === profession)
    ?.label;
  return (
    <Profile
      data={{
        name: displayName,
        profession: safeProfession,
      }}>
      <ProfileButtons>
        <ProfileButton
          icon="calendar-month"
          onPress={() => {
            navigation.navigate('HealthCalendar');
          }}>
          Agendar Consulta
        </ProfileButton>
        <ProfileButton
          icon="book"
          iconPack={FontAwesome5Icons}
          onPress={() => {
            navigation.navigate('MyAppointments');
          }}>
          Consultas
        </ProfileButton>
      </ProfileButtons>
      <Button
        width="80%"
        onPress={() => {
          Linking.openURL('tel:+551132303536');
        }}>
        QUERO ATENDIMENTO AGORA
      </Button>
    </Profile>
  );
};

export default HomePageScreen;
