import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {

	onSubmit = (expense) => {
		// props.dispatch(addExpense(expense));
		this.props.startAddExpense(expense);
		this.props.history.push('/')
	}

	render(){
		return (
			<div>
					<div className="page-header">
						<div className="container">
							<div className="page-header-content">
								<h1>Create Expense</h1>
							</div>
						</div>
					</div>
				<ExpenseForm onSubmit={this.onSubmit} />
			</div>
		);
	};
};

const mapDispatchToProps = (dispatch) => ({
		startAddExpense: (expense) => dispatch(startAddExpense(expense)) 
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);