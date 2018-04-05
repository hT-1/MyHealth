import React from 'react';
import ReactDOM from 'react-dom';
import ReactChart from './ReactChart.jsx';


// We should be able to query symptom table for a data range EX: MARCH 1st to APRIL 2nd
//  accumulate all the occurances of the same type and create an array of objects containing symptom and frequency suring that time range.

let data = [
    // {symptom: 'Headeache', frequency: 67},
    // {symptom: 'Backache', frequency: 27},
    {symptom: 'Breast Swelling', frequency: 53},
    {symptom: 'Sadness', frequency: 28},
    {symptom: 'Moody', frequency: 12},
    {symptom: 'Dizziness', frequency: 45},
    {symptom: 'Libido+', frequency: 67},
    {symptom: 'Food Cravings', frequency: 76},
    {symptom: 'Night Sweats', frequency: 32},
    {symptom: 'Acne', frequency: 43},
    {symptom: 'Bloating', frequency: 34},
    // {symptom: 'Anxiety', frequency: 43},
    // {symptom: 'Fatigue', frequency: 43},
    // {symptom: 'Libido-', frequency: 23},
    // // {symptom: 'Muscle Pain', frequency: 44},
    // // {symptom: 'Ovarian Pain	', frequency: 32},
    // // {symptom: 'V- irratation', frequency: 22},
    // // {symptom: 'Nausea', frequency: 24},
    // // {symptom: 'Tension', frequency: 26},
    // {symptom: 'Weight Gain', frequency: 37},
    // {symptom: 'Joint Pain', frequency: 38},
    // {symptom: 'Flatulence', frequency: 87},
    // {symptom: 'BreastTender', frequency: 100},
    {symptom: 'CryingSpells', frequency: 74}]

const Profile = props => {
    // // width prop is dynamic based on length of data array
    return (
        <div className="profile">
            <ReactChart width={100*data.length-1} height={500}  data={data} />
        </div>
    )
}

export default Profile;

