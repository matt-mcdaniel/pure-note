import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import notes from './state/reducers/notes';
import languages from './state/reducers/languages';
import createLogger from 'redux-logger';
import './index.scss';

const reducers = combineReducers({
	languages,
	notes
});

const store = createStore(
	reducers,
	applyMiddleware(createLogger({collapsed: true}))
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);