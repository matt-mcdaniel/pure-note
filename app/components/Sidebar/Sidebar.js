import React from 'react';
import './Sidebar.scss';

const Sidebar = (props) => {
	return (
		<div className="sidebar">
			{props.notes.map((n, i) => {
				const className = i === props.activeIndex ? 'note active' : 'note';

				return <div className={className} key={Math.random()}>{n.name}</div>
			})}
		</div>
	)
}

export default Sidebar;