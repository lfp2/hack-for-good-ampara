import styled from 'styled-components/native';
import BaseCalendarStrip from 'react-native-calendar-strip';

const CalendarStrip = styled(BaseCalendarStrip).attrs(
  ({ theme: { blue, black, white } }) => ({
    calendarHeaderContainerStyle: { backgroundColor: blue },
    calendarHeaderStyle: {
      color: white,
      fontSize: 20,
      paddingVertical: 10,
    },
    dateNumberStyle: {
      color: black,
      fontSize: 18,
    },
    dateNameStyle: {
      color: black,
      fontSize: 11,
    },
    highlightDateNameStyle: { color: blue, fontSize: 11 },
    highlightDateNumberStyle: { color: blue, fontSize: 18 },
    iconContainer: { flex: 0.1 },
  }),
)`
  height: 150px;
  border: 2px #dbd9d9;
  border-radius: 15px;
`;

export default CalendarStrip;
