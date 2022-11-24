import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import { AuthContext } from './../../Contexts/AuthProvider';
import LargeSpinner from './../../Pages/Shared/Spinners/LargeSpinner';

const AdminRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	const location = useLocation();

	const [isAdmin, isAdminLoading] = useAdmin(user?.email);

	if (loading || isAdminLoading) {
		return <LargeSpinner />;
	}

	if (user && isAdmin) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
