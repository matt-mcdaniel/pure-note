const initialState = {
	activeIndex: 0,
	list: [{
		name: 'Untitled',
		contents: 'var'
	}]
}

const notes = (state = initialState, action) => {
	switch(action.type) {
		case 'SAVE_NOTE':
			return Object.assign({}, state, {
				list: [
					...state.list.slice(0, state.activeIndex),
					{
						name: state.list[state.activeIndex].name,
						contents: action.contents
					},
					...state.list.slice(state.activeIndex + 1)
				]
			});
		default:
			return state;
	}
}

export default notes;