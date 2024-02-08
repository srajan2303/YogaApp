import React, { useState } from 'react';
import HomeWrapper from './styles/home.style.js';
import { faHeartPulse, faBed, faBan } from "@fortawesome/free-solid-svg-icons";
import InfoCard from '../../Components/info-card.js';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../Components/nav-bar.js';
import ComingSoonModal from '../../Components/coming-soon-modal.js';

function Home() {
    const navigate = useNavigate();
    const [showComingSoonModal, setShowComingSoonModal] = useState(false);

    const showModal = () => {
        setShowComingSoonModal(true);
    }

    const closeModal = () => {
        setShowComingSoonModal(false);
    }

    const buttonClick = () => {
        navigate("/product");
    }

    return <HomeWrapper>
        <div className="info-section" id="services">
            <div className="info-title-content">
                <div className='title'>
                    <div className='desc'>
                        <p className="info-title">
                            Yoga for Mind
                        </p>
                    </div>
                    <div className='desc'>
                        <p className="info-description">
                            Watch our Lead Yoga Therapist,<span> Ms Uma Subramaniam</span> explain Yoga for Mind
                        </p>
                    </div>
                </div>

                <div className='video'>

                    <iframe className='thumbnail'
                        src="https://www.youtube.com/embed/hJbRpHZr_d0?si=R12RmmveWdTzStse"
                        title="YouTube video player"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className='tagline'><span>Is this for you?</span></div>

            <div className="info-cards-content">
                <InfoCard
                    description="Hard to feel calm or sleep because of stress?"
                    icon={faBed}
                    onButtonClick={buttonClick}
                    buttonInfo="Book trial @ 99"
                />

                <InfoCard
                    description="If you have palpitations and breathing trouble"
                    icon={faHeartPulse}
                    onButtonClick={buttonClick}
                    buttonInfo="I want to buy"
                />

                <InfoCard
                    description="You have been advised by doctors to avoid physical activity"
                    icon={faBan}
                    showModal={showModal}
                    linkInfo="I have a question"
                />
            </div>
        </div>
        {showComingSoonModal && <ComingSoonModal closeModal={closeModal} />}
    </HomeWrapper>
}

export default Home;