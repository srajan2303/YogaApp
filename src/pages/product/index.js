import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//Components
import PricingCard from '../../Components/pricing-card.js'
import { faClock, faComment } from '@fortawesome/free-solid-svg-icons';
import About from '../../Components/About.js';
import Loader from '../../Components/loader.js';

import ProductWrapper from './styles/product.style.js';

import * as ProductActions from '../../actions/product.js';

function Product(props) {
    const { dispatch, product } = props;
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(ProductActions.getPackageList());
    }, []);

    if (product.isPackageListFetching) {
        return <Loader />;
    }

    const onSelectPackage = (id) => {
        navigate("/batch/" + id);
    }

    return <ProductWrapper>
        <div className='product-page'>
            <div className="about-section" >
                <h2>Yoga for Mind</h2>
                <div className="about-image-content">

                    <img src="/images/pic1.jpg" alt="Doctor Group" className="about-image1" />
                </div>

                <div className="about-text-content">
                    <p className="about-title">
                        What is Yoga for Mind?
                    </p>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus earum, ea repellat aspernatur at. ipsum dolor sit amet consectetur adipisicing elit. Sed, a! ipsum dolor sit amet consectetur adipisicing elit. Vitae veritatis, dolorum eveniet quaerat aspernatur expedita voluptatibus neque, nulla minima iusto illum eius, deleniti dolore ullam!
                    </p>
                </div>
            </div>


            <div className='pricing-cards'>
                <h2 className="about-text-title">Choose your package</h2>
                <div className='offer-cards'>
                    {product.packageList.map((prod,i) =>
                        <PricingCard
                            product={prod}
                            onSelectPackage={onSelectPackage}
                            key={i}
                        />)}
                </div>

                <h2 className="about-text-title">What you'll get</h2>
                <About
                    iconName={faComment}
                    description="A chat group on the Elda app where you can connect with your trainer and the rest of the Elda Yoga Community"
                />
                <About
                    iconName={faClock}
                    description="Ability to reschedule your class if you miss your session"
                />
            </div>
        </div>
    </ProductWrapper>
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Product);