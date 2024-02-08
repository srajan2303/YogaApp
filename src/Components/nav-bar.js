import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from 'react-router-dom';
import NavBarWrapper from './styles/nav-bar.style';
import * as AuthUtils from '../utils/auth';
import { getInitials } from '../utils/getInititials';

const NavBar = (props) => {
    const { logoutUser, backToHomeClick, currentUser } = props;
    return (
        <NavBarWrapper>
            <nav>
                <img onClick={backToHomeClick} src="https://assets-global.website-files.com/651e567d9c211dc2a12830d5/65729cbac31d6c6617df655b_eh%20logo%20svg%20new.svg" height="40" width="110" />
                <div className='right-navbar'>
                    <div className='name'><span className='display-menu-name'>{getInitials(currentUser.name)}</span>{currentUser.name}</div>
                    <button onClick={logoutUser}>Logout</button>
                </div>
            </nav>
        </NavBarWrapper>
    )
}

export default NavBar;