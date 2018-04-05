import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import blue from 'material-ui/colors/blue';
import { Link } from 'react-router-dom';
const Header = props => {
    return (
    <div className='header'>
      <AppBar position="static" >
        <Toolbar styles="background-color: dodgerblue !important">
          <Typography variant="title" color="inherit" className="left_nav">
          {props.month.toUpperCase()}
          </Typography>
          <Button color="inherit"><Link to="/" >Home</Link></Button>
          <Button color="inherit"><Link to="/profile" >PROFILE</Link></Button>
          <Button color="inherit">EXPORT</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header;