import React from 'react';
import * as d3 from "d3-scale";
import * as d3r from "d3-array";
class YAxis extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      // inline styling 
      let style = {
        stroke: "#90C5D4",
        strokeWidth: "4px"
      }
      // inline styling 
      let textStyle = {
        fontSize: "1em",
        fill: "#ED3B05",
        textAnchor: "end"
      }
      
      //D3 MAGIC ;)
      // determining the range for the ticks
      let ticks = d3r.range(0, this.props.end, (this.props.end / this.props.labels.length))
      // array containg vertical line instances for the y-axis 
      let lines = []
      ticks.forEach((tick, index) => {
        lines.push(<line style={style} y1={tick} x1={this.props.y} key={index} y2={tick} x2={this.props.y-5}  />)
      })
      // array containing the y-axis lables
      let columnLables = []
      ticks.forEach((tick, index) => {
        columnLables.push(<text style={ textStyle } y={tick + 6} x={this.props.y - 6} key={index} fontFamily="Verdana" >{this.props.labels[index]}</text>)
      })
      
      return(
        <g>
            <g className="y_labels" transform={`translate(${-5},${17})`}>
            <line x1={this.props.y} y1={this.props.start} y2={this.props.end} x2={this.props.y} style={ style } />
            </g>
            <g className="y_labels" transform={`translate(${-5},${51})`}>
              { columnLables }
              { lines }
            </g>
        </g>
      )
    }
  
  }
  export default YAxis;