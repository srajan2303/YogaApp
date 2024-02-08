import React from 'react'
import PricingWrapper from './styles/pricing-card.style'


const PricingCard = (props) => {
    const { product, onSelectPackage } = props;
    const { months, oldPrice, currentPrice } = product;
    return (
        <PricingWrapper>
            <div className="subscription-card">
                <div className="card-price">
                    <h3>{months} Months</h3>
                    <div className='offer'><span className='strikethrough'>₹{oldPrice}</span>
                        <p className='new-price'>₹{currentPrice}</p>
                    </div>
                </div>

                <div className="card-button">
                    <p>{parseInt(currentPrice/months)}/month</p>
                    <button onClick={() => onSelectPackage(product.id)}>Buy Now</button>
                </div>
            </div>
        </PricingWrapper>
    )
}

export default PricingCard