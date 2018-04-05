import React from 'react';
import ReactDOM from 'react-dom';
import ReactChart from './ReactChart.jsx';


// We should be able to query symptom table for a data range EX: MARCH 1st to APRIL 2nd
//  accumulate all the occurances of the same type and create an array of objects containing symptom and frequency suring that time range.

let dataSymptomsPerRange = [
    // {symptom: 'Headeache', frequency: 67},
    {symptom: 'Backache', frequency: 27},
    // {symptom: 'Breast Swelling', frequency: 32},
    // {symptom: 'Sadness', frequency: 28},
    // {symptom: 'Moody', frequency: 12},
    {symptom: 'Dizziness', frequency: 10},
    {symptom: 'Libido+', frequency: 45},
    {symptom: 'Food Cravings', frequency: 60},
    {symptom: 'Night Sweats', frequency: 32},
    {symptom: 'Acne', frequency: 43},
    {symptom: 'Bloating', frequency: 34},
    {symptom: 'Anxiety', frequency: 43},
    {symptom: 'Fatigue', frequency: 43},
    {symptom: 'Libido-', frequency: 23},
    // {symptom: 'Muscle Pain', frequency: 44},
    // {symptom: 'Ovarian Pain	', frequency: 32},
    // {symptom: 'V- irratation', frequency: 22},
    // {symptom: 'Nausea', frequency: 24},
    // {symptom: 'Tension', frequency: 26},
    // {symptom: 'Weight Gain', frequency: 37},
    // {symptom: 'Joint Pain', frequency: 38},
    // {symptom: 'Flatulence', frequency: 87},
    // {symptom: 'BreastTender', frequency: 100},
    {symptom: 'Crying Spells', frequency: 60}]

    let dataPeriodLength = [
        {
            symptom:"2018-03-01", frequency:5
        },
        {
            symptom:"2018-03-21", frequency:8
        },
        {
            symptom:"2018-04-01", frequency:5
        },
        {
            symptom:"2018-04-21", frequency:5
        },
        {
            symptom:"2018-05-01", frequency:6
        },
        {
            symptom:"2018-05-10", frequency:8
        }
    ]

    let cycleLength = [
        {
            "symptom": "2018-03-01",
            "frequency": 21
        },
        {
            "symptom": "2018-03-22",
            "frequency": 24
        },
        {
            "symptom": "2018-04-15",
            "frequency": null
        }
    ]








const Profile = props => {
    // // width prop is dynamic based on length of data array
    return (
        <div className="profile">
            <h1 className="barTitle" style={{color: "#13728F"}} > Symptom Level Comparison from 'Jan 01 2018' to 'Apr 05 2018' </h1>
            <ReactChart width={100*dataSymptomsPerRange.length-1} height={400}  data={dataSymptomsPerRange} />
            <h1 className="barTitle" style={{color: "#13728F"}} > Period Length </h1>
            <ReactChart width={100*dataPeriodLength.length-1} height={400}  data={dataPeriodLength} />
            <h1 className="barTitle" style={{color: "#13728F"}} > Cycle Length</h1>
            <ReactChart width={100*cycleLength.length-1} height={400}  data={cycleLength} />

            

        </div>
    )
}

export default Profile;

