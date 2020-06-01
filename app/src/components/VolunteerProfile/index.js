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
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const VolunteerProfile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState(null);
  const [bio, setBio] = useState(null);
  const [number_registry, setNumberRegistry] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const value = await AsyncStorage.getItem('@AmparaApp:volunteer');
        const item = JSON.parse(value);
        setName(item.volunteer.name);
        setBio(item.volunteer.bio);
        setNumberRegistry(item.volunteer.number_registry);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });
  const [notification, toggleNotification] = useToggle(true);
  return (
    <Container>
      <MenuButton />
      <Logo />
      <Title>Meu Perfil</Title>
      <Body>
        <ProfilePic />
        <Name>Julio Benício Araújo</Name>
        <Role>Psicólogo</Role>
        <Role>CRP 47852</Role>
        <Buttons>
          <Button icon="clock">Meus horários</Button>
          <Button icon="book">Consultas</Button>
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
