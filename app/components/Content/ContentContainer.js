import React from 'react';
import {connect} from 'react-redux';
import Content from './Content';

const mapStateToProps = (state) => ({
	activeIndex: state.notes.activeIndex
});

export default connect(mapStateToProps, null)(Content);