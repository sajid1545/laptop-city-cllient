import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
			<ScrollRestoration />
		</div>
	);
};

export default Main;
