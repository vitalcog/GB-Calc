import React, { Component } from 'react';

class DetailFooter extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {

        const valuePassed = this.props.trimColor

        function textColor() { // if the background color is red, make text color white
            if (valuePassed === '#d80000') {
                return 'white'
            }
            else {
                return 'black'
            }
        }

        const titleBar = {
            background: valuePassed,
            borderRadius: '3px 3px 0 0',
            color: textColor(),
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '20px',
            fontWeight: '500',
            fontSize: '18px'
        }

        return (
            <div style={titleBar}>{this.props.titleText}</div>
        )
    }

}
  
export default DetailFooter;