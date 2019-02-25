import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubHeader from './subHeader';

class QuickStats extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {

        const color = this.props.colorPattern

        const wrapper = {
            background: this.props.bgColor,
        }

        const lowerDiv = {
            display: 'flex',
        }

        const savingsInfo = {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '1',
            alignItems: 'center',
            marginBottom: '16px'
        }

        const tinyText = {
            fontSize: '12px',
            margin: '5px 0 2px 0',
        }

        const boldText = {
            fontWeight: 'bolder',
            fontSize: '18px',
            margin: '4px 0 0 0',
        }

        let stats = this.props.fakeStuff

        // due to there being no diff between prices I'll keep the fake info for now
        return (
            <div style={wrapper}>

                <SubHeader bgColor={color.mdGray} ftWeight="normal">{this.props.children}</SubHeader>

                <div style={lowerDiv}>

                    <div style={savingsInfo}>
                        <p style={tinyText}>Cost Savings</p>
                        <p style={boldText}>{`$${(stats.fakePrice - stats.betterPrice).toFixed(2)}`}</p>
                    </div>

                    <div style={savingsInfo}>
                        <p style={tinyText}>% Savings</p>
                        <p style={boldText}>{stats.savings}%</p>
                    </div>

                </div>

            </div>
        )
    }

}
  
// sets our initial state to this component's props
function mapToProps(state) {
    return {
      colorPattern: state.appColors,
      fakeStuff: state.fakeData
    }
  }
  
  // allows us to update values in store
  function dispatchToProps() {
      return {}
  }
  
  export default connect(mapToProps, dispatchToProps)(QuickStats);