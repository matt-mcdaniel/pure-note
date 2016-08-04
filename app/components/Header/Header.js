import React from 'react';
import CodeSelector from '../CodeSelector/CodeSelectorContainer';
import './Header.scss';

class Header extends React.Component {
	selectLanguage(index) {
		this.props.selectLanguage(index);
	}

	render() {
		return <header>
			<div className="header__inner">
				<div className="header__left">
					Notes
				</div>
				<CodeSelector
					handleClick={this.selectLanguage.bind(this)}
				/>
			</div>
		</header>
	}
}

export default Header;