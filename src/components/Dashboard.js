import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
	<div>
		<h1>This is dashboard Page</h1>
		<ExpenseListFilters />
		<ExpensesSummary />
		<ExpenseList />
	</div>
);

export default ExpenseDashboardPage;