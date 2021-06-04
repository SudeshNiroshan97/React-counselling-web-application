import React, { useState } from 'react';
import { format, getDay } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import './calendar.css';
import 'react-nice-dates/build/style.css'


const unavailableDates = [];

const modifiers = {
    disabled: date => getDay(date) === 6, // Disables Saturdays
    highlight: date => getDay(date) === 2 // Highlights Tuesdays
}
const modifiersClassNames = {
    highlight: '-highlight'
}

export const CalendarSmart = (
    props
) =>{

    const [date, setDate] = useState();

    const loadDates = () => {
        setDate(new Date());
        // console.log(date);
    }

    // Settings

    // Events
    window.addEventListener('load', loadDates);

    return (
        <>
            <p>
                Selected date: {date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'}.
            </p>
            <DatePickerCalendar 
                date={date}
                onDateChange={setDate}
                locale={enGB}
                modifiers={modifiers}
                modifiersClassNames={modifiersClassNames}
            />
        </>
    );
}
