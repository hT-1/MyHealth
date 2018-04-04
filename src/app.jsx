import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import actionCreator from "./Actions/actionCreators";

import Dashboard from './Components/Dashboard.jsx';
import Header from './Components/Header.jsx';

const mapStateToProps = store => ({
    currentMonth: store.data.currMonth
});
const mapDispatchToProps = (dispatch) => ({
})

class App extends Component {
    render() {
        return (
            <div className="mainContainer">
                <Header  month={this.props.currentMonth }/>
                <Dashboard />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
