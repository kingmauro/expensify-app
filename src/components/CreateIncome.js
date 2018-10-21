import React from 'react';
import { connect } from 'react-redux';
import { startAddIncome } from '../actions/incomes';
import getVisibleExpenses from '../selectors/expenses';
import IncomeForm from './IncomeForm';

export class AddIncomePage extends React.Component {

	onSubmit = (income) => {
		// props.dispatch(addExpense(expense));
		this.props.startAddIncome(income);
		this.props.history.push('/')
	}

	render(){
		return (
			<div>
					<div className="page-header">
						<div className="container">
							<div className="page-header-content">
								<h1>Create Income</h1>
							</div>
						</div>
					</div>
				<IncomeForm onSubmit={this.onSubmit} />
			</div>
		);
	};
};

const mapDispatchToProps = (dispatch) => ({
		startAddIncome: (income) => dispatch(startAddIncome(income)) 
});

export default connect(undefined, mapDispatchToProps)(AddIncomePage);