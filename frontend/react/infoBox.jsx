/**
 * @module  infoBox
 * @author Pauline Chang
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from 'react';
import Entry from '../react/entry.jsx';

const InfoBox = props => {
    //   let result;
    //   function updateInputValue(e) {
    //     result = e.target.value;
    //   }
    return (


        // how do we create the circuit between the store and an input field?
        // how do we update the store from a presentation component?
        <div className="infoBox">
            <Entry />
            <Entry />
            <Entry />
            <Entry />
            <Entry />
            <Entry />
            <Entry />
        </div>
    )
}

export default InfoBox;