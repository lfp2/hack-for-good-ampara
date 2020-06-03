import React, { useState }from 'react';

import { ScreenCenter } from '../../assets/styles';

import { useNavigation} from '@react-navigation/native';  

import {
    MyScreen,
    RectangleBackground,
    TextHeader,
    HeaderView,
    HeaderIcon,
    CalendarView,
    ButtonView,
    BackButton,
    SecondaryText

} from '../../assets/styles/calendar'

import CalendarStrip from 'react-native-calendar-strip';
import HorizontalDatePicker from '@logisticinfotech/react-native-horizontal-date-picker';
import * as moment from 'moment'; 
import 'moment/locale/pt-br';

import { Button, FlatList } from 'react-native';


export default function Calendar(){
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }

    moment.locale('pt-br')

    // minDate = today
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    // Defining maxDate in the calendar - 1 mês a partir de hoje 
    var maxDate = new Date();

    var mm = String(maxDate.getMonth() + 2).padStart(2, '0');

    maxDate = yyyy + '-' + mm + '-' + dd;
    const [timeSelected, setTime] = useState('');
    const [dateSelected, setDate] = useState(today);

    var array = [{dateSelected, timeSelected}]

    // Conversão para nosso formato de horário 
    onTimeSelected = time => {
        var hours = Number(time.match(/^(\d+)/)[1]);
        var minutes = Number(time.match(/:(\d+)/)[1]);
        var AMPM = time.match(/\s(.*)$/)[1];
        if(AMPM == "pm" && hours<12) hours = hours+12;
        if(AMPM == "am" && hours==12) hours = hours-12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if(hours<10) sHours = "0" + sHours;
        if(minutes<10) sMinutes = "0" + sMinutes;
        time = sHours + ':' + sMinutes;
        setTime(time)
    }
    // Conversão para nosso formato de data
    onDateSelected = date => {
        date = new Date(date)
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
    
        date = day + '-' + month + '-' + year;
        setDate(date)
    }

    function handleBook() {

        console.log(timeSelected, dateSelected)

    }
        
    return (

        <MyScreen>

            <RectangleBackground/>
            <HeaderView>
                <BackButton>
                    <HeaderIcon onPress={navigateBack} name = "arrow-left"/>
                </BackButton>
                <TextHeader>Meus horários</TextHeader>
            </HeaderView>
            <CalendarView>
                <CalendarStrip
                    scrollable
                    useIsoWeekday={false}
                    selectedDate={today}
                    minDate={today}
                    maxDate={maxDate}
                    onDateSelected={onDateSelected}
                    style={{height:100, paddingBottom: 10}}
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
                timePickerContainer = {{backgroundColor: '#76b1e6'}}
                onTimeSelected = {onTimeSelected}
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