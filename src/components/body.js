import React, { Component } from 'react';
import faker from 'faker';

class Body extends Component {
    constructor(props) {
        super()
    }

    render() {

        const bodyStyle = {
            fontSize: '24px',
            color: 'white',
            background: 'blue',
            flexGrow: '1',
            overFlowX: 'scroll',
        }

        const pStyle = {
            margin: '0px'
        }

        return (
            <div style={bodyStyle}>
                {this.props.children}
                <p style={pStyle}>this is newComp</p>
                {faker.fake("{{company.companyName}}")}
            </div>
        )
    }

}
  
export default Body;