import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses } from '../../actions/expenses'; 
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach( (done) => {
	const expensesData = {};
	expenses.forEach( ({id, description, note, amount, createdAt }) => {
		expensesData[id] = { description, note, amount, createdAt }
	});
	database.ref('expenses').set(expensesData).then( () => done());
});

test('should remove expense', () => {
	const action = removeExpense({id: '123qwe'});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123qwe'
	});
});

test('should edit expense', () => {
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
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	})
})

test('should add expense to firebase and store', (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: 'Mouse',
		amount: 3000,
		note: 'This is vlaskalg',
		createdAt: 1000
	}
	store.dispatch(startAddExpense(expenseData)).then( () => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});
		database.ref(`expenses/${actions[0].expense.id}`).once('value').then( (snapshot) => {
			expect(snapshot.val()).toEqual(expenseData);
			done();
		});
	});
});

test('should add expense to firebase and store with defaults', (done) => {
	const store = createMockStore({});
	const expenseDefaults = {
		description: '',
		amount: 0,
		note: '',
		createdAt: 0
	}
	store.dispatch(startAddExpense({})).then( () => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseDefaults
			}
		});
		database.ref(`expenses/${actions[0].expense.id}`).once('value').then( (snapshot) => {
			expect(snapshot.val()).toEqual(expenseDefaults);
			done();
		});
	});
});

test('should setup set ecxense action object with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses
	})
});

// test('should fetch expenses from firebase', (done) => {
// 	const store = createMockStore({});
// 	store.dispatch(startSetExpenses()).then(() => {
// 		const action = store.getActions();
// 		expect(actions[0]).toEqual({
// 			type: 'SET_EXPENSES',
// 			expenses
// 		});
// 		done();
// 	});
// });