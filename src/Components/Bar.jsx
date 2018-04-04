import React from 'react';

class Bar extends React.Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      // inline style should move to main.css
      let style = {
        fill:'#F07F0E'
      }
  
      return(
        <g>
            <rect className="bar"  style={style} x={this.props.x} y={this.props.y + 5} width={this.props.width} height={this.props.height} />
        </g>
      )
    }
  
  }
  export default Bar