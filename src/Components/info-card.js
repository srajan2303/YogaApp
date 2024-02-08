import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import InfoCardWrapper from './styles/info-card.style';

const InfoCard = (props) => {
  const { showModal, icon, description, buttonInfo, linkInfo, onButtonClick } = props;
  return (
    <InfoCardWrapper>
      <div className="info-cards">
        <div className='info-icon'>
          <span className="info-card-icon">
            <FontAwesomeIcon className="info-fa-icon" icon={icon} />
          </span>
        </div>
        <p className="info-card-description">{description}</p>

        {/* Conditionally render the button if buttonInfo prop is provided */}
        {buttonInfo && <button className='card-btn' onClick={onButtonClick}>{buttonInfo}</button>}

        {/* Conditionally render the link if linkInfo prop is provided */}
        {linkInfo && <a onClick={showModal}>I have a question</a>}
      </div>
    </InfoCardWrapper>
  )
}

export default InfoCard