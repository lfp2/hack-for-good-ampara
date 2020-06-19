import React from 'react';

import Routes from './routes';
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from 'styled-components';
import store from './config/store';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <Routes />
      </StoreProvider>
    </ThemeProvider>
  );
}
