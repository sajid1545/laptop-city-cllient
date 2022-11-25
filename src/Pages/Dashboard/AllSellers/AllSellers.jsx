import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LargeSpinner from '../../Shared/Spinners/LargeSpinner';
import { toast } from 'react-hot-toast';

const AllSellers = () => {
	const {
		data: allSellers = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['allSellers'],
		queryFn: () =>
			fetch('http://localhost:5000/all-sellers', {
				headers: {
					authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
				},
			}).then((res) => res.json()),
	});

	if (isLoading) {
		return <LargeSpinner />;
	}

	// verify user
	const handleVerifyUser = (user) => {
		console.log(user);
		fetch(`http://localhost:5000/verify-user/${user._id}`, {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				refetch();
				toast.success(`${user.name} verified successfully`);
			});
	};

	return (
		<div>
			<h1 className="text-4xl text-center font-bold">All Sellers</h1>
			<div className="overflow-x-auto w-[85%] mx-auto mt-5">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Verify Seller</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{allSellers.map((seller, i) => (
							<tr key={seller._id}>
								<th>{i + 1}</th>
								<td>{seller.name}</td>
								<td>{seller.email}</td>
								<td>
									{!seller.verified && (
										<button
											onClick={() => handleVerifyUser(seller)}
											className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
											Verify
										</button>
									)}

									{seller.verified && <p className="text-xl font-bold text-green-700">Verified</p>}
								</td>

								<td>
									<button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllSellers;
