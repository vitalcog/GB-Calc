import React, { Component } from 'react';
import { connect } from 'react-redux';

import SubHeader from './subHeader';
import QuickStats from './quickStats';
import DetailsWrapper from './detailChart/detailWrapper';

class CompWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {}
        }
    }

    // not sure where/when the best time/place is to make this call
    // this seems most reasonable at the moment,
    // need to look into this later
    componentWillMount() {
        let data = {}
        fetch('https://technekes.mockable.io/ngc-calculator-api/calculations', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log('Success:', response.GoldBondCalculation)
            if (this.props.installType === 'vertical') {
                this.setState({
                    info: response.GoldBondCalculation.vertical
                })
            }
            else if (this.props.installType === 'horizontal') {
                this.setState({
                    info: response.GoldBondCalculation.horizontal
                })
            }
        })
        .catch(error => console.error('Error:', error));
    }

    render() {

        const color = this.props.colorPattern

        function chooseNumber(arg) {
            if (arg === 'vertical') {
                return '1'
            }
            else if (arg === 'horizontal') {
                return '2'
            }
        }

        function colorTheme(arg) {
            if (arg === 'vertical') {
                return color.red
            }
            else if (arg === 'horizontal') {
                return color.gold
            }
        }

        console.log(this.props.installType, this.state.info)

        const wrapperStyle = {
            width: '100%',
            maxWidth: '1100px',
            borderTop: `8px solid ${colorTheme(this.props.installType)}`,
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.46)',
            margin: '20px 0',
        }

        const detailsContainer = {
            width: '100%',
            boxSizing: 'border-box',
            background: color.ltGray,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            padding: '20px 20px'
        }

        // console.log('info',info.national_gypsum)
        return (
            <div style={wrapperStyle}>

                <SubHeader bgColor={color.dkGray} ftWeight="700">
                    Comparison #{chooseNumber(this.props.installType)}: GridmarX (12/12) vs {this.props.competitor}
                </SubHeader>

                <QuickStats savings={this.state.info.total_savings}>
                    Overall Material and Labor Savings {this.props.installType}
                </QuickStats>

                <div className="detailsContainer" style={detailsContainer}>
                    <DetailsWrapper
                        trimColor={colorTheme(this.props.installType)}
                        titleText={'Labor'}
                        data={this.state.info.national_gypsum}
                    />
                    <DetailsWrapper
                        trimColor={colorTheme(this.props.installType)}
                        titleText={'Screws'}
                        data={this.state.info.national_gypsum}
                    />
                    <DetailsWrapper
                        trimColor={colorTheme(this.props.installType)}
                        titleText={'Spot Fasteners Labor'}
                        data={this.state.info.national_gypsum}
                    />
                    <DetailsWrapper
                        trimColor={colorTheme(this.props.installType)}
                        titleText={'Spot Fasteners Material'}
                        data={this.state.info.national_gypsum}
                    />
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
      fakeStuff: state.fakeData,
    }
  }
  
  // allows us to update values in store
  function dispatchToProps() {
      return {}
  }
  
  export default connect(mapToProps, dispatchToProps)(CompWrapper);