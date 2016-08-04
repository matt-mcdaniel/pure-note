import React from 'react';
import CodeSelectorItem from '../CodeSelectorItem/CodeSelectorItem';
import './CodeSelector.scss';

const CodeSelector = (props) => {
	const filename = props.languages.filter(p => p.active)[0].filename;

	return (
		<ul className="code-selector">
			{props.languages.map((language, i) =>
				<CodeSelectorItem
					key={Math.random()}
					language={language}
					active={language.filename === filename}
					handleClick={props.handleClick}
					index={i}
				/>
			)}
		</ul>
	)
}

export default CodeSelector;