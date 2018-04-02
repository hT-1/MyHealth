import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../redux/actionTypes';
import Calendar from '../react/calendarBox.jsx';

const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});



class LeftPane extends Component {
    constructor(props) {
        console.log('line 17 of leftpane');
        super();
        // this.addPeriod = this.addPeriod.bind(this);
        // this.addSymptom = this.addSymptom.bind(this);
    }

    // addPeriod() {

    // }

    // addSymptom() {

    // }

    render() {
        console.log('inside line 32 of leftPane');
        return (
            <div>
                <h2>MonthHeader</h2>
                <Calendar />
                {/* <Button onClick={this.addPeriod} > Add Period </Button> */}
                {/* <Button onClick={this.addSymptom} > Add Sympton </Button> */}
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane);
