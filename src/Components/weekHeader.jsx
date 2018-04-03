import React from 'react';

const WeekDay = props => {
//   let result;
//   function updateInputValue(e) {
//     result = e.target.value;
//   }
  return (
    <div className="weekBox">
      <h1 className="headerBox">Sun</h1>
      <h1 className="headerBox">Mon</h1>
      <h1 className="headerBox">Tue</h1>
      <h1 className="headerBox">Wed</h1>
      <h1 className="headerBox">Thu</h1>
      <h1 className="headerBox">Fri</h1>
      <h1 className="headerBox">Sat</h1>
    </div>
  )
}

export default WeekDay;