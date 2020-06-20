import AsyncStorage from '@react-native-community/async-storage';
import { action, thunk, memo } from 'easy-peasy';

const redirectAction = memo((toCallAction) =>
  memo((actions, payload) => {
    const { role, data } = payload;
    return actions[role][toCallAction](data);
  }),
);

const rootModel = {
  start: thunk(async (actions, navigation) => {
    const volunteer_value = await AsyncStorage.getItem('@AmparaApp:volunteer');
    if (volunteer_value) {
      actions.volunteer.setUser(JSON.parse(volunteer_value));
      actions.user.updateAccountType('volunteer');
      navigation.reset({
        index: 0,
        routes: [{ name: 'VolunteerHome' }],
      });
    }

    const health_value = await AsyncStorage.getItem('@AmparaApp:health');
    if (health_value != null) {
      actions.user.updateAccountType('health');
      actions.health.setUser(JSON.parse(health_value));
      navigation.reset({
        index: 0,
        routes: [{ name: 'HealthHome' }],
      });
    }
  }),
  login: thunk(redirectAction('login')),
  register: thunk(redirectAction('register')),
};

export default rootModel;
