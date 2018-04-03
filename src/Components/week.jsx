import React from 'react';
import Day from './day.jsx';

const Week = props => {
let days = [];
for(let i = 0; i < props.days.length; i++){
  days.push(<Day day={props.days[i]} key={i}/>);
}
  return (
    <div className="weekBox">
    { days }
    </div>
  )
}

export default Week;