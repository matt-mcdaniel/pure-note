import React from 'react';
import {connect} from 'react-redux';
import TextArea from './TextArea';
import {save} from '../../state/actions/notes';
import {selectLanguage} from '../../state/actions/languages';

const mapStateToProps = (state) => ({
	activeIndex: state.notes.activeIndex,
	text: state.notes.list[state.notes.activeIndex].contents,
	languages: state.languages
});

export default connect(mapStateToProps, {
	save,
	selectLanguage
})(TextArea);