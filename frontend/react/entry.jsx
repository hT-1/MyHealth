import React from 'react';

const Entry = props => {
//   let result;
//   function updateInputValue(e) {
//     result = e.target.value;
//   }
  return (
    // how do we create the circuit between the store and an input field?
    // how do we update the store from a presentation component?
    <div className="entryBox">
        <h3>ENTRY</h3>
        <div>Type:</div>
        <div>Date:</div>
        <div>Notes:</div>
    </div>
  )
}

export default Entry;