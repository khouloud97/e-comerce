/** @format */

import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
import Cookie from 'js-cookie';

function NavBar() {
	const router = useRouter();
	const { state, dispatch } = useContext(DataContext);
	const { auth, cart } = state;

	const isActive = (r) => {
		if (r === router.pathname) {
			return ' active';
		} else {
			return '';
		}
	};

	const handleLogout = () => {
		Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' });
		localStorage.removeItem('firstLogin');
		dispatch({ type: 'AUTH', payload: {} });
		dispatch({ type: 'NOTIFY', payload: { success: 'Logged out!' } });
		return router.push('/');
	};

	const adminRouter = () => {
		return (
			<>
				<Link href='/users'>
					<a className='dropdown-item'>Users</a>
				</Link>
				<Link href='/create'>
					<a className='dropdown-item'>Products</a>
				</Link>
				<Link href='/categories'>
					<a className='dropdown-item'>Categories</a>
				</Link>
			</>
		);
	};

	const loggedRouter = () => {
		return (
			<li className='nav-item dropdown'>
				<a
					className='nav-link dropdown-toggle'
					href='#'
					id='navbarDropdownMenuLink'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'>
					<img
						src={auth.user.avatar}
						alt={auth.user.avatar}
						style={{
							borderRadius: '50%',
							width: '30px',
							height: '30px',
							transform: 'translateY(-3px)',
							marginRight: '3px',
						}}
					/>{' '}
					{auth.user.name}
				</a>

				<div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
					<Link href='/profile'>
						<a className='dropdown-item'>Profile</a>
					</Link>
					{auth.user.role === 'admin' && adminRouter()}
					<div className='dropdown-divider'></div>
					<button className='dropdown-item' onClick={handleLogout}>
						Logout
					</button>
				</div>
			</li>
		);
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<a className='navbar-brand' href='/home'>
				<img
					src='https://scontent.xx.fbcdn.net/v/t1.15752-9/204333894_539616237206194_3765289483872452193_n.png?_nc_cat=102&ccb=1-3&_nc_sid=aee45a&_nc_ohc=6SSfYYxjmu4AX-BcMP9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=bb156eaa6a8b9f7929dfa2b6588b701f&oe=60D990E2'
					width='180px'></img>
			</a>{' '}
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNavDropdown'
				aria-controls='navbarNavDropdown'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarNavDropdown'>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<button type='button' class='btn-graddd'>
							<a className='nav-link active' aria-current='page' href='/home'>
								<b>Service</b>
							</a>{' '}
						</button>
					</li>
					<li className='nav-item'>
						<button type='button' class='btn-graddd'>
							<a
								className='nav-link active'
								aria-current='page'
								href='/localisation'>
								<b>Localisation </b>
							</a>{' '}
						</button>
					</li>
					<li className='nav-item'>
						<button type='button' class='btn-graddd'>
							<a
								className='nav-link active'
								aria-current='page'
								href='/?search=all'>
								<b> Boutique </b>{' '}
							</a>{' '}
						</button>
					</li>
				</ul>
			</div>
			<div
				className='collapse navbar-collapse justify-content-end'
				id='navbarNavDropdown'>
				<ul className='navbar-nav p-1'>
					<li className='nav-item'>
						<Link href='/cart'>
							<a className={'nav-link' + isActive('/cart')}>
								<i
									className='fas fa-shopping-cart position-relative'
									aria-hidden='true'>
									<span
										className='position-absolute'
										style={{
											padding: '3px 6px',
											background: '#ed143dc2',
											borderRadius: '50%',
											top: '-10px',
											right: '-10px',
											color: 'white',
											fontSize: '14px',
										}}>
										{cart.length}
									</span>
								</i>{' '}
								Cart
							</a>
						</Link>
					</li>
					{Object.keys(auth).length === 0 ? (
						<li className='nav-item'>
							<Link href='/signin'>
								<a className={'nav-link' + isActive('/signin')}>
									<i className='fas fa-user' aria-hidden='true'></i> Sign in
								</a>
							</Link>
						</li>
					) : (
						loggedRouter()
					)}
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
/** @format

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Home from '../pages/home';
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
				<a className='navbar-brand' href='/home'>
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
 								<a href'/?search=all'>
									{' '}
									<i
										fas
										fa-shopping-cart
										position-relative
										className=''
										aria-hidden='true'></i>
									Boutique
								</a>
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
 */
