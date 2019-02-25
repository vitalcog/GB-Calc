import React, { Component } from 'react';
import { connect } from 'react-redux';

class footer extends Component {

    render() {

        const color = this.props.colorPattern

        const footerStyle = {
            background: 'white',
            display: 'flex',
            height: '70px',
          }

        const redDiv = {
            width: '60%',
            background: `${color.red}`,
            borderTop: `70px solid ${color.red}`,
            borderRight: '20px solid white',
            marginRight: '5px'
        }

        const goldDivLeft = {
            width: '12%',
            background: `${color.gold}`,
            borderBottom: `70px solid ${color.gold}`,
            borderLeft: '20px solid white',
        }

        const goldDivRight = {
            borderTop: '70px solid #ebc600',
            borderRight: '20px solid white',
            marginRight: '5px'
        }

        const dkGrayLeft = {
            width: '4%',
            background: '#9f9f9f',
            borderBottom: '70px solid #9f9f9f',
            borderLeft: '20px solid white'
        }

        const dkGrayRight = {
            borderTop: '70px solid #9f9f9f',
            borderRight: '20px solid white',
            marginRight: '5px'
        }

        const medGrayDiv = {
            flexGrow: '1',
            background: 'lightgray',
            borderBottom: '70px solid lightgray',
            borderLeft: '20px solid white',
        }

        return (
            <footer style={footerStyle}>

                <div style={redDiv}></div>
                <div style={goldDivLeft}></div>
                <div style={goldDivRight}></div>
                <div style={dkGrayLeft}></div>
                <div style={dkGrayRight}></div>
                <div style={medGrayDiv}></div>

            </footer>
        )
    }

}
  
// sets our initial state to this component's props
function mapToProps(state) {
    return {
      colorPattern: state.appColors
    }
  }
  
  // allows us to update values in store
  function dispatchToProps() {
      return {}
  }
  
  export default connect(mapToProps, dispatchToProps)(footer);