import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import incomesReducer from '../reducers/incomes';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import tabsReducer from '../reducers/tabs';
// Store Creation -------------

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			incomes: incomesReducer,
			filters: filtersReducer,
			tabs: tabsReducer,
			auth: authReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	)

	return store;

};


