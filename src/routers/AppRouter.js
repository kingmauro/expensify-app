import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/Dashboard';
import AddExpensePage from '../components/Create';
import AddIncomePage from '../components/CreateIncome';
import EditExpensePage from '../components/Edit';
import EditIncomePage from '../components/EditIncome';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
	
const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true}/>
				<PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
				<PrivateRoute path="/create" component={AddExpensePage}/>
				<PrivateRoute path="/createIncome" component={AddIncomePage}/>
				<PrivateRoute path="/edit/:id" component={EditExpensePage}/>
				<PrivateRoute path="/editIncome/:id" component={EditIncomePage}/>
				<Route path="/help" component={HelpPage}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	</Router>
);

export default AppRouter;