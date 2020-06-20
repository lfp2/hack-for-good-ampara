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

const Profile = ({ data, children }) => {
  const navigation = useNavigation();
  const { name = '', profession = '' } = data;

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
        <Name>{name}</Name>
        <Role>{profession}</Role>
        {children}
      </Body>
    </Container>
  );
};

export default Profile;
