import React from 'react';
import * as d3 from "d3-scale";
import * as d3r from "d3-array";
import Bar from './Bar.jsx';
import XAxis from './XAxis.jsx';
import YAxis from './YAxis.jsx';

// :):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):):)
class ReactChart extends React.Component {

    render() {
      // symptom data passed down from index.jsx 
      // format: [{symptom: Headeach, frequency: INT},{},{},{}]
      let data = this.props.data
  
      let margin = {top: 20, right: 20, bottom: 30, left: 45},
        width = this.props.width - margin.left - margin.right,
        height = this.props.height - margin.top - margin.bottom;
  
      let xAxisLabels = data.map((obj) => obj.symptom)
  
      // The D3 Math AND MAGIC! ;)  
      // sets ticks to middle of bar by getting width of graph dividing by amount of bars
      let ticks = d3r.range(0, width, (width / data.length))
      //scales x cordinated from data to fit the chart
      let x = d3.scaleOrdinal()
                .domain(xAxisLabels)
                .range(ticks)

      //scales y cordinated from data to fit the chart
      let y = d3.scaleLinear()
        .domain([0, d3r.max(data, (d) => d.frequency)])
        .range([height, 0])
  
      // array to hold all instances of Bars
      let bars = []
      // margin for bottom x-axis current height is 500;
      let bottom = 450
      // iterating over data array for data objects and calling BAR class to create bar visulaization
      data.forEach((objFromDataArr, index) => {
        bars.push(<Bar key={index} x={x(objFromDataArr.symptom)} y={bottom - 6 - (height - y(objFromDataArr.frequency))} width={20} height={height - y(objFromDataArr.frequency)} />)
      })
  
      return (
        <div className="barContainer">
        <h1 className="barTitle" style={{color: "#13728F"}} > Symptom Level Comparison from 'Start Date' to 'End Date' </h1>
        <svg width={this.props.width} height={this.props.height}>
            <YAxis  y={40} labels={y.ticks().reverse()} start={ 15 } end={ height } />
            <g className="chart" transform={`translate(${margin.left},${margin.top})`}>
               { bars }
               <XAxis  x={bottom} labels={xAxisLabels} start={0} end={ width } />
            </g>
        </svg>
        </div>
      );
    }
  
  }
  export default ReactChart;


  