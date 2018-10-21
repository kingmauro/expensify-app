const incomesReducerDefaultState = []; // Default State

export default (state = incomesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_INCOME':
			return [...state, action.income];
		case 'REMOVE_INCOME':
			return state.filter( ({ id }) => id !== action.id );
		case 'EDIT_INCOME':
			return state.map( (income) => {
				if (income.id === action.id) {
					return {
						...income,
						...action.updates
					}
				} else {
					return income;
				}
			});
		case 'START_SET_INCOMES':
			console.log('iniciando set incomes');
		case 'SET_INCOMES':
			return action.incomes;
		default:
			return state;
			break;
	}
};