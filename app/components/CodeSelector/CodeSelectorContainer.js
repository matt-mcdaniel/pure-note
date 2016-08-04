import React from 'react';
import {connect} from 'react-redux';
import CodeSelector from './CodeSelector';

const mapStateToProps = ({languages}) => ({
	languages
});

export default connect(mapStateToProps, null)(CodeSelector);