import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {selectLanguage} from '../../state/actions/languages';

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
	selectLanguage
})(Header);