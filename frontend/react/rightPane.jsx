import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../redux/actionTypes';
import NavBar from '../react/navBar.jsx';
import InfoBox from '../react/infoBox.jsx';

const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});



class RightPane extends Component {
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
        console.log('inside line 32 of rightPane');
        return (
            <div>
                <NavBar />
                <InfoBox />
                {/* <Button onClick={this.addPeriod} > Add Period </Button> */}
                {/* <Button onClick={this.addSymptom} > Add Sympton </Button> */}
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(RightPane);
