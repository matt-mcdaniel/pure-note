import React from 'react';
import styles from './styles';
import Sidebar from '../Sidebar/SidebarContainer';
import Content from '../Content/ContentContainer';

const Root = (props) => {
	return (
		<div style={styles}>
			<Sidebar />
			<Content />
		</div>
	)
}

export default Root;