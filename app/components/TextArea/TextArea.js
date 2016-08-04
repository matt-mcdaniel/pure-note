import React from 'react';
import CodeMirror from 'react-codemirror';
import debounce from 'lodash.debounce';
import './TextArea.scss';

class Content extends React.Component {
	constructor(props) {
		super(props);

		this.searchDebounce = debounce(this.searchDebounce.bind(this), 1000);
		this.handleDebounce = this.handleDebounce.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			focused: false,
			text: props.contents
		};
	}

	handleSelect(language) {
		this.props.selectLanguage(language);
	}

	handleDebounce() {
		console.log('thing', arguments);
	}

	searchDebounce(val) {
		this.props.save(val);
	}

	handleKey(cm, key, e) {
		this.searchDebounce(cm.getValue());
	}

	render() {
		const {activeIndex, languages} = this.props;

		const filename = languages.filter(l => l.active)[0].filename;

		return (
			<div className="code">
				<div className="code-mirror full">
					<CodeMirror
						ref="cm"
						className={this.state.focused ? 'active': ''}
						value={this.props.contents}
						options={{
							theme: 'mdn-like',
							lineNumbers: true,
							mode: filename,
							tabSize: 3,
						}}
					/>
				</div>
			</div>

		)
	}

	componentDidMount() {
		const cm = this.refs.cm.getCodeMirror();

		cm.on('keyHandled', this.handleKey);
	}
}

export default Content;