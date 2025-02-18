// import React, { useState } from "react";
// import {setHours, setMinutes} from 'date-fns';
// import 'react-datepicker/dist/react-datepicker.css'
// import DatePicker from "react-datepicker";


// export default function DateTimePicker () {
//     const [startDate, setStartDate] = useState(
//       setHours(setMinutes(new Date(), 30), 17),
//     );
//     return (
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         showTimeSelect
//         minTime={setHours(setMinutes(new Date(), 0), 17)}
//         maxTime={setHours(setMinutes(new Date(), 30), 20)}
//         dateFormat="MMMM d, yyyy h:mm aa"
//       />
//     );
//   };



import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';

const today = dayjs();
const twoPM = dayjs().set('hour', 14).startOf('hour');
const threePM = dayjs().set('hour', 15).startOf('hour');
const eightAM = dayjs().set('hour', 8).startOf('hour');

export default function DateTimePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid
        container
        columns={{ xs: 1, lg: 2 }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <DateCalendar defaultValue={today} disableFuture />
        </Grid>
        <Grid item>
          <TimeClock defaultValue={twoPM} minTime={eightAM} maxTime={threePM} />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
