import React, { useEffect } from 'react';
import Button from 'src/components/Button';
import { Container, BackgroundImage, Logo, Buttons } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default function FirstScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      try {
        const volunteer_value = await AsyncStorage.getItem(
          '@AmparaApp:volunteer',
        );
        const health_value = await AsyncStorage.getItem('@AmparaApp:health');
        if (volunteer_value != null) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'VolunteerHome' }],
          });
        }
        if (health_value != null) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'HealthHome' }],
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  });

  function navigateToWelcome() {
    navigation.navigate('Welcome');
  }

  function navigateToLogin() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <BackgroundImage />
      <Logo />
      <Buttons>
        <Button width="80%" onPress={() => navigateToWelcome()} type="primary">
          QUERO ME CADASTRAR
        </Button>
        <Button width="80%" onPress={() => navigateToLogin()} type="secondary">
          Login
        </Button>
        {/* <ButtonView>
          <Button onPress={() => navigateToLogin()}>
            <TextButton>LOGIN</TextButton>
          </Button>
        </ButtonView> */}
      </Buttons>
    </Container>
  );
}
