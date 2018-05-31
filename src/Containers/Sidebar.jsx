import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../Actions/actionCreators";
import Typography from "material-ui/Typography";
import AddCircle from "material-ui-icons/AddCircle";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "material-ui/ExpansionPanel";
import NavBar from "../Components/navBar.jsx";
import InfoBox from "../Components/infoBox.jsx";
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
  constructor(props) {
    this.state = {
      expanded: null,
      notes: "",
      symptom: ""
    };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
      notes: "",
      symptom: ""
    });
  };
  submitStuff = () => {
    if (this.state.symptom === "" || this.state.notes === "") {
      console.log("Not enough Data.  Jake gives you 👎");
    } else {
      const symptom = {
        symptom: this.state.symptom,
        notes: this.state.notes,
        entry_date: this.props.date,
        user_id: 1
      };
      console.log(symptom);
      fetch("http://localhost:3000/entry/create", {
        method: "POST",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "Application/json"
        }),
        body: JSON.stringify(symptom)
      })
        .then(res => {
          console.log("👍");
          this.props.actions.addEntries(symptom);
          this.setState({
            expanded: false
          });
        })
        .catch(err => console.log(err));
    }
  };
  handleTyping = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    const { expanded } = this.state;
    let myDate = moment(this.props.date.split("-"))
      .subtract(1, "month")
      .format("MMM DD YYYY");
    return (
      <div id="sidebar">
        <div id="sideHeader">
          <h1>{myDate}</h1>
        </div>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary color="primary" expandIcon={<AddCircle />}>
            <Typography className="heading">Add Symptom</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="myForm">
              <TextField
                id="select-symptom"
                select
                label="Select"
                className="symptomList"
                value={this.state.symptom}
                onChange={this.handleTyping("symptom")}
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
                onChange={this.handleTyping("notes")}
                margin="normal"
              />
              <Button
                variant="raised"
                color="primary"
                className="symptomSubmit"
                onClick={() => this.submitStuff()}
              >
                Add Symptom
              </Button>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <InfoBox
          entries={this.props.entries}
          delete={this.props.actions.deleteEntry}
          date={this.props.date}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
