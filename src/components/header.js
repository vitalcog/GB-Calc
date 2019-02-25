import React, { Component } from 'react';
import { connect } from 'react-redux'

import nationalGypsumLogo from '../national-gyp-logo.png';
import goldBondLogo from '../gb-logo.jpeg';
import rsDataLogo from '../rs-data-logo.png';

class header extends Component {

    render() {

        const color = this.props.colorPattern

        const headerStyle = {
            borderTop: `5px solid ${color.gold}`,
            background: 'white',
            height: '100px',
            margin: '0',
            display: 'flex',
            justifyContent: 'space-between'
        }

        const holdContentRight = {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
        }

        const ngLogoCss = {
            height: '100%',
            marginLeft: '25px'
        }

        const gbLogoCss = {
            height: '40%'
        }

        const rsLogoCss = {
            height: '80%',
            marginRight: '35px',
            marginLeft: '5px'
        }

        const graySpacer = {
            height: '50%',
            width: '3px',
            background: `${color.ltGray}`,
            margin: '0px 24px',
            borderRadius: '3px'
        }

        return (
            <header style={headerStyle}>
                <img src={nationalGypsumLogo} style={ngLogoCss} alt="National Gypsum company logo"/>
                <div className="rightSideHeaderImgs" style={holdContentRight}>
                    <img src={goldBondLogo} style={gbLogoCss} alt="Gold Bond company logo"/>
                    <div style={graySpacer}></div>
                    <img src={rsDataLogo} style={rsLogoCss} alt="RS Data company logo"/>
                </div>
            </header>
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
  
  export default connect(mapToProps, dispatchToProps)(header);