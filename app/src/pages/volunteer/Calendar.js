import React, {useState} from 'react';

import {
    MyScreen,
    RectangleBackground,
    TextHeader,
    HeaderView,
    HeaderIcon,
    CalendarView,
    ButtonView,
    BackButton,
    SecondaryText,
} from '../../assets/styles/calendar';

import CalendarStrip from 'react-native-calendar-strip';
import HorizontalDatePicker from '@logisticinfotech/react-native-horizontal-date-picker';
import moment from 'moment';
import 'moment/locale/pt-br';

import {FlatList, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function Calendar() {
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    moment.locale('pt-br');

    // minDate = today

    const today = moment(new Date()).add(1, 'd').format('MM/DD/YYYY'); //.format('L');

    console.log(today);

    // Defining maxDate in the calendar - 1 mês a partir de hoje
    const maxDate = moment(new Date()).add(1, 'M');

    //var mm = String(maxDate.getMonth() + 2).padStart(2, '0');

    //maxDate = yyyy + '-' + mm + '-' + dd;
    const [timeSelected, setTime] = useState('');
    const [dateSelected, setDate] = useState(today);

    // Conversão para nosso formato de horário
    const onTimeSelected = (time) => {
        setTime(time);
    };
    // Conversão para nosso formato de data
    const onDateSelected = (date) => {
        date = moment(new Date()).format('DD/MM/YYYY');
        setDate(date);
    };

    function handleBook() {
        console.log(timeSelected, dateSelected);
    }

    return (
        <MyScreen>
            <RectangleBackground />
            <HeaderView>
                <BackButton>
                    <HeaderIcon onPress={navigateBack} name="arrow-left" />
                </BackButton>
                <TextHeader>Meus horários</TextHeader>
            </HeaderView>
            <CalendarView>
                <CalendarStrip
                    scrollable={true}
                    useIsoWeekday={false}
                    selectedDate={today}
                    minDate={today}
                    maxDate={maxDate}
                    onDateSelected={onDateSelected}
                    style={{height: 100, paddingBottom: 10}}
                    calendarHeaderContainerStyle={{backgroundColor: '#76b1e6'}}
                    calendarHeaderStyle={{color: 'white', fontSize: 20}}
                    dateNumberStyle={{color: 'black', fontSize: 18}}
                    dateNameStyle={{color: 'black', fontSize: 11}}
                    highlightDateNameStyle={{color: '#76b1e6', fontSize: 11}}
                    highlightDateNumberStyle={{color: '#76b1e6', fontSize: 18}}
                    iconContainer={{flex: 0.1}}
                />
            </CalendarView>
            <HorizontalDatePicker
                timePickerContainer={{backgroundColor: '#76b1e6'}}
                onTimeSelected={onTimeSelected}
                pickerType={'time'}
                selectedTextStyle={{color: '#76b1e6'}}
            />

            <ButtonView>
                <Button
                    onPress={handleBook}
                    title="Disponibilizar"
                    color="#79e7e1"
                />
            </ButtonView>
        </MyScreen>
    );
}
