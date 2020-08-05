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
  set: action((state, payload) => {
    const {
      token,
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
      token,
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
  setUser: thunk(async (actions, payload) => {
    await AsyncStorage.setItem('@AmparaApp:volunteer', JSON.stringify(payload));
    actions.set(payload);
  }),
  update: thunk(async (actions, payload) => {
    try {
      const {
        token,
        displayName,
        phoneNumber,
        documentNumber,
        bio,
        email,
        uf,
        city,
        cep,
      } = payload;
      const response = await api.put('/volunteer', {
        token,
        displayName,
        phoneNumber,
        documentNumber,
        bio,
        email,
        uf,
        city,
        cep,
      });
      await actions.setUser({
        token,
        displayName,
        phoneNumber,
        documentNumber,
        bio,
        email,
        uf,
        city,
        cep,
      });
    } catch (err) {}
  }),
  reset: thunk(async (actions, payload) => {
    await AsyncStorage.removeItem('@AmparaApp:volunteer');
    actions.set({
      displayName: '',
      bio: '',
      email: '',
      cep: '',
      profession: '',
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
    await actions.setUser({ ...response.data, password, email });
  }),
  register: thunk(async (actions, payload) => {
    await api.post('/volunteer', payload);
    const { email, password } = payload;
    await actions.login({ email, password });
  }),
};

export default volunteerModel;
