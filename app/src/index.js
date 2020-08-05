import React from 'react';
import Routes from './routes';
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from 'styled-components';
import store from './config/store';
import theme from './theme';
import * as Font from 'expo-font';
import {
  // useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_800ExtraBold,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { View, StatusBar } from 'react-native';

export default function App() {
  const [isLoading, toggle] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync({
          'Poppins-Medium': Poppins_500Medium,
          Poppins: Poppins_400Regular,
          'Poppins-SemiBold': Poppins_600SemiBold,
          'Poppins-ExtraBold': Poppins_800ExtraBold,
          'Poppins-Bold': Poppins_700Bold,
        });
        toggle(false);
      } catch (err) {}
    })();
  }, []);
  // const [isLoading, err] = useFonts();
  if (isLoading) {
    return null;
  }
  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <Routes />
        </StoreProvider>
      </ThemeProvider>
    </View>
  );
}
