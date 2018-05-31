import React from 'react';
import PropTypes from 'prop-types';
import Day from './day.jsx';

const Week = (props) => {
  const days = [];
  for (let i = 0; i < props.weeks.days.length; i += 1) {
    days.push(<Day day={props.weeks.days[i]} date={props.weeks.fullDate[i]} key={i} selectDay={props.selectDay} />);
  }
  return (
    <div className="weekBox">
      { days }
    </div>
  );
};

export default Week;

Week.propTypes = {
  weeks: PropTypes.shape({
    days: PropTypes.shape.isRequired,
    fullDate: PropTypes.string.isRequired
  }).isRequired,
  selectDay: PropTypes.func.isRequired
};
