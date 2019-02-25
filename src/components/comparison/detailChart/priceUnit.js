import React, { Component } from 'react';

class PriceUnit extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {

        const unitCss = this.props.style

        unitCss.display = 'flex'
        unitCss.justifyContent = 'center'
        unitCss.alignItems = 'center'
        unitCss.fontWeight = '500'
        unitCss.fontSize = '24px'

        return (
            <div style={unitCss}>{this.props.children}</div>
        )
    }

}
  
export default PriceUnit;