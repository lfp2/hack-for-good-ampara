import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './pages/FirstScreen';
import LoginScreen from './pages/Login';
import SignInScreen from './pages/SignIn';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
