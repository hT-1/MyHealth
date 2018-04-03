import React, { Component } from "react";
import { connect } from 'react-redux';
import NavBar from '../Components/navBar.jsx';
import InfoBox from '../Components/infoBox.jsx';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const mapStateToProps = store => ({
entries: store.data.entries,
});

const mapDispatchToProps = dispatch => ({

});

class Sidebar extends Component {

    render() {
        return (
            <div id="sidebar">
                <InfoBox entries={this.props.entries}/>
                <Button variant="fab" className='fab' color='primary' onClick={this.handleOpen}>
                    <AddIcon />
                </Button>
            </div>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
