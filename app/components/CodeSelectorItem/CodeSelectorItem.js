import React from 'react';
import './CodeSelectorItem.scss';

const CodeSelectorItem = (props) => {
	return (
		<li onClick={() => props.handleClick(props.index)} className="code-selector__item">
			<div className={props.active ? 'code-selector__item active' : 'code-selector__item'}>
				<div className="code-selector__item">
					{props.language.name}
				</div>
			</div>
		</li>
	)
}

export default CodeSelectorItem;