import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HealthSignUpScreen from './pages/health_professional/SignUp';
import FirstScreen from './pages/FirstScreen';
import LoginScreen from './pages/Login';
import WelcomeScreen from './pages/Welcome';
import VolunteerSignUpScreen from './pages/volunteer/SignUp';
import VolunteerHomePageScreen from './pages/volunteer/HomePage';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function VolunteerHomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Perfil" component={VolunteerHomePageScreen} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="VolunteerSignUp" component={VolunteerSignUpScreen} />
        <Stack.Screen name="VolunteerHome" component={VolunteerHomeTabs} />
        <Stack.Screen name="HealthSignUp" component={HealthSignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
