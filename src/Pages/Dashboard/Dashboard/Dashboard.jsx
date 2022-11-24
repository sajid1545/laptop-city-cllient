import React, { useContext } from 'react';
import { AuthContext } from './../../../Contexts/AuthProvider';

const Dashboard = () => {
	const { user } = useContext(AuthContext);

	return (
		<div className="flex justify-center items-center min-h-screen">
			<h1 className="text-5xl text-center font-bold">
				Welcome to your dashboard <br />
				<span className="animate-pulse text-7xl">{user?.displayName}</span>
			</h1>
		</div>
	);
};

export default Dashboard;
