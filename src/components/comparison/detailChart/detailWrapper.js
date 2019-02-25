import React, { Component } from 'react';
import DetailTitle from './detailTitle';
import DetailBody from './detailBody';
import DetailFooter from './detailFooter';
import { connect } from 'react-redux';

class DetailsWrapper extends Component {

    render() {

        let type = this.props.titleText
        console.log('type', type)
        const specificData = {}

        if (this.props.data != undefined) {
            switch (type) {
                case 'Labor':
                    specificData.laborCost = this.props.data.labor_cost_per_square_foot;
                    specificData.extendedLaborCost = this.props.data.extended_labor_cost;          
                    break;
                case 'Screws':
                    specificData.laborCost = this.props.data.labor_cost_per_square_foot;
                    specificData.extendedLaborCost = this.props.data.extended_labor_cost;
                    break;
                case 'Spot Fasteners Labor':
                    specificData.laborCost = this.props.data.labor_cost_per_square_foot;
                    specificData.extendedLaborCost = this.props.data.extended_labor_cost;
                    break;
                case 'Spot Fasteners Material':
                    specificData.laborCost = this.props.data.labor_cost_per_square_foot;
                    specificData.extendedLaborCost = this.props.data.extended_labor_cost;
                    break;
                default:
                    console.log('switch case was broken')
            }
        }
        console.log('fine graining', specificData)

        const wrapper = {
            boxShadow: '0 1px 6px rgba(0, 0, 0, 0.46)',
            width: '500px',
            borderRadius: '3px',
            margin: '20px auto',
            background: 'white'
        }

        return (
            <div className="detailsCard" style={wrapper}>
                <DetailTitle trimColor={this.props.trimColor} titleText={this.props.titleText}/>
                <DetailBody unitData={specificData}/>
                <DetailFooter/>
            </div>
        )
        // the "DetailFooter" can probably be replaced with the "QuickStats" component
        // in the future but it needs to be reconfigured first
    }

}
 
export default DetailsWrapper;