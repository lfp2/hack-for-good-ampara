import React from 'react';

import Routes from './routes';
import { StoreProvider } from 'easy-peasy';
import store from './config/store';

export default function App() {
  return (
      <StoreProvider store={store}>
          <Routes />
      </StoreProvider>
  );
}
