'use strict';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

//Custom defined reducers
import user from './user';
import product from './product';


export default {
  routing,
  user,
  product
};
