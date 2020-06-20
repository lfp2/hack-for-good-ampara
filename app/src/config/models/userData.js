import { action } from 'easy-peasy';

const userDataModel = {
  accountType: '',
  email: '',
  password: '',
  updateUserData: action((state, payload) => {
    return payload;
  }),
  updateAccountType: action((state, payload) => {
    state.accountType = payload;
  }),
  setCredentials: action((state, payload) => {
    state.email = payload.email;
    state.password = payload.password;
  }),
};

export default userDataModel;
