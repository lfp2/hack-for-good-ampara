import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './pages/FirstScreen';
import LoginScreen from './pages/Login';
import WelcomeScreen from './pages/Welcome';
import VolunteerSignUpScreen from './pages/volunteer/SignUp';
import VolunteerHomePageScreen from './pages/volunteer/HomePage';
import HealthHomePageScreen from './pages/health_professional/HomePage';
import CalendarScreen from './pages/volunteer/Calendar';


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

function HealthHomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Perfil" component={HealthHomePageScreen} />
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
        <Stack.Screen name="VolunteerCalendar" component={CalendarScreen} />
        <Stack.Screen name="HealthHome" component={HealthHomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
