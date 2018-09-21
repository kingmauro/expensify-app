import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default expenses values', () => {
	const state = expensesReducer(undefined, { type: '@@INIT'});
	expect(state).toEqual([])
});

test('should remove expense from given id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([ expenses[0], expenses[2] ])
});

test('should not remove expense when no id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses)
});

test('should add an expense to array', () => {
	const newExpense = {
		id: 4,
		description: 'Santander',
		amount: 13200,
		createdAt: moment(0).add(5, 'days').valueOf(),
		note: ''
	};

	const action = {
		type: 'ADD_EXPENSE',
		...newExpense
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenses[3]])
});


test('should edit expense', () => {
	
	const updatedExpense = {
		description: 'Visa',
		amount: 15200,
		createdAt: moment(0).add(5, 'days').valueOf(),
		note: ''
	}	

	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			...updatedExpense
		}
	}

	const state = expensesReducer(expenses, action);
	expect(state[1]).toEqual({
		id: 2,
		description: 'Visa',
		amount: 15200,
		createdAt: moment(0).add(5, 'days').valueOf(),
		note: ''
	})
})


test('should not edit expense', () => {
	
	const updatedExpense = {
		description: 'Visa',
		amount: 15200,
		createdAt: moment(0).add(5, 'days').valueOf(),
		note: ''
	}	

	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			...updatedExpense
		}
	}

	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses)
})