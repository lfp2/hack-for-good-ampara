import React from 'react';
import { HealthSwitch } from './styles';
import useToggle from 'react-use/lib/useToggle';
import { useNavigation } from '@react-navigation/native';
import ProfileButton, { ProfileButtons } from 'src/components/ProfileButton';
import Profile from 'src/components/Profile';

const VolunteerProfile = () => {
  const navigation = useNavigation();
  const [notification, toggleNotification] = useToggle(true);
  const handleNavigate = (to) => {
    navigation.navigate(to);
  };

  return (
    <Profile>
      <ProfileButtons>
        <ProfileButton onPress={() => handleNavigate('Calendar')} icon="clock">
          Meus horários
        </ProfileButton>
        <ProfileButton
          onPress={() => handleNavigate('Appointment')}
          icon="book">
          Consultas
        </ProfileButton>
      </ProfileButtons>
      <HealthSwitch
        onValueChange={() => toggleNotification()}
        value={notification}>
        Plantão
      </HealthSwitch>
    </Profile>
  );
};

export default VolunteerProfile;
