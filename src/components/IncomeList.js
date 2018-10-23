import React from 'react';
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';
import getVisibleIncomes from '../selectors/incomes';
import { Link } from 'react-router-dom';


export const IncomeList = (props) => (
	<div className="container">
		
		{
			props.incomes.length === 0 ? (
				<p></p>
			) : (
				<div className="expense-list-header">
					<div>Ingreso</div>
					<div>Valor</div>
				</div>
			)

		}

		
		
	{
		props.incomes.length === 0 ? (
			<div className="no-expenses form-error">
				<span>No hay ingresos para mostrar.</span>
				<Link className="primary-button" to="/createIncome">Nuevo Ingreso</Link>
			</div>
		) : (
			props.incomes.map( (income) => <IncomeListItem key={income.id} {...income} /> )
		)
	}		
	</div>
);

const mapStateToProps = (state) => {
	return {
		incomes: getVisibleIncomes(state.incomes, state.filters)
	}
}

export default connect(mapStateToProps)(IncomeList);