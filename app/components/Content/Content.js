import React from 'react';
import Sidebar from '../Sidebar/SidebarContainer';
import TextArea from '../TextArea/TextAreaContainer';
import './Content.scss';

const Content = (props) => (
	<div className="content">
		<div className="content__inner">
			<Sidebar />
			<TextArea />
		</div>
	</div>
)

export default Content;