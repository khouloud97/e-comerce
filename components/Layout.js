/** @format */

import React from 'react';
import Navbar from './NavBar';
import Notify from './Notify';
import Modal from './Modal';
export function Layout({ children }) {
	return (
		<div className='container-fluid'>
			<div className='container'>
				<Navbar />
				<Notify />
				<Modal />
				{children}
				<br />
			</div>
		</div>
	);
}
export default Layout;
