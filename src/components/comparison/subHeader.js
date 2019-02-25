import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubHeader extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {

        // const color = this.props.colorPattern

        const wrapper = {
            background: this.props.bgColor,
            fontWeight: this.props.ftWeight,
            paddingLeft: '65px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
        }

        return (
            <div style={wrapper}>
                {this.props.children}
            </div>
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
  
  export default connect(mapToProps, dispatchToProps)(SubHeader);