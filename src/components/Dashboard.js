import React from 'react';
import ExpenseList from './ExpenseList'
import IncomeList from './IncomeList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ExpenseDashboardPage = () => (
	<div>
		<ExpensesSummary />
		<div className="container">
			<Tabs className="dashboard-tabs">
			    <TabList>
			      <Tab>Expenses</Tab>
			      <Tab>Incomes</Tab>
			    </TabList>
			
			    <TabPanel>
			      	<ExpenseListFilters />
					<ExpenseList />
			    </TabPanel>
			    <TabPanel>
			      	<ExpenseListFilters />
					<IncomeList />
			    </TabPanel>
			</Tabs>
		</div>
	</div>
);

export default ExpenseDashboardPage;