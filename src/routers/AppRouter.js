import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header.js';
import ExpenseDashboardPage from '../components/Dashboard.js';
import AddExpensePage from '../components/Create.js';
import EditExpensePage from '../components/Edit.js';
import HelpPage from '../components/Help.js';
import NotFoundPage from '../components/NotFound.js';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={LoginPage} exact={true}/>
				<PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
				<PrivateRoute path="/create" component={AddExpensePage}/>
				<PrivateRoute path="/edit/:id" component={EditExpensePage}/>
				<Route path="/help" component={HelpPage}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	</Router>
);

export default AppRouter;