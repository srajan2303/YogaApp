import React from 'react'
import moment from 'moment';


const Button = (props) => {
    const { date, onSelectDate, isSelected } = props;

    return (
        <div className={`button-card ${isSelected ? "selected" : ""}`} onClick={() => onSelectDate(date)}>
            <div className="button-time">
                <h3>{moment(date).format("Do MMM")}</h3>
                <span>{moment(date).format("ddd")}</span>
            </div>
        </div>
    )
}

export default Button