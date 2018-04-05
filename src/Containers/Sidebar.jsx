import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Actions/actionCreators';
import Typography from 'material-ui/Typography';
import AddCircle from 'material-ui-icons/AddCircle';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import ExpansionPanel, {
    ExpansionPanelDetails,
    ExpansionPanelSummary,
  } from 'material-ui/ExpansionPanel';
import NavBar from '../Components/navBar.jsx';
import InfoBox from '../Components/infoBox.jsx';
import moment from "moment";

const mapStateToProps = store => ({
entries: store.data.currentEntries,
date: store.data.currentDate,
symptoms: store.data.symptoms
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch) 
  });

class Sidebar extends Component {
    state = {
        expanded: null,
        notes: '',
        symptom:''

      };
    
      handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
          notes: '',
          symptom: ''
        });
      };
      handleTyping = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    render() {
        const { expanded } = this.state;
        let myDate = moment(this.props.date.split('-')).subtract(1, "month").format('MMM DD YYYY');
        return (
        <div id="sidebar">
            <div id="sideHeader">
               <h1>{myDate}</h1>
            </div>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary color="primary" expandIcon={<AddCircle />}>
                        <Typography className='heading'>Add Symptom</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="myForm">
                            <TextField
                            id="select-currency"
                            select
                            label="Select"
                            className="symptomList"
                            value={this.state.symptom}
                            onChange={this.handleTyping('symptom')}
                            // SelectProps={{
                            //     MenuProps: {
                            //     className: classes.menu,
                            //     },
                            // }}
                            helperText="Please select your symptom"
                            margin="normal"
                            >
                                {this.props.symptoms.map((option, i) => (
                                <option key={i} value={option.name}>
                                {option.name}
                                </option>
                            ))}
                            </TextField>
                            <TextField
                                id="multiline-flexible"
                                label="Notes"
                                multiline
                                rowsMax="4"
                                value={this.state.notes}
                                onChange={this.handleTyping('notes')}
                                margin="normal"
                            />
                            <Button variant="raised" color="primary" className='symptomSubmit'>
                                Add Symptom
                            </Button>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <InfoBox entries={this.props.entries}/>
            </div>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
