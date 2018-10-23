import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { startSetIncomes } from './actions/incomes';
import { login, logout } from './actions/auth';
import { removeExpense } from './actions/expenses';
import { removeIncome } from './actions/incomes';
import getVisibleExpenses from './selectors/expenses';
import getVisibleIncomes from './selectors/incomes';
import { firebase } from './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-tabs/style/react-tabs.css';

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered){
		ReactDOM.render(jsx, document.getElementById('app'));
		hasRendered = true;
	}
};

ReactDOM.render(<div className="loading-container">
	<div>
		<img src="images/loader.gif" alt="" width="50"/>
	</div>
</div>, document.getElementById('app'));



firebase.auth().onAuthStateChanged( (user) => {
	if (user) {
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {
			renderApp();
			if(history.location.pathname === '/') {
				history.push('/dashboard');
			}
		});
		store.dispatch(startSetIncomes()).then(() => {
			// renderApp();
			if(history.location.pathname === '/') {
				history.push('/dashboard');
			}
		});
	} else {
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});