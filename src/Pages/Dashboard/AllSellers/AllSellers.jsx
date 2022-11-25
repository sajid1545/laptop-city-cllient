import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import LargeSpinner from '../../Shared/Spinners/LargeSpinner';

const AllSellers = () => {
	const {
		data: allSellers = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['allSellers'],
		queryFn: () =>
			fetch('https://assignment-12-server-pi.vercel.app/all-sellers', {
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
		fetch(`https://assignment-12-server-pi.vercel.app/verify-user/${user._id}`, {
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

	// handle deleteUser
	const handleDeleteUser = (user) => {
		fetch(`https://assignment-12-server-pi.vercel.app/all-sellers/${user._id}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					refetch();
					toast.success(`${user.name} deleted successfully}`);
				}
			});
	};

	return (
		<div>
			<Helmet>
				<title> All Sellers - Laptop City </title>
			</Helmet>
			<h1 className="text-5xl text-center font-bold">All Sellers</h1>
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
									<button
										onClick={() => handleDeleteUser(seller)}
										className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">
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
