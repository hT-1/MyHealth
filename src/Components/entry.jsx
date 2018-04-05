import React from 'react';
import moment from 'moment';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import ReceiptIcon from 'material-ui-icons/Assignment';

const Entry = props => {

 const deleteMe = (id) => {
   let data = {
     date: props.date,
     id,
   }
   console.log('I am deleting');
    fetch(`http://localhost:3000/entry/${id}`,{
      method: 'DELETE'
  })
  .then(response => response.json()).then(body => {
    console.log(body)
    props.delete(data);
  })
  }
  return (
    <div className="entryBox">
    <Card>
        <CardContent>
          <div className='symptomLabel'>
            <div className='lbl'>Symptom:</div>
            <div className='entrySection'>{props.data.type}</div>
          </div>
          <div className='noteLabel'>
            <div className='lbl'>Notes:</div>
            <div className='entrySection'>{props.data.notes}</div>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary" onClick={() => deleteMe(props.data.id)}>Delete</Button>
        </CardActions>
      </Card>
      <Divider inset />
    </div>
  )
}

export default Entry;