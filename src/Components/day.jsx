import React from 'react';

const Day = props => {
//   let result;
//   function updateInputValue(e) {
//     result = e.target.value;
//   }
  return (
    // how do we create the circuit between the store and an input field?
    // how do we update the store from a presentation component?
    <div className="dayBox">
        <span className="day">{props.day}</span>
    </div>
  )
}

export default Day;