import moment from 'moment';

export default [{
	id: 1,
	 description: 'Rent',
	amount: 100,
	createdAt: 0,
	note: ''
},{
	id: 2,
	description: 'Cable',
	amount: 200,
	createdAt: moment(0).subtract(4, 'days').valueOf(),
	note: ''
},{
	id: 3,
	description: 'Internet',
	amount: 300,
	createdAt: moment(0).add(4, 'days').valueOf(),
	note: ''
}];