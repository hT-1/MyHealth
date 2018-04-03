import React from 'react';

const Header = props => {

    return (
        <header className="header">
          <div className="left_nav">
            {props.month.toUpperCase()}
          </div>
          <div className="right_nav">
            <ul>
              <li className="link">HOME</li>
              <li className="link">EXPORT</li>
              <li className="link">LOGOUT</li>
            </ul>
          </div>
        </header>
    )
}

export default Header;