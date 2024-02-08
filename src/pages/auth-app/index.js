import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router';
import * as AuthUtils from '../../utils/auth';
import NavBar from '../../Components/nav-bar';
import Loader from '../../Components/loader.js';

import AuthAppWrapper from './styles/auth-app.style';

import * as UserActions from '../../actions/user.js';

function AuthApp(props) {
    const { dispatch, user } = props;
    const navigate = useNavigate();
    useEffect(() => {
        if (!AuthUtils.isAuthCookiePresent()) {
            navigate("/login")
        }
        dispatch(UserActions.getCurrentUser());
    }, []);

    const logoutUser = () => {
        dispatch(UserActions.logoutUser());
    }

    const backToHomeClick = () => {
       navigate("/");
    }
    if(!user.currentUser){
        return <Loader />
    }
    return AuthUtils.isAuthCookiePresent() ?
        <AuthAppWrapper>
            <NavBar logoutUser={logoutUser} backToHomeClick={backToHomeClick} currentUser={user.currentUser} />
            <div className='main-container'>
                <Outlet />
            </div>
        </AuthAppWrapper>
        : <Navigate to="/login" />;
};


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(AuthApp);;