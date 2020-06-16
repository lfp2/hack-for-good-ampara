import React, { useEffect, useState } from 'react';

import {
  Container,
  Body,
  ProfilePic,
  Name,
  Role,
  LogoBranca,
  Title,
  MenuBtn,
  SwitchText,
  SwitchContainer,
  MenuBtnWrapper,
  TopSection,
  Border,
} from '../../assets/styles/homepage';
import useToggle from 'react-use/lib/useToggle';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { StyledSwitch } from '../../components/Switch/base';
import ProfileButton, { ProfileButtons } from '../../components/ProfileButton';

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
        console.error(error);
      }
    }
    fetchData();
  });
  const [notification, toggleNotification] = useToggle(true);
  const handleNavigate = (to) => {
    navigation.navigate(to);
  };

  return (
    <>
      <Container>
        <TopSection>
          <MenuBtnWrapper
            onPress={() => {
              navigation.openDrawer();
            }}>
            <MenuBtn />
          </MenuBtnWrapper>
          <LogoBranca />
          <Title>Meu Perfil</Title>
        </TopSection>
        <Body>
          <Border />
          <ProfilePic />
          <Name>{name}</Name>
          <Role>Psicólogo</Role>
          <Role>CRP {number_registry}</Role>
          <ProfileButtons>
            <ProfileButton
              onPress={() => handleNavigate('Calendar')}
              icon="clock">
              Meus horários
            </ProfileButton>
            <ProfileButton
              onPress={() => handleNavigate('Appointment')}
              icon="book">
              Consultas
            </ProfileButton>
          </ProfileButtons>
          <SwitchContainer>
            <SwitchText>Plantão</SwitchText>
            <StyledSwitch
              onValueChange={() => toggleNotification()}
              value={notification}
            />
          </SwitchContainer>
        </Body>
      </Container>
    </>
  );
};

export default VolunteerProfile;
