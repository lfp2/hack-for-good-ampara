import React, { useEffect, useState } from 'react';

import {
  Container,
  Body,
  ProfilePic,
  Name,
  Role,
  Buttons,
  Button,
  LogoBranca,
  Title,
  MenuBtn,
  SwitchText,
  SwitchContainer,
  MenuBtnWrapper,
  TopSection,
  Border,
} from '../../assets/styles/homepage';
import { SwitchNotification } from '../../assets/styles/signup';
import useToggle from 'react-use/lib/useToggle';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { StyledSwitch } from '../../components/Switch/base';
import useBackHandle from '../../util/useBackHandle';
import Modal, { ModalButtons, ModalSmallButton } from '../../components/Modal';

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
