import {createStore} from 'easy-peasy';
import userDataModel from '../models/userData';

const store = createStore(userDataModel);

export default store;