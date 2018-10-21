import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const IncomeListItem = (props) => (
		<Link className="expense-list-item" to={`/editIncome/${props.id}`}>
			<div>
				<h3>{props.description}</h3>
				<span>{moment(props.createdAt).format('Do MMMM YYYY')}</span>
			</div>
	     	<h3>{numeral(props.amount / 100).format('$0,0.00')}</h3>
	    </Link>
);

export default IncomeListItem;