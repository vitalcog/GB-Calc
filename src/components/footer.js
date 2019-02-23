import React, { Component } from 'react';

class footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <footer style={this.props.css}>this is a footer</footer>
        )
    }

}
  
export default footer;