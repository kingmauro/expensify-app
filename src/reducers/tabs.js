const tabsReducerDefaultState = 0; // Default State

export default (state = tabsReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TAB':
			console.log('tab setted (saved on this.props.tabs)', action.selectedTab);
			return action.selectedTab
			// return [...state, action.selectedTab];
		default:
			return state;
			break;
	}
};