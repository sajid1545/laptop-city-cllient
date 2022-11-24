import { useState } from 'react';

const useAdmin = (email) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [isAdminLoading, setIsAdminLoading] = useState(true);

	fetch(`http://localhost:5000/user/admin/${email}`)
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			setIsAdmin(data.isAdmin);
			setIsAdminLoading(false);
		});

	return [isAdmin, isAdminLoading];
};

export default useAdmin;
