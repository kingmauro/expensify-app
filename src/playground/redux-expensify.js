import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ACTIONS GENERATORS

// ADD EXPENSE

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) =>({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

// REMOVE EXPENSE

const removeExpense = ({ id } = {}) =>({
	type: 'REMOVE_EXPENSE',
	id
});

// EDIT EXPENSE

const editExpense = ( id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});


// SET TEXT FILTER

const setTextFilter = ( text = '' ) => ({
	type: 'SET_TEXT_FILTER',
	text
});

// SORT_BY_DATE 

const sortByDate = () => ({
	type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT

const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
})

// SET_START_DATE

const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
})

// SET_END_DATE

const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});

// Reducers -------------

const expensesReducerDefaultState = []; // Default State

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter( ({ id }) => id !== action.id );
		case 'EDIT_EXPENSE':
			return state.map( (expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					}
				} else {
					return expense;
				}
			})
		default:
			return state;
			break;
	}
};

const filtersReducerDefaultState = {
	text: '' , 
	sortBy: 'date', 
	startDate: undefined, 
	endDate: undefined
}; // Default State

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
		case 'SORT_BY_DATE': 
			return {
				...state,
				sortBy: 'date'
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			};
		default:
			return state;
			break;
	}
};

// Get visible Expenses 

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

	return expenses.filter( (expense) => {

		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = text === "" ||  expense.description.toLowerCase().includes(text.toLowerCase());


		return textMatch && startDateMatch && endDateMatch;

	}).sort( (a, b) => {
		if (sortBy === 'date') {
			return a.createdAt > b.createdAt ? 1 : -1;
		} else if (sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}
	})

}

// Store Creation -------------

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
)



// Log State on Store -------------

store.subscribe( () => {
	const state = store.getState();
	const visibleState = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleState)
});



// Dispatching Actions -------------

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 54500, createdAt:1500}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 56500, createdAt:1600}));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, {description: "Pizza", amount: 15200, note:'Mi vieja mula ya no es lo que era'}));

// store.dispatch(setTextFilter('COFFEE'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1100));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1700));



// const demoState = {
// 	expenses: [{
// 		id: 'aslkdasd',
// 		description: 'January Rend',
// 		note: 'Last payment for that address',
// 		amount: 54500,
// 		createdAt: 0
// 	}],
// 	filters: {
// 		text: 'rent',
// 		sortBy: 'amount', // amount, date
// 		startDate: undefined,
// 		endDate: undefined
// 	}
// }

