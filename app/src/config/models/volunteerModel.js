import { action, thunk } from 'easy-peasy';
import AsyncStorage from '@react-native-community/async-storage';
import api from 'src/services/api';

const volunteerModel = {
  displayName: '',
  bio: '',
  email: '',
  cep: '',
  documentNumber: '',
  phoneNumber: '',
  city: '',
  uf: '',
  token: '',
  setUser: action((state, payload) => {
    const {
      displayName,
      phoneNumber,
      documentNumber,
      bio,
      email,
      uf,
      city,
      cep,
    } = payload;
    return {
      displayName,
      phoneNumber,
      documentNumber,
      bio,
      email,
      uf,
      city,
      cep,
    };
  }),
  reset: thunk(async (actions) => {
    await AsyncStorage.removeItem('@AmparaApp:volunteer');
    actions.setUser({
      displayName: '',
      bio: '',
      email: '',
      cep: '',
      documentNumber: '',
      phoneNumber: '',
      city: '',
      uf: '',
      token: '',
    });
  }),
  login: thunk(async (actions, payload) => {
    const { email, password } = payload;
    const response = await api.post('/volunteer/sign_in', {
      email,
      password,
    });
    await AsyncStorage.setItem(
      '@AmparaApp:volunteer',
      JSON.stringify(response.data),
    );
    actions.setUser(response.data);
  }),
  register: thunk(async (actions, payload) => {
    await api.post('/volunteer', payload);
    const { email, password } = payload;
    await actions.login({ email, password });
  }),
};

export default volunteerModel;
