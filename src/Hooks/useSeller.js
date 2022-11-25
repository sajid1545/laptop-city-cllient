import { useState } from 'react';

const useSeller = (email) => {
	const [isSeller, setIsSeller] = useState(false);
	const [isSellerLoading, setIsSellerLoading] = useState(true);

	fetch(`https://assignment-12-server-pi.vercel.app/user/seller/${email}`, {
		headers: {
			authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
		}
	})
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			setIsSeller(data.isSeller);
			setIsSellerLoading(false);
		});

	return [isSeller, isSellerLoading];
};

export default useSeller;
