import React, { useEffect } from 'react';
import { HealthSwitch } from './styles';
import useToggle from 'react-use/lib/useToggle';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ProfileButton, { ProfileButtons } from 'src/components/ProfileButton';
import Profile from 'src/components/Profile';
import useAsync from 'react-use/lib/useAsync';
import AsyncStorage from '@react-native-community/async-storage';
import { useStoreState } from 'easy-peasy';
import useAwait from 'src/util/useAwait';
import api from 'src/services/api';

const VolunteerProfile = () => {
  const navigation = useNavigation();
  const [notification, toggle] = useToggle(false);
  const { displayName, phoneNumber, token } = useStoreState(
    (state) => state.volunteer,
  );
  const [
    isTurningOn,
    turnOn,
    { toggle: toggleIsTurninOn },
  ] = useAwait(({ displayName, phoneNumber, token }) =>
    api.post('/emergency_line', { displayName, phoneNumber, token }),
  );
  const [
    isTurningOff,
    turnOff,
    { toggle: toggleIsTurninOff },
  ] = useAwait(({ token }) =>
    api.delete('/emergency_line', { data: { token } }),
  );

  const toggleNotification = async () => {
    try {
      if (notification) {
        toggle(false);
        await turnOff({ token });
      } else {
        toggle(true);
        await turnOn({ displayName, phoneNumber, token });
      }
    } catch (err) {
      console.log(err.response);
    }
  };

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
