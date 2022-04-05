import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";

function StartTimePicker() {
  const [selectedDate, handleDateChange] = useState(null);
  console.log({ selectedDate });
  const formatedDate = moment(selectedDate).format("hh:mm");
  console.log([formatedDate]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker
        value={selectedDate}
        onChange={handleDateChange}
        inputVariant="filled"
        // format={localeFormatMap["en"]}
        InputProps={{ disableUnderline: true }}
      />
    </MuiPickersUtilsProvider>
  );
}

export default StartTimePicker;
