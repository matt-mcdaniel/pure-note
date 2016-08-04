import React from 'react';
import styles from './_app.scss';
import Header from '../Header/HeaderContainer';
import Content from '../Content/Content';

const App = (props) => {
	return (
		<div className="app">
			<Header />
			<Content />
		</div>
	)
}

export default App;