import React, { useState, useEffect } from 'react';
import { ScreenCenter } from '../../assets/styles';
import {
  MenuButton,
  MenuIcon,
  MenuText,
  MenuView,
  MenuRow,
  RectangleBackground,
  Logo,
  HeaderView,
  PrimaryText,
  HeaderTextView,
  CircleButton,
  HeaderPictureTextView,
  SecondaryText,
  TextTitle,
  MenuIconView,
} from '../../assets/styles/homepage';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import VolunteerProfile from '../../components/VolunteerProfile';

export default function HomePageScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState(null);
  const [bio, setBio] = useState(null);
  const [number_registry, setNumberRegistry] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const value = await AsyncStorage.getItem('@AmparaApp:volunteer');
        console.log(value);
        const item = JSON.parse(value);
        console.log(item.volunteer.number_registry);
        setName(item.volunteer.name);
        setBio(item.volunteer.bio);
        setNumberRegistry(item.volunteer.number_registry);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });

  return <VolunteerProfile />;
}
