import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailFooter extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {

        const color = this.props.colorPattern

        const miniFooter = {
            background: color.dkGray,
            paddingBottom: '10px'
        }

        const lowerDiv = {
            display: 'flex',
            justifyContent: 'space-around'
        }

        const tinyText = {
            height: '34px',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '40px'
        }

        const pStyle = {
            margin: '0 0 10px 0',
            fontWeight: '500',
            fontSize: '22px'
        }

        let stats = this.props.fakeStuff

        return (
            <div style={miniFooter}>
                <div style={tinyText}>Overall labor/material savings (%/cost)</div>
                <div style={lowerDiv}>
                    <p style={pStyle}>{stats.savings}%</p>
                    <p style={pStyle}>{(stats.fakePrice - stats.betterPrice).toFixed(2)}</p>
                </div>
            </div>
        )
    }

}
  
// sets our initial state to this component's props
function mapToProps(state) {
    return {
      colorPattern: state.appColors,
      competitor: state.competitorName,
      fakeStuff: state.fakeData
    }
  }
  
  // allows us to update values in store
  function dispatchToProps() {
      return {}
  }
  
  export default connect(mapToProps, dispatchToProps)(DetailFooter);