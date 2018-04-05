import React from 'react';
import Day from './day.jsx';

const Week = props => {
let days = [];
console.log(props.weeks)
for(let i = 0; i < props.weeks.days.length; i++){
  days.push(<Day day={props.weeks.days[i]} date={props.weeks.fullDate[i]} key={i} selectDay={props.selectDay}/>);
}
  return (
    <div className="weekBox">
    { days }
    </div>
  )
}

export default Week;