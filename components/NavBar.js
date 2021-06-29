/** @format */

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Navbar(props) {
	const router = useRouter();
	const isActive = (r) => {
		if (r === router.pathname) {
			return ' active';
		} else {
			return '';
		}
	};
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<link></link>
				<a className='navbar-brand' href='/'>
					<img
						src='https://scontent.xx.fbcdn.net/v/t1.15752-9/204333894_539616237206194_3765289483872452193_n.png?_nc_cat=102&ccb=1-3&_nc_sid=aee45a&_nc_ohc=6SSfYYxjmu4AX-BcMP9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=bb156eaa6a8b9f7929dfa2b6588b701f&oe=60D990E2'
						width='150px'></img>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavDropdown'
					aria-controls='navbarNavDropdown'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavDropdown'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page' href='/home'>
								Service
							</a>
						</li>
						<li className='nav-item'>
							<Link href='?search=all'>
								<a className='nav-link' href='./'>
									Boutique
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Localisation{' '}
							</a>
						</li>
					</ul>
					<div
						className='collapse navbar-collapse justify-content-end'
						id='navbarNavDropdown'>
						<li className='nav-item'>
							<Link href='/cart'>
								<a className={'nav-lik' + isActive('/cart')}>
									{' '}
									<i
										className='fas fa-shopping-cart position-relative'
										aria-hidden='true'></i>
									Carte{' '}
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/signin'>
								<a className={'nav-lik' + isActive('/signin')}>
									{' '}
									<i className='fas fa-user' aria-hidden='true'></i> Sign in
								</a>
							</Link>
						</li>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
