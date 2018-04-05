import React from 'react';
import Entry from './entry.jsx';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const InfoBox = props => {
  let entries = [];
  if(props.entries){
    for(let i = 0; i < props.entries.length; i++) {
      entries.push(<Entry data={props.entries[i]} key={i} />);
    }
  } else {
   entries =
   <Card>
    <CardContent>
      <Typography variant="headline" component="h3">
        No Data Today
      </Typography>
    </CardContent>
 </Card>;
  }
    
    return (
        <div className="infoBox">
           { entries }
        </div>
    )
}

export default InfoBox;