import React, { useEffect, useState } from 'react';

import {
  Container,
  Body,
  ProfilePic,
  Name,
  Role,
  Buttons,
  Button,
  Logo,
  Title,
  MenuButton,
  SwitchText,
  SwitchContainer,
} from './styles';
import { SwitchNotification } from '../../assets/styles/signup';
import useToggle from 'react-use/lib/useToggle';
import { useNavigation, Link } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const VolunteerProfile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [number_registry, setNumberRegistry] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const value = await AsyncStorage.getItem('@AmparaApp:volunteer');
        const { displayName, documentNumber } = JSON.parse(value);
        setName(displayName);
        setNumberRegistry(documentNumber);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });
  const [notification, toggleNotification] = useToggle(true);
  const handleNavigate = (to) => {
    navigation.navigate(to);
  };
  return (
    <Container>
      <MenuButton />
      <Logo />
      <Title>Meu Perfil</Title>
      <Body>
        <ProfilePic />
        <Name>{name}</Name>
        <Role>Psicólogo</Role>
        <Role>CRP {number_registry}</Role>
        <Buttons>
          <Button onPress={() => handleNavigate('Calendar')} icon="clock">
            Meus horários
          </Button>
          <Button onPress={() => handleNavigate('Appointment')} icon="book">
            Consultas
          </Button>
        </Buttons>
        <SwitchContainer>
          <SwitchText>Plantão</SwitchText>
          <SwitchNotification
            onValueChange={() => toggleNotification()}
            value={notification}
          />
        </SwitchContainer>
      </Body>
    </Container>
  );
};

export default VolunteerProfile;
