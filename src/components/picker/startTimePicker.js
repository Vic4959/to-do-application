import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function StartTimePicker() {
  const [selectedDate, handleDateChange] = useState(null);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  );
}

export default StartTimePicker;