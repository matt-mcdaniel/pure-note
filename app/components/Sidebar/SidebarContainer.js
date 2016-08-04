import {connect} from 'react-redux';
import Sidebar from './Sidebar';

const mapStateToProps = (state) => {console.log(state); return {
	notes: state.notes.list,
	activeIndex: state.notes.activeIndex
}};

export default connect(mapStateToProps, null)(Sidebar);