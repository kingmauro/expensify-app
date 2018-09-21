import { createStore } from 'redux';
	
	// Store - Logic

	const countReducer = (state = {count: 0}, action) => {
		switch (action.type) {
			case 'INCREMENT':
				return {
					count: state.count + action.incrementBy
				}
				break;
			case 'DECREMENT':
				return {
					count: state.count - action.decrementBy
				}
				break;
			case 'RESET':
				return {
					count: 0
				}
				break;
			case 'SET':
				return{
					count: action.count
				}
			case 'DIVIDE':
				return{
					count: state.count / action.divideBy
				}
			case 'MULTIPLY':
				return{
					count: state.count * action.multiplyBy
				}
			default:
				return state;
				break;
		}
	};

	const store = createStore(countReducer)


	// Logea todos los cambios cada vez que despacho una acción

	store.subscribe( () => {
		console.log(store.getState());
	});



	// Logica de cada despacho 
	
	const incrementCount = ({incrementBy = 1} = {}) => ({
		type: 'INCREMENT',
		incrementBy
	});

	const decrementCount = ({decrementBy = 1} = {}) => ({
		type: 'DECREMENT',
		decrementBy
	})

	const resetCount = () => ({
		type: 'RESET'
	});

	const setCount = ({count = 1} = {}) => ({
		type: 'SET',
		count
	});

	const divideCount = ({divideBy = 1} = {}) => ({
		type: 'DIVIDE',
		divideBy
	})

	const multiplyCount = ({multiplyBy = 2} = {}) => {
		return{
			type: 'MULTIPLY',
			multiplyBy: multiplyBy
		}
		
	}



// Lanzar una acción

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount( { decrementBy: 10 }));

store.dispatch(setCount({count: 110}));

store.dispatch(divideCount({divideBy: 2}));

store.dispatch(multiplyCount({ multiplyBy: 100 }))

