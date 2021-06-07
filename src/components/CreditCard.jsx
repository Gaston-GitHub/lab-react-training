import React from 'react';

class CreditCard extends React.Component {
    render() {
        return (
            <div className='CreditCard' style={{
                backgroundColor: this.props.bgColor,
                color: this.props.color}}>
                <div className='type'>
                    {this.props.type === 'Visa' && <img src='/img/visa.png' alt='' />}
                    {this.props.type === 'Master Card' && <img src='/img/master-card.svg' alt='' />}
                </div>
                <div className='number'>
                •••• •••• •••• {this.props.number.slice(-4)} 
                </div>
                <div className='expires-bank'>
                    <span>Expires {('0'+ this.props.expirationMonth).substring(-2)} / {this.props.expirationYear.toString().substring(2)}</span>
                    <span className='bank'>{this.props.bank}</span>
                </div>
                <div className='owner'>{this.props.owner}</div>
            </div>

         )
    }
}

export default CreditCard