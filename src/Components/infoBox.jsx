import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Entry from './entry.jsx';

const InfoBox = (props) => {
  let entries = [];
  if (props.entries) {
    for (let i = 0; i < props.entries.length; i += 1) {
      entries.push(<Entry data={props.entries[i]} key={i} delete={props.delete} date={props.date} />);
    }
  } else {
    entries = (
      <Card>
        <CardContent>
          <Typography variant="headline" component="h3">
            No Symptoms Today
          </Typography>
        </CardContent>
      </Card>
    );
  }
  return <div className="infoBox">{entries}</div>;
};

export default InfoBox;

InfoBox.propTypes = {
  entries: PropTypes.shape.isRequired,
  date: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired
};
