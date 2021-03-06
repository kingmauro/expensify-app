import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class IncomeListFilters extends React.Component {
	
	state = {
		calendarFocused: null
	}
	onDateChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	}
	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	}
	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value)
	}
	onSortChange = (e) => {
		switch (e.target.value) {
			case 'amount':
				this.props.sortByAmount()
				break;
			default:
				this.props.sortByDate()
				break;
		}
	}

	render(){
		return(
			<div className="container">
				<div className="input-group">
					<div className="input-group-item">
						<input className="text-input" type="text" value={this.props.filters.text} placeholder="Text Filter" onChange={this.onTextChange} />
					</div>
					<div className="input-group-item">
						<select className="select-input" value={this.props.filters.sortBy} onChange={this.onSortChange}>
							<option value="date">Date</option>
							<option value="amount">Amount</option>
						</select>
					</div>
					<div className="input-group-item">
						<DateRangePicker
							startDate={this.props.filters.startDate}
							endDate={this.props.filters.endDate}
							onDatesChange={this.onDateChange}
							focusedInput={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							showClearDates={true}
							numberOfMonths={1}
							isOutsideRange={()=> false}
						/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount()),
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(IncomeListFilters);