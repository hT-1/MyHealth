import React from 'react';
import moment from 'moment';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

const Entry = props => {
  return (
    <div className="entryBox">
    <Card>
        <CardContent>
        <div>Type: {props.data.type}</div>
        <div>Notes: {props.data.notes}</div>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">Delete</Button>
        </CardActions>
      </Card>
      <Divider inset />
    </div>
  )
}

export default Entry;