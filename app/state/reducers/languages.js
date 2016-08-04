import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/markdown/markdown';

const initialState = [
	{
		name: 'Markdown',
		filename: 'markdown',
		active: true
	},
	{
		name: 'JavaScript',
		filename: 'jsx',
		active: false
	}
];

const languages = (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_LANGUAGE':
			const index = action.index;

			return [
				...state
					.map((s, i) => {
						return i === index
							? Object.assign(s, {active: true})
							: Object.assign(s, {active: false})
					})
			]
		default:
			return state;
	}
}

export default languages;