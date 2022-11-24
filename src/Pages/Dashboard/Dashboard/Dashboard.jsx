import React, { useContext } from 'react';
import { AuthContext } from './../../../Contexts/AuthProvider';
import './dashboard.css';

const Dashboard = () => {
	const { user } = useContext(AuthContext);

	return (
		<div className="flex ml-10 justify-center items-center min-h-screen dashboard">
			<div className="hero min-h-screen ">
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="">
						<h1 className="text-7xl text-center font-bold">
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
