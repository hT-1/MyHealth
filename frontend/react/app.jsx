import React, { Component } from "react";
import actionCreator from "../redux/actionCreators";
import { connect } from "react-redux";
import LeftPane from './leftPane.jsx';
// const serverURL = 'http://localhost:3000/';
import RightPane from './rightPane.jsx';

const mapStateToProps = (store) => ({

})
console.log("line 4 inside app.js");
const mapDispatchToProps = (dispatch) => ({
    syncDB: (dbState) => {
        dispatch(actionCreator.syncDB(dbState));
        return;
    }
})
console.log("line 11 inside app.js");


class App extends Component {
    constructor() {
        super();

    }
    render() {
        console.log('inside line 26 of app.js');
        return (
            <div className="mainContainer">
                <LeftPane />
                <RightPane />

            </div>
        )
    }

    componentDidMount() {
        // let result = ajax call(); 
        // fetch(`/`)
        //     .then(function (data) {
        //         console.log(data);
        //     })
        //     .catch(function (e) {
        //         console.warn(e);
        //     });
        // let result = {};
        // this.props.syncDB(result);
        return;
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
