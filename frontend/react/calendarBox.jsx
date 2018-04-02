/**
 * @module  calendarBox
 * @author Pauline Chang
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from 'react';
import WeekDay from '../react/weekDay.jsx';
import Week from '../react/week.jsx';

const Calendar = props => {
//   let result;
//   function updateInputValue(e) {
//     result = e.target.value;
//   }
  return (


    // how do we create the circuit between the store and an input field?
    // how do we update the store from a presentation component?
    <div className="monthBox">
      <WeekDay />
      <Week />
      <Week />
      <Week />
      <Week />
      <Week />
    </div>
  )
}

export default Calendar;