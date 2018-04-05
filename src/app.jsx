import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import actionCreator from "./Actions/actionCreators";
import MainContent from './Components/MainContent.jsx';
import Header from './Components/Header.jsx';

const mapStateToProps = store => ({
    currentMonth: store.data.currMonth
});
const mapDispatchToProps = (dispatch) => ({
})

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="mainContainer">
                    <Header  month={this.props.currentMonth }/>
                    <MainContent />
                </div>
            </BrowserRouter>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
