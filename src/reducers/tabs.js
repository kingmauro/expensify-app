const tabsReducerDefaultState = 0; // Default State

export default (state = tabsReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TAB':
			return action.selectedTab
			// return [...state, action.selectedTab];
		default:
			return state;
			break;
	}
};