import { createStore } from 'easy-peasy';
import model from '../models';
const store = createStore(model);

// if (__DEV__) {
//   if (module.hot) {
//     module.hot.accept('../models', () => {
//       store.reconfigure(model); // 👈 Here is the magic
//     });
//   }
// }

export default store;
