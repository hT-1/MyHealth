import React from 'react';
import Entry from './entry.jsx';

const InfoBox = props => {
    let entries = [];
    for(let i = 0; i < props.entries.length; i++){
        entries.push(<Entry data={props.entries[i]} key={i} />);
    }
    return (
        <div className="infoBox">
           { entries }
        </div>
    )
}

export default InfoBox;