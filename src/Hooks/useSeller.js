import { useState } from 'react';

const useSeller = (email) => {
	const [isSeller, setIsSeller] = useState(false);
	const [isSellerLoading, setIsSellerLoading] = useState(true);

	fetch(`http://localhost:5000/user/seller/${email}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			setIsSeller(data.isSeller);
			setIsSellerLoading(false);
		});

	return [isSeller, isSellerLoading];
};

export default useSeller;
