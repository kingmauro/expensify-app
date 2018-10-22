import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';


export const ExpenseList = (props) => (
	<div className="container item-list">
		
		{
			props.expenses.length === 0 ? (
				<p></p>
			) : (
				<div className="expense-list-header">
					<div>Gasto</div>
					<div>Valor</div>
				</div>
			)

		}

		
		
	{
		props.expenses.length === 0 ? (
			<div className="no-expenses form-error">
				<span>No expenses to show. Lets add a new one!</span>
				<Link className="primary-button" to="/create">Add Expense</Link>
			</div>
		) : (
			props.expenses.map( (expense) => <ExpenseListItem key={expense.id} {...expense} /> )
		)
	}		
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: getVisibleExpenses(state.expenses, state.filters)
	}
}

export default connect(mapStateToProps)(ExpenseList);