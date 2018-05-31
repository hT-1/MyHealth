import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import Download from 'material-ui-icons/VerticalAlignBottom';
import PropTypes from 'prop-types';

const downloadsjs = require('downloadjs');

const Header = props =>
  (
    <div className="header">
      <AppBar position="static" >
        <Toolbar styles="background-color: dodgerblue !important">
          <Typography variant="title" color="inherit" className="left_nav">
            {props.month.toUpperCase()}
          </Typography>
          <Button color="inherit"><Link to="/">HOME</Link></Button>
          <Button color="inherit"><Link to="/profile">PROFILE</Link></Button>
          <Button color="inherit" onClick={() => { downloadsjs('/export/csv'); }} >EXPORT</Button>
          <Button color="inherit" onClick={() => { downloadsjs('MySymptom.csv'); }} ><Download /></Button>
          <Button color="inherit" href="mailto:yourDoctor@gmail.com?subject=My Symptoms&body=Hello,%0A I am attaching a file with all my symptom data. I hope that it's useful. %0A Thank you for your time, and attention! %0A &attachment=/Users/academieange/Downloads/csv\ \(8\).html">EMAIL</Button>
        </Toolbar>
      </AppBar>
    </div>
  );

export default Header;

Header.propTypes = {
  month: PropTypes.string.isRequired,
};
