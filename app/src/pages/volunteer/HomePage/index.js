import React, { useState } from 'react';
import { HealthSwitch } from './styles';
import useToggle from 'react-use/lib/useToggle';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ProfileButton, { ProfileButtons } from 'src/components/ProfileButton';
import Profile from 'src/components/Profile';
import useAsync from 'react-use/lib/useAsync';
import AsyncStorage from '@react-native-community/async-storage';
import { useStoreState } from 'easy-peasy';

const VolunteerProfile = () => {
  const navigation = useNavigation();
  const [notification, toggleNotification] = useToggle(true);
  const { displayName } = useStoreState((state) => state.volunteer);
  const handleNavigate = (to) => {
    navigation.navigate(to);
  };

  return (
    <Profile data={{ name: displayName, profession: 'Psicólogo(a)' }}>
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
