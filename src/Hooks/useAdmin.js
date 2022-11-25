import { useState } from 'react';

const useAdmin = (email) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [isAdminLoading, setIsAdminLoading] = useState(true);

	fetch(`https://assignment-12-server-pi.vercel.app/user/admin/${email}`, {
		headers: {
			authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			setIsAdmin(data.isAdmin);
			setIsAdminLoading(false);
		});

	return [isAdmin, isAdminLoading];
};

export default useAdmin;
