import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BatchWrapper from './styles/batch.style.js';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { faCaretRight } from '@fortawesome/free-solid-svg-icons'; import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SlotButton from '../../Components/slot-button.js';
import ButtonCard from '../../Components/button-card.js';

import * as ProductActions from '../../actions/product.js';
import Loader from '../../Components/loader.js';

function Batch(props) {
    const { dispatch, product } = props;
    const navigate = useNavigate();
    const [timeSlots, setTimeSlots] = useState('');
    const [ packageSlot, setPackageSlot] = useState({});

    useEffect(() => {
        dispatch(ProductActions.getPackageSlots());
    }, []);

    if (product.isPackageSlotFetching) {
        return <Loader />;
    }

    const onSelectDate = (date) => {
        const selectedSlot = product.packageSlots.find(slot => slot.date === date);
        setTimeSlots(selectedSlot.timeSlots);
        setPackageSlot({...packageSlot, date, slotId : undefined });
    }

    const onSelectSlot = (slotId) => {
        setPackageSlot({...packageSlot, slotId });
    }

    const onBuyPackage = () => {
        toast.success("Package bought successfully");
        dispatch(ProductActions.buyPackage(packageSlot));
        setTimeout(() => {
            navigate("/");
        }, 3000)
        
    }

    return <BatchWrapper>
        <div className='slot'>
            <h2>Yoga for Mind</h2>
            <div className="slot-image-content">
            </div>
            <h2>What is Yoga for Mind?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consequuntur. ipsum dolor sit amet consectetur adipisicing elit. Maiores, sapiente? Dicta voluptate sit laborum fuga possimus atque eius minima assumenda!</p>
            <div className='arrows'>
                <Link to="/">Yoga</Link>
                <FontAwesomeIcon className="icon1" icon={faCaretRight} />
                <Link to="/product">Yoga For Mind</Link>
                <FontAwesomeIcon className="icon1" icon={faCaretRight} />
                <Link className="self" to="#">Package</Link>
            </div>
            <h2>1 Month Yoga for Mind</h2>
            <div className='change-plan'>
                <span>5 days a week</span>
                <Link to="/product">Change Plan</Link>
            </div>
            <h3>Pick a start date</h3>
            <p>Dates are available only for the next 2 weeks</p>
            <div className='booking'>
                <div className='slot-button'>
                    {product.packageSlots.map((slot, i) => (<ButtonCard key={i}
                                                            date={slot.date} 
                                                            onSelectDate={onSelectDate}
                                                            isSelected={slot.date === packageSlot.date}
                                                            />))}
                </div>
                {timeSlots.length > 0 &&
                    <div className='week-button'>
                        <h2>Select Time Slot</h2>

                        {timeSlots.map((slot, i) => <SlotButton key={i} 
                                                            slot={slot} 
                                                            onSelectSlot={onSelectSlot}
                                                            isSelected={slot.id === packageSlot.slotId}/>)}
                    </div>}
            </div>
            {timeSlots.length > 0 && <button onClick={onBuyPackage}>Buy Package</button>}
        </div>
        <Toaster />

    </BatchWrapper >
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Batch);