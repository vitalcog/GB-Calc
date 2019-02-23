import React, { Component } from 'react';

class header extends Component {
    constructor(props) {
        super()
    }

    render() {

        const headerStyle = {
            background: 'red',
            height: '80px',
            margin: '0'
        }

        return (
            <h1 style={headerStyle}>
                this is the header!
            </h1>
        )
    }

}
  
export default header;