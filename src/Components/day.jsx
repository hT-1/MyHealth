import React from 'react';
import PropTypes from 'prop-types';

const Day = props =>
  (
    <div
      className="dayBox"
      onClick={() => props.selectDay(props.date)}
    >
      <span className="day">{props.day}</span>
    </div>
  );

export default Day;

Day.propTypes = {
  date: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired
};
