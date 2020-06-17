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
import AppointmentScreen from './pages/volunteer/Appointment';
import Nav from './components/Nav';
import useOrientation from './util/useOrientation';
import ConfigurationScreen from './pages/ConfigurationScreen';
import SecurityScreen from './pages/SecurityScreen';
import NotificationsScreen from './pages/NotificationsScreen';
import HelpScreen from './pages/HelpScreen';
import TroubleshootScreen from './pages/TroubleshootScreen';
import FaqScreen from './pages/FaqScreen';
import AboutScreen from './pages/About';
import MyAppointmentScreen from './pages/health_professional/Appointments';
import NewPasswordScreen from './pages/NewPasswordScreen';
import NiceHabitsScreen from './pages/NiceHabits';
import LoginInfoScreen from './pages/LoginInfoScreen';
import LoginTroubleshootScreen from './pages/LoginTroubleshootScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function VolunteerHomeTabs() {
  const orientation = useOrientation();
  return (
    <Drawer.Navigator
      initialRouteName="Perfil"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <Nav {...props} orientation={orientation} />}>
      <Drawer.Screen name="Perfil" component={VolunteerHomePageScreen} />
      <Drawer.Screen name="Calendar" component={CalendarScreen} />
    </Drawer.Navigator>
  );
}

function HealthHomeTabs() {
  const orientation = useOrientation();
  return (
    <Drawer.Navigator
      initialRouteName="Perfil"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <Nav {...props} orientation={orientation} />}>
      <Drawer.Screen name="Perfil" component={HealthHomePageScreen} />
      <Drawer.Screen name="MyAppointments" component={MyAppointmentScreen} />
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
        <Stack.Screen name="Configuration" component={ConfigurationScreen} />
        <Stack.Screen name="Security" component={SecurityScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Troubleshoot" component={TroubleshootScreen} />
        <Stack.Screen name="Faq" component={FaqScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUpEmail" component={SignUpEmailScreen} />
        <Stack.Screen name="SignUpProfile" component={SignUpProfileScreen} />
        <Stack.Screen name="VolunteerHome" component={VolunteerHomeTabs} />
        <Stack.Screen name="VolunteerCalendar" component={CalendarScreen} />
        <Stack.Screen name="HealthHome" component={HealthHomeTabs} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} />
        <Stack.Screen name="LoginInfo" component={LoginInfoScreen} />
        <Stack.Screen name="NiceHabits" component={NiceHabitsScreen} />
        <Stack.Screen
          name="LoginTroubleshoot"
          component={LoginTroubleshootScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
