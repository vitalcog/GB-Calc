import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComparisonWrapper from './comparison/comparisonWrapper';

class body extends Component {

    render() {

        const color = this.props.colorPattern

        const bodyStyle = {
            padding: '20px 0 30px 0',
            background: `${color.mdGray}`,
            flexGrow: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }

        const array = ["vertical", "horizontal"];

        return (
            <div style={bodyStyle}>
                {array.map( (i, count)=> {
                    return <ComparisonWrapper installType={i} key={count}/>
                })}
            </div>
        )
    }

}
  
// sets our initial state to this component's props
function mapToProps(state) {
    return {
      colorPattern: state.appColors,
      fakeStuff: state.fakeData,
      competitor: state.competitorName
    }
  }
  
  // allows us to update values in store
  function dispatchToProps() {
      return {}
  }
  
  export default connect(mapToProps, dispatchToProps)(body);