/*eslint-disable*/
import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
const createHistory = require("history").createBrowserHistory;
import { routerReducer, routerMiddleware } from 'react-router-redux';
import {thunk} from 'redux-thunk';
import reducers from './reducers';

const history = createHistory();

const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware];
const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const store = createStore(
	combineReducers({
		...reducers,
		router: routerReducer
	}),
	composeEnhancers(applyMiddleware(...middlewares))
);

export { store, history };
