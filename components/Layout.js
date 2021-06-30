/** @format */

import React from 'react';
import Navbar from './NavBar';
import Notify from './Notify';
import Modal from './Modal';
import Home from '../pages/home';
export function Layout({ children }) {
	return (
		<div className='container-fluid'>
			<div classNameName='container'>
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
