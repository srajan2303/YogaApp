import * as ActionTypes from '../constants/actions';

export function setError(error) {
	return {
		type : ActionTypes.ERROR.SET_ERROR,
		error
	};
}

export function unsetError() {
	return {
		type : ActionTypes.ERROR.UNSET_ERROR
	};
}
