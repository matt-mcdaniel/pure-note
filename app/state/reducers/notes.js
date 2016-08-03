const initialState = {
	activeIndex: 0,
	list: [{
		name: 'Untitled',
		contents: 'var'
	}]
}

const notes = (state = initialState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}

export default notes;