import * as ActionTypes from '../constants/actions';
import * as ProductApis from '../apis/product';

export function getPackageList() {
  return async (dispatch) => {
    dispatch(toggleFetchingPackageList());
    const response = await ProductApis.getPackageList();
    if (response.success) {
      dispatch(setPackageList(response.packageList));
    }
    dispatch(toggleFetchingPackageList());
  };
}

export function getPackageSlots() {
  return async (dispatch) => {
    dispatch(toggleFetchingPackageSlots());
    const response = await ProductApis.getPackageSlots();
    if (response.success) {
      dispatch(setPackageSlots(response.packageSlots));
    }
    dispatch(toggleFetchingPackageSlots());
  };
}

export function buyPackage(body) {
  return async (dispatch) => {
    
  };
}

function toggleFetchingPackageList() {
  return {
    type: ActionTypes.PRODUCT.TOGGLE_FETCHING_PACKAGE_LIST
  };
}

function setPackageList(packageList) {
  return {
    type: ActionTypes.PRODUCT.SET_PACKAGE_LIST,
    packageList
  };
}

function unsetPackageList() {
  return {
    type: ActionTypes.PRODUCT.UNSET_PACKAGE_LIST
  };
}



function toggleFetchingPackageSlots() {
  return {
    type: ActionTypes.PRODUCT.TOGGLE_FETCHING_PACKAGE_SLOTS
  };
}

function setPackageSlots(packageSlots) {
  return {
    type: ActionTypes.PRODUCT.SET_PACKAGE_SLOTS,
    packageSlots
  };
}

function unsetPackageSlots() {
  return {
    type: ActionTypes.PRODUCT.UNSET_PACKAGE_SLOTS
  };
}