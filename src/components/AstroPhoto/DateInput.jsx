import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateInput = props => (
  <div className="datepicker-title">
    <p className="date-select">Select a Date:</p>
    <DatePicker
      className="date-picker"
      selected={props.date}
      onChange={props.changeDate}
      minDate={new Date('06-16-1995')}
      maxDate={new Date()}
      dateFormat='MM/dd/yyyy'
      scrollableMonthYearDropdown
    />
  </div>
);

export default DateInput;