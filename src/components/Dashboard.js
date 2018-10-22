import React from 'react';
import ExpenseList from './ExpenseList'
import IncomeList from './IncomeList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import IncomesSummary from './IncomesSummary';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { history } from '../routers/AppRouter.js';
import { connect } from 'react-redux';
import { setTab } from '../actions/tabs';

class ExpenseDashboardPage extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			selectedTab: 0
		}
		this.onTabChange = this.onTabChange.bind(this)
	}

	componentDidUpdate(){
		console.log('mounted')
		console.log('estado actual de state redux', this.props.tabs)
		console.log('estado actual de state local', this.state.selectedTab)
		this.setState( () => {
			return {
				selectedTab: this.props.tabs
			}
		})
	}

	componentDidUpdate(){
		console.log('updated')
		console.log('estado actual de state redux', this.props.tabs)
		console.log('estado actual de state local', this.state.selectedTab)
	}

	onTabChange(index){
		this.props.setTab(index);
		this.setState(() => {
			return {
				selectedTab: index
			}
		})
	}


	render(){
		return(
			<div>
			{this.state.selectedTab === 0 ? <ExpensesSummary /> : <IncomesSummary />}
			<div className="container">
				<Tabs className="dashboard-tabs" selectedIndex={this.state.selectedTab} onSelect={this.onTabChange}>
				    <TabList>
				      <Tab>Gastos</Tab>
				      <Tab>Ingresos</Tab>
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
	)};
};

const mapStateToProps = (state, props) => {
	return {tabs: state.tabs}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		setTab: (selectedTab) => dispatch(setTab(selectedTab)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDashboardPage);