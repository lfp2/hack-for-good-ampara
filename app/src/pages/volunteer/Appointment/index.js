import React from 'react';
import { Container } from './styles';
import Header from '../../../components/Header';
import AppointmentCard, {
  AppointmentCards,
} from '../../../components/AppointmentCard';
import { FlatList } from 'react-native-gesture-handler';

const AppointmentScreen = () => {
  return (
    <Container>
      <Header title="Consultas" />
      <AppointmentCards>
        <FlatList
          keyExtractor={(e) => e}
          data={[0, 1, 2]}
          renderItem={() => <AppointmentCard />}
        />
      </AppointmentCards>
    </Container>
  );
};

export default AppointmentScreen;
