import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expensesTotal';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {

	render(){
		return (
			<div className="page-header">
				<div className="container">
					<div className="page-header-content">
						<Link className="primary-button" to="/create">Add Expense</Link>
						<h1><span>{this.props.expenses.length}</span> gastos - Total: <span>{numeral(getExpensesTotal(this.props.expenses) / 100).format('$0,0.00')}</span></h1>
					</div>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		expenses: getVisibleExpenses(state.expenses, state.filters)
	}
}

export default connect(mapStateToProps)(ExpensesSummary);