import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-solid-svg-icons';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const SlotButton = (props) => {
    const { slot, isSelected, onSelectSlot } = props; 
    return (
        <div className={`time-card ${isSelected ? "selected" : ""}`} onClick={() => onSelectSlot(slot.id)}>
            <div className="time-slot">
                <div className='clock'>
                    <FontAwesomeIcon className="icon2" icon={faClock} />
                    <h4>{slot.startTime + "-" + slot.endTime}</h4>
                </div>
                <div className='week'>
                    <p className='week-days'>{slot.days.map(day => daysOfWeek[day]).join(", ")}</p>
                </div>
            </div>
        </div>
    )
}

export default SlotButton