import React from 'react';
import Day from './day.jsx';

const Week = props => {
//   let result;
//   function updateInputValue(e) {
//     result = e.target.value;
//   }
  return (
    // how do we create the circuit between the store and an input field?
    // how do we update the store from a presentation component?
    <div className="weekBox">
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </div>
  )
}

export default Week;