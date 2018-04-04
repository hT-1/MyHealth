import React, { Component } from "react";
import { connect } from 'react-redux';
import NavBar from '../Components/navBar.jsx';
import InfoBox from '../Components/infoBox.jsx';
import ExpansionPanel, {
    ExpansionPanelDetails,
    ExpansionPanelSummary,
  } from 'material-ui/ExpansionPanel';
  import Typography from 'material-ui/Typography';
  import AddCircle from 'material-ui-icons/AddCircle';
  import TextField from 'material-ui/TextField';

const mapStateToProps = store => ({
entries: store.data.entries,
});

const mapDispatchToProps = dispatch => ({

});

class Sidebar extends Component {
    state = {
        expanded: null,
      };
    
      handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };
    render() {
        const { expanded } = this.state;
        return (
            <div id="sidebar">
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary color="primary" expandIcon={<AddCircle />}>
                        <Typography className='heading'>Add Symptom</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <TextField
                        id="multiline-flexible"
                        label="Notes"
                        multiline
                        rowsMax="4"
                        value={this.state.multiline}
                        onChange={this.handleChange('multiline')}
                        margin="normal"
                    />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <InfoBox entries={this.props.entries}/>
            </div>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
