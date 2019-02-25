import React, { Component } from 'react';
import PriceUnit from './priceUnit';

class DetailBody extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {

        const wrapper = {
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            padding: '60px 40px 30px 60px'
        }

        const sideLabel = {
            fontSize: '14px',
            transform: 'rotate(-90deg)',
            height: '10px',
            width: '100px',
            position: 'absolute',
            top: '110px',
            left: '-10px'
        }
        const sideLabelTwo = {
            fontSize: '14px',
            transform: 'rotate(-90deg)',
            height: '10px',
            width: '100px',
            position: 'absolute',
            top: '220px',
            left: '-10px'
        }

        const topLabel = {
            fontSize: '12px',
            position: 'absolute',
            top: '34px',
            left: '120px',
        }
        const topLabelTwo = {
            fontSize: '12px',
            position: 'absolute',
            top: '34px',
            right: '100px',
        }

        const topLeft = {
            height: '120px',
            borderLeft: '1px solid black',
            borderTop: '1px solid black',
            borderRight: '1px solid black',
            borderRadius: '4px 0 0 0'
        }
        const topRight = {
            height: '120px',
            borderRight: '1px solid black',
            borderTop: '1px solid black',
            borderRadius: '0 4px 0 0'
        }
        const bottomRight = {
            height: '120px',
            borderRight: '1px solid black',
            borderBottom: '1px solid black',
            borderTop: '1px solid black',
            borderRadius: '0 0 4px 0'
        }
        const bottomLeft = {
            height: '120px',
            borderRight: '1px solid black',
            borderLeft: '1px solid black',
            borderBottom: '1px solid black',
            borderTop: '1px solid black',
            borderRadius: '0 0 0 4px'
        }

        console.log('unitData',this.props.unitData)
        function showValue(arg) {
            if(arg != NaN) {
                return arg
            }
        }
        const pricePerSf = (this.props.unitData.laborCost/1000).toFixed(3)
        return (
            <div style={wrapper}>
                {/* first row */}
                <div style={topLabel}>Labor Cost/SF</div>
                <div style={topLabelTwo}>Ext. Labor Cost</div>

                {/* second row */}
                <div style={sideLabel}>NGC GridMax</div>
                <PriceUnit style={topLeft}>${pricePerSf}</PriceUnit>
                <PriceUnit style={topRight}>${this.props.unitData.extendedLaborCost}</PriceUnit>

                {/* third row */}
                <div style={sideLabelTwo}>Competitor</div>
                <PriceUnit style={bottomLeft}>${pricePerSf}</PriceUnit>
                <PriceUnit style={bottomRight}>${this.props.unitData.extendedLaborCost}</PriceUnit>
            </div>
        )
    }

}
  
export default DetailBody;