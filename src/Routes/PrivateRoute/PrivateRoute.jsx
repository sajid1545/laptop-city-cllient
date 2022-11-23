import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../../Contexts/AuthProvider';
import LargeSpinner from './../../Pages/Shared/Spinners/LargeSpinner';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	const location = useLocation();

	if (loading) {
		return <LargeSpinner />;
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
