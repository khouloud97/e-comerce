/** @format */

import React from 'react';
import Navbar from './NavBar';
import Notify from './Notify';
export function Layout({ children }) {
	return (
		<div className='container'>
			{' '}
			<Navbar />
			<Notify />
			{children}
		</div>
	);
}
export default Layout;
