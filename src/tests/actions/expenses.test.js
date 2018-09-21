import { addExpense, removeExpense, editExpense } from '../../actions/expenses'; 


test('should add expense', () => {
	const action = removeExpense({id: '123qwe'});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123qwe'
	});
});

test('should add expense', () => {
	const action = editExpense('123qwe', { note: 'Alguna nota'});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123qwe',
		updates: {
			note: 'Alguna nota'
		}
		
	})
})

test('should add expense with given values', () => {
	const data = {
		description: 'Rent',
		amount: 1450000,
		createdAt: 1000,
		note: 'Some detail'
	}
	const action = addExpense(data);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...data,
			id: expect.any(String)
		}
	})
})

test('should add expense with defaul values', () => {
	const data = {
		description: '',
		amount: 0,
		createdAt: 0,
		note: ''
	}
	const action = addExpense(data);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...data,
			id: expect.any(String)
		}
	})
})