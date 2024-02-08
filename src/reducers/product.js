import * as ActionTypes from '../constants/actions.js';

const defaultState = {
  isPackageListFetching: false,
  packageList: [],
  isPackageSlotFetching: false,
  packageSlots: []
};


export default function user(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.PRODUCT.SET_PACKAGE_LIST:
    {
      return {
        ...state,
        packageList: action.packageList
      };
    }
    case ActionTypes.PRODUCT.UNSET_PACKAGE_LIST:
    {
      return {
        ...state,
        packageList: []
      };
    }
    case ActionTypes.PRODUCT.TOGGLE_FETCHING_PACKAGE_LIST:
    {
      return {
        ...state,
        isPackageListFetching: !state.isPackageListFetching
      };
    }
    case ActionTypes.PRODUCT.SET_PACKAGE_SLOTS:
    {
      return {
        ...state,
        packageSlots: action.packageSlots
      };
    }
    case ActionTypes.PRODUCT.UNSET_PACKAGE_SLOTS:
    {
      return {
        ...state,
        packageSlots: []
      };
    }
    case ActionTypes.PRODUCT.TOGGLE_FETCHING_PACKAGE_SLOTS:
    {
      return {
        ...state,
        isPackageSlotFetching: !state.isPackageSlotFetching
      };
    }
    default:
    {
      return state;
    }
  }
}
