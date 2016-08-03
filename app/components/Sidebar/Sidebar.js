import React from 'react';
import './_sidebar.scss';

const Sidebar = (props) => {
	return (
		<div className="note-container">
			{props.notes.map((n, i) => {
				const className = i === props.activeIndex ? 'note active' : 'note';

				return <div className={className} key={Math.random()}>{n.name}</div>
			})}
		</div>
	)
}

export default Sidebar;