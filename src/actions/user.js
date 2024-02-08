import * as ActionTypes from '../constants/actions';
import * as UserApis from '../apis/user';

//Utils
import * as AuthUtils from '../utils/auth';


export function authenticateUser(requestBody, errorCallback) {
  return async (dispatch) => {
    dispatch(toggleAuthInProgress());
    const response = await UserApis.authenticateUser(requestBody);

    if (response.success) {
      dispatch(setCurrentUser(response.user));
      dispatch(toggleAuthInProgress());
      AuthUtils.saveAuthCookie();
      window.location.reload();
    } else {
      errorCallback(response.error);
    }

  };
}

export function getCurrentUser() {
  return async (dispatch) => {
    const response = await UserApis.getCurrentUser();
    if (response.success) {
      dispatch(setCurrentUser(response.user));
    } else {
      if(response.error.code === 401){
        AuthUtils.removeAuthCookie();
        window.location.reload();
      }
    }

  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(unsetCurrentUser());
    AuthUtils.removeAuthCookie();
    window.location.reload();
  };
}

function toggleAuthInProgress() {
  return {
    type: ActionTypes.USER.TOGGLE_AUTH_IN_PROGRESS
  };
}

function setCurrentUser(user) {
  return {
    type: ActionTypes.USER.SET_CURRENT_USER,
    currentUser: user
  };
}

function unsetCurrentUser() {
  return {
    type: ActionTypes.USER.UNSET_CURRENT_USER
  };
}


