import React from 'react';
import * as d3 from "d3-scale";
import * as d3r from "d3-array";

class XAxis extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      let style = {
        stroke: '#90C5D4',
        strokeWidth: "4px",
      }
      // determing the spacing for the ticks on x-axis
      let step = (this.props.start + this.props.end / this.props.labels.length)
      
      //D3 MATH and MAGIC ;);
      let ticks = d3r.range(this.props.start, this.props.end, step)
      // array containg vertical line instances for the x-axis 
      let lines = []
      ticks.forEach((tick, index) => {
        lines.push(<line  style={style} x1={tick + 20 } y1={this.props.x} key={index} x2={tick + 20} y2={this.props.x + 4}  />)
      })
      // array containing the x-axis lables for symptoms
      let columnLables = []
      ticks.forEach((tick, index) => {
        columnLables.push(<text  className="xAxis" style={{fill: "#ED3B05"}} x={tick + 5} key={index}  y={this.props.x + 20} fontFamily="Verdana" fontSize="12"  >{this.props.labels[index]}</text>)
      })
      
      return(
        <g >
          <line   x1={this.props.start} y1={this.props.x } x2={this.props.end} y2={this.props.x} style={ style } />
          { columnLables }
          { lines }
        </g>
      )
    }
  
  }

  export default XAxis;