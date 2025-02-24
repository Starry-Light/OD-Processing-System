import React, { useState } from "react";
import {setHours, setMinutes} from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";


export default function DateTimePicker () {
    const [startDate, setStartDate] = useState(
      setHours(setMinutes(new Date(), 0), 8),
    );
    const [endDate, setEndDate] = useState(
      setHours(setMinutes(new Date(), 0), 8),
    );
    return (<>
    
    <div style={{ marginBottom: "10px" }}>
      <label style={{ fontFamily: "Arial" }}>Start Date and Time: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          maxDate={new Date()}
          minDate={new Date().setMonth(new Date().getMonth()-1)}
          showTimeSelect
          timeIntervals={15}
          minTime={setHours(setMinutes(new Date(), 50), 7)}
          maxTime={setHours(setMinutes(new Date(), 0), 16)}
          dateFormat="MMMM d, yyyy h:mm aa"
          customInput={<input style={{ width: "250px", padding: "3px", fontSize: "14px" }} />}
      />
    </div>
    <div>
      <label style={{ fontFamily: "Arial" }}>End Date and Time: </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          maxDate={new Date()}
          minDate={new Date().setMonth(new Date().getMonth()-1)}
          showTimeSelect
          timeIntervals={15}
          minTime={setHours(setMinutes(new Date(), 50), 7)}
          maxTime={setHours(setMinutes(new Date(), 0), 16)}
          dateFormat="MMMM d, yyyy h:mm aa"
          customInput={<input style={{ width: "255.5px", padding: "3px", fontSize: "14px" }} />}
      />
    </div>
      </>
      
    );
  };


// import {useState} from 'react'
// import * as React from 'react';
// import dayjs from 'dayjs';
// import Grid2 from '@mui/material/Grid2';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { TimeClock } from '@mui/x-date-pickers/TimeClock';

// const today = dayjs();
// const twoPM = dayjs().set('hour', 14).startOf('hour');
// const threePM = dayjs().set('hour', 15).startOf('hour');
// const eightAM = dayjs().set('hour', 8).startOf('hour');

// export default function DateTimePicker() {

//   const {value, setValue} = useState(today)
//   const handleCalChange = (e) => {
//     console.log(e.$d);
//     setValue(e)
//   }
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Grid2
//         container
//         columns={{ xs: 1, lg: 2 }}
//         spacing={4}
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Grid2 item>
//           <DateCalendar 
//           minDate={dayjs('2024-01-01')} 
//           maxDate={dayjs('2025-09-09')} 
//           onChange= {handleCalChange}
//           value={value} 
//           disableFuture />
//         </Grid2>
//         <Grid2 item>
//           <TimeClock defaultValue={twoPM} minTime={eightAM} maxTime={threePM} />
//         </Grid2>
//       </Grid2>
//     </LocalizationProvider>
//   );
// }
