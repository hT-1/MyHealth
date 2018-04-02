import React from 'react';

const WeekDay = props => {
//   let result;
//   function updateInputValue(e) {
//     result = e.target.value;
//   }
  return (
    // how do we create the circuit between the store and an input field?
    // how do we update the store from a presentation component?
    <div className="weekBox">
      <h1 className="dayBox">Sun</h1>
      <h1 className="dayBox">Mon</h1>
      <h1 className="dayBox">Tue</h1>
      <h1 className="dayBox">Wed</h1>
      <h1 className="dayBox">Thu</h1>
      <h1 className="dayBox">Fri</h1>
      <h1 className="dayBox">Sat</h1>
    </div>
  )
}

export default WeekDay;