import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../../Contexts/AuthProvider';
import LargeSpinner from './../../Pages/Shared/Spinners/LargeSpinner';
import useSeller from './../../Hooks/useSeller';

const SellerRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	const location = useLocation();

	const [isSeller, isSellerLoading] = useSeller(user?.email);

	if (loading || isSellerLoading) {
		return <LargeSpinner />;
	}

	if (user && isSeller) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;
