import React from 'react';
import { connect } from 'react-redux';
import { startEditIncome, startRemoveIncome} from '../actions/incomes';
import IncomeForm from './IncomeForm';
import { history } from '../routers/AppRouter.js';
import { setTab } from '../actions/tabs';

export class EditIncomePage extends React.Component {

	onSubmit = (income) => {
		this.props.startEditIncome(this.props.income.id, income);
		this.props.history.push('/');
		
	}

	onRemove = () => {
		this.props.startRemoveIncome({id: this.props.income.id});
		this.props.history.push('/');
	}

	render(){
		return (
			<div>
				<div className="page-header">
					<div className="container">
						<div className="page-header-content">
							<h1>Edit Income</h1>
						</div>
					</div>
				</div>
				
				<div className="container">
					<IncomeForm 
					income={this.props.income} 
					onSubmit={this.onSubmit}/>
					<div className="delete-section">
						<button className="danger-button" onClick={this.onRemove}>Delete Income</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		income: state.incomes.find((income) => income.id === props.match.params.id),
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		startEditIncome: (id, income) => dispatch(startEditIncome(id,income)),
		startRemoveIncome: (data) => dispatch(startRemoveIncome(data))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(EditIncomePage);