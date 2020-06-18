import React, { useState, useEffect } from 'react';
import Button from 'src/components/Button';
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
} from 'src/assets/styles/homepage';

import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Linking } from 'react-native';
import ProfileButton, { ProfileButtons } from 'src/components/ProfileButton';

export default function HomePageScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState(null);
  const [bio, setBio] = useState(null);
  const [number_registry, setNumberRegistry] = useState('');
  const text = 'join oxygen-heavy';
  const phone = '+1 415 523 8886';

  useEffect(() => {
    async function fetchData() {
      try {
        const value = await AsyncStorage.getItem('@AmparaApp:health');
        const item = JSON.parse(value);
        // setName(item.volunteer.name);
        // setBio(item.volunteer.bio);
        // setNumberRegistry(item.volunteer.number_registry);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  });

  function handleAgendaPress() {
    Linking.openURL(`whatsapp://send?text=${text}&phone${phone}`);
  }

  return (
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
        <Name>Emanuelly Figueiredo</Name>
        <Role>Técnica em Enfermagem</Role>
        <Role>COREN 58963</Role>
        <ProfileButtons>
          <ProfileButton
            icon="calendar-month"
            onPress={() => {
              navigation.navigate('HealthCalendar');
            }}>
            Agendar Consulta
          </ProfileButton>
          <ProfileButton
            icon="book"
            iconPack={FontAwesome5Icons}
            onPress={() => {
              navigation.navigate('MyAppointments');
            }}>
            Consultas
          </ProfileButton>
        </ProfileButtons>
        <Button width="80%">QUERO ATENDIMENTO AGORA</Button>
      </Body>
    </Container>
  );

  // return (
  //   <ScreenCenter>
  //     <RectangleBackground />
  //     <HeaderView>
  //       <Logo
  //         source={require('src/assets/images/Ampara-Simbolo-branco.png')}
  //       />
  //       <TextTitle>Meu Perfil</TextTitle>
  //       <HeaderPictureTextView>
  //         <CircleButton />
  //         <HeaderTextView>
  //           <PrimaryText>{name}</PrimaryText>
  //           <SecondaryText>{bio}</SecondaryText>
  //           <SecondaryText>{number_registry}</SecondaryText>
  //         </HeaderTextView>
  //       </HeaderPictureTextView>
  //     </HeaderView>
  //     <MenuView>
  //       <MenuRow>
  //         <MenuButton onPress={() => handleAgendaPress()}>
  //           <MenuIconView>
  //             <MenuIcon name="calendar" />
  //           </MenuIconView>
  //           <MenuText>Agendar Consulta</MenuText>
  //         </MenuButton>
  //         <MenuButton>
  //           <MenuIcon source={require('src/assets/icons/awesome-book.png')} />
  //           <MenuText>Minhas Consultas</MenuText>
  //         </MenuButton>
  //       </MenuRow>
  //       <MenuRow>
  //         <MenuButton>
  //           <MenuIcon source={require('src/assets/icons/message.png')} />
  //           <MenuText>Mensagens</MenuText>
  //         </MenuButton>
  //         <MenuButton>
  //           <MenuIcon source={require('src/assets/icons/hospital.png')} />
  //           <MenuText>Histórico</MenuText>
  //         </MenuButton>
  //       </MenuRow>
  //     </MenuView>
  //   </ScreenCenter>
  // );
}
