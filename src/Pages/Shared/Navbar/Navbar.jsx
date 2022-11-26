import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/Images/logo.jpg';
import { AuthContext } from '../../../Contexts/AuthProvider';
import './navbar.css';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
	const { user, logOut, theme, handleToggleTheme } = useContext(AuthContext);

	const menuItems = (
		<React.Fragment>
			<li>
				<NavLink
					to="/"
					className={`font-medium rounded-xl  hover:underline duration-500 ${(isActive) =>
						isActive ? 'active' : undefined}`}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/blogs"
					className={`font-medium rounded-xl  hover:underline duration-500 ${(isActive) =>
						isActive ? 'active' : undefined}`}>
					Blogs
				</NavLink>
			</li>

			{user?.uid ? (
				<>
					<li>
						<NavLink
							to="/dashboard"
							className={`font-medium rounded-xl  hover:underline duration-500 ${(isActive) =>
								isActive ? 'active' : undefined}`}>
							Dashboard
						</NavLink>
					</li>
					<li>
						<button
							onClick={logOut}
							className="inline-block rounded border border-[#20609B]  px-8 py-3 text-sm font-medium    focus:outline-none focus:ring active:text-indigo-500">
							LogOut
						</button>
					</li>
				</>
			) : (
				<>
					<li>
						<NavLink
							className={`font-medium rounded-xl  hover:underline duration-500 ${(isActive) =>
								isActive ? 'active' : undefined}`}
							to="/login">
							Login
						</NavLink>
					</li>
				</>
			)}
			<div className="md:flex items-center cursor-pointer block mx-auto ">
				<span onClick={handleToggleTheme}>
					{theme ? (
						<SunIcon className="h-8 w-10 text-yellow-500" />
					) : (
						<MoonIcon className="h-8 w-10 text-slate-800" />
					)}
				</span>
			</div>
		</React.Fragment>
	);

	return (
		<div>
			<div className="navbar w-[95%] mx-auto pt-6 ">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-3">
							{menuItems}
						</ul>
					</div>

					<div>
						<Link to={'/'}>
							<img src={logo} alt="" className="cursor-pointer" />
						</Link>
					</div>
				</div>

				<div className="navbar-end hidden lg:flex items-center">
					<ul className="menu menu-horizontal  space-x-2 ">{menuItems}</ul>
				</div>
				<div className="lg:hidden navbar-end">
					<label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
