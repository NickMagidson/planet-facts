import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateInput = props => (
  <div className="datepicker-title">
    Select a Date:
    <DatePicker
      className="date-picker"
      selected={props.date}
      onChange={props.changeDate}
      minDate={new Date('06-16-1995')}
      maxDate={new Date()}
      dateFormat='MM/dd/yyyy'
	  showYearDropdown
	  scrollableMonthYearDropdown
    />
  </div>
);

export default DateInput;