import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './pages/FirstScreen';
import LoginScreen from './pages/Login';
import WelcomeScreen from './pages/Welcome';
import SignUpProfileScreen from './pages/SignUpProfile';
import SignUpEmailScreen from './pages/SignUpEmail';
import CalendarScreen from './pages/volunteer/Calendar';
import VolunteerHomePageScreen from './pages/volunteer/HomePage';
import HealthHomePageScreen from './pages/health_professional/HomePage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function VolunteerHomePage() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Perfil" component={VolunteerHomePageScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
    </Stack.Navigator>
  );
}

function VolunteerHomeTabs() {
  return (
    <Drawer.Navigator initialRouteName="Perfil">
      <Drawer.Screen name="Perfil" component={VolunteerHomePage} />
    </Drawer.Navigator>
  );
}

function HealthHomeTabs() {
  return (
    <Drawer.Navigator initialRouteName="Perfil">
      <Drawer.Screen name="Perfil" component={HealthHomePageScreen} />
    </Drawer.Navigator>
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
        <Stack.Screen name="SignUpEmail" component={SignUpEmailScreen} />
        <Stack.Screen name="SignUpProfile" component={SignUpProfileScreen} />
        <Stack.Screen name="VolunteerHome" component={VolunteerHomeTabs} />
        <Stack.Screen name="HealthHome" component={HealthHomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
