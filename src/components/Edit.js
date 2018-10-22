import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {

	onSubmit = (expense) => {
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	}

	onRemove = () => {
		this.props.startRemoveExpense({id: this.props.expense.id});
		this.props.history.push('/');
	}

	render(){
		return (
			<div>
				<div className="page-header">
					<div className="container">
						<div className="page-header-content">
							<h1>Editar</h1>
						</div>
					</div>
				</div>
				
				<div className="container">
					<ExpenseForm 
					expense={this.props.expense} 
					onSubmit={this.onSubmit}/>
					<div className="delete-section">
						<button className="danger-button" onClick={this.onRemove}>Eliminar</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		startEditExpense: (id, expense) => dispatch(startEditExpense(id,expense)),
		startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);