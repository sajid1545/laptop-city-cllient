import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from './../../../Contexts/AuthProvider';
import './dashboard.css';

const Dashboard = () => {
	const { user } = useContext(AuthContext);

	return (
		<div className="flex  justify-center items-center min-h-screen dashboard">
			<Helmet>
				<title> Dashboard - Laptop City </title>
			</Helmet>
			<div className="hero min-h-screen ">
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="">
						<h1 className="text-5xl lg:text-7xl text-center font-bold">
							Welcome t<span className="animate-bounce">o</span> your dashboard <br />
							<span className="animate-pulse text-7xl italic">{user?.displayName}</span>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
