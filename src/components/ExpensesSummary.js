import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expensesTotal';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {

	render(){
		return (
			<div>
			<p>Cantidad de Gastos: {this.props.expenses.length}</p>
			<p>Total: {numeral(getExpensesTotal(this.props.expenses) / 100).format('$0,0.00')}</p>	
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