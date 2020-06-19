import React from 'react';
import {
  Container,
  Body,
  ProfilePic,
  Name,
  Role,
  LogoBranca,
  Title,
  MenuBtn,
  MenuBtnWrapper,
  TopSection,
  Border,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Profile = ({ children }) => {
  const navigation = useNavigation();

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
        {children}
      </Body>
    </Container>
  );
};

export default Profile;
