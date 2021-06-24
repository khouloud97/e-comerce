/** @format */

import React from 'react';
import Navbar from './NavBar';
export function Layout({ children }) {
	return (
		<div className='container'>
			{' '}
			<Navbar />
			{children}
		</div>
	);
}
export default Layout;
