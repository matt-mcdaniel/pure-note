import React from 'react';
import CodeMirror from 'react-codemirror';

import styles from './_styles';
import './_code.scss';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/javascript/javascript';

const languages = [
	{
		name: 'JavaScript',
		filename: 'javascript',
		active: false
	},
	{
		name: 'JSX',
		filename: 'jsx',
		active: false
	}
];

class Content extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			focused: false,
			language: languages[0]
		};
	}

	handleSelect(language) {
		this.setState({
			language
		})
	}

	render() {
		return (
			<div className="code">
				<ul className="code-chooser">
				{languages.map(function(language, i) {
					let activeName = this.state.language.filename;
					let className = activeName === language.filename ? ' active' : '';

					return (
							<li key={i} onClick={() => this.handleSelect(language)} className="code-chooser__option">
								<div className={'code-chooser__button' + className}>
									<div className="code-chooser__text">
											{language.name}
									</div>
								</div>
							</li>
					)
				}.bind(this))}
				</ul>
				<div className="code-mirror full">
					<CodeMirror
						className={this.state.focused ? 'active': ''}
						options={{
							theme: 'mdn-like',
							lineNumbers: true,
							mode: this.state.language.filename,
							tabSize: 3,
						}}
					/>
				</div>
			</div>

		)
	}
}

export default Content;