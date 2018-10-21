import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getVisibleIncomes from '../selectors/incomes';
import getIncomesTotal from '../selectors/incomesTotal';
import numeral from 'numeral';

export class IncomesSummary extends React.Component {

	render(){
		return (
			<div className="page-header">
				<div className="container">
					<div className="page-header-content">
						<div>
							<Link className="primary-button" to="/create">Add Expense</Link>
							<span> </span>
							<Link className="primary-button" to="/createIncome">Add Income</Link>
						</div>
						<h1><span>{this.props.incomes.length}</span> ingresos - Total: <span>{numeral(getIncomesTotal(this.props.incomes) / 100).format('$0,0.00')}</span></h1>
					</div>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		incomes: getVisibleIncomes(state.incomes, state.filters)
	}
}

export default connect(mapStateToProps)(IncomesSummary);