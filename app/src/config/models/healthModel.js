import { action, thunk } from 'easy-peasy';
import AsyncStorage from '@react-native-community/async-storage';
import api from 'src/services/api';

const healthModel = {
  displayName: '',
  bio: '',
  email: '',
  cep: '',
  phoneNumber: '',
  city: '',
  uf: '',
  profession: '',
  token: '',
  set: action((state, payload) => {
    const {
      token,
      displayName,
      phoneNumber,
      profession,
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
      profession,
      bio,
      email,
      uf,
      city,
      cep,
    };
  }),
  setUser: thunk(async (actions, payload) => {
    await AsyncStorage.setItem('@AmparaApp:health', JSON.stringify(payload));
    actions.set(payload);
  }),
  update: thunk(async (actions, payload) => {
    console.log(payload);
    const {
      token,
      displayName,
      phoneNumber,
      profession,
      bio,
      email,
      uf,
      city,
      cep,
    } = payload;
    try {
      const response = await api.put('/health', {
        token,
        displayName,
        phoneNumber,
        profession,
        bio,
        email,
        uf,
        city,
        cep,
      });
      console.log(response.data);
      await actions.setUser({
        token,
        displayName,
        phoneNumber,
        profession,
        bio,
        email,
        uf,
        city,
        cep,
      });
    } catch (err) {
      console.log(err.response);
    }
  }),
  reset: thunk(async (actions, payload) => {
    await AsyncStorage.removeItem('@AmparaApp:health');
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
    const response = await api.post('/health/sign_in', {
      email,
      password,
    });

    await actions.setUser(response.data);
  }),
  register: thunk(async (actions, payload) => {
    const {
      displayName,
      bio,
      email,
      cep,
      profession,
      phoneNumber,
      city,
      uf,
      password,
    } = payload;

    await api.post('/health', {
      displayName,
      bio,
      email,
      cep,
      profession,
      phoneNumber,
      city,
      uf,
      password,
    });

    await actions.login({ email, password });
  }),
};

export default healthModel;
