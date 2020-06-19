import React from 'react';
import Profile from 'src/components/Profile';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import ProfileButton, { ProfileButtons } from 'src/components/ProfileButton';
import { useNavigation } from '@react-navigation/native';
import Button from 'src/components/Button';

const HomePageScreen = () => {
  const navigation = useNavigation();

  return (
    <Profile>
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
      <Button width="80%">QUERO ATENDIMENTO AGORA</Button>
    </Profile>
  );
};

export default HomePageScreen;
