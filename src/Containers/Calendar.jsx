import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Actions/actionCreators';
import WeekHeader from '../Components/weekHeader.jsx';
import Week from '../Components/week.jsx';


const mapStateToProps = store => ({
  entries: store.data.entries,
  calendar: store.data.calendar,
});
const mapDispatchToProps = (dispatch) => ({
})

class Calendar extends Component {
  render() {
    let myWeeks = [];
    for(let i = 0; i < this.props.calendar.length; i++){
      myWeeks.push(<Week days={this.props.calendar[i].days} key={i} />);
    }
    return (
      <div className="monthBox">
        <WeekHeader />
        { myWeeks }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);