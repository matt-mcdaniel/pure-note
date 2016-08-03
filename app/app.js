import React from 'react';
import {render} from 'react-dom';
import Container from './components/Container/Container';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import notes from './state/reducers/notes';
import './app.scss';

const reducers = combineReducers({
	notes
});

const store = createStore(reducers);

render(
	<Provider store={store}>
		<Container />
	</Provider>,
	document.getElementById('root')
);