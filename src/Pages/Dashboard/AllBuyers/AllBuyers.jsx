import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LargeSpinner from '../../Shared/Spinners/LargeSpinner';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const AllBuyers = () => {
	const {
		data: buyers = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['all-buyers'],
		queryFn: () =>
			fetch('https://assignment-12-server-pi.vercel.app/all-buyers', {
				headers: {
					authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
				},
			}).then((res) => res.json()),
	});

	if (isLoading) {
		return <LargeSpinner />;
	}

	// delete buyer

	const handleDeleteBuyer = (buyer) => {
		console.log(buyer);
		fetch(`https://assignment-12-server-pi.vercel.app/all-buyers/${buyer._id}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount > 0) {
					toast.success(`Buyer ${buyer.name} have been deleted`);
					refetch();
				}
			});
	};

	return (
		<div>
			<Helmet>
				<title> All Buyers - Laptop City </title>
			</Helmet>
			<h1 className="text-5xl text-center font-bold">All Buyers</h1>
			<div className="overflow-x-auto w-[85%] mx-auto my-10 ">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{buyers.map((buyer, i) => (
							<tr key={buyer._id}>
								<th>{i + 1}</th>
								<td>{buyer.name}</td>
								<td>{buyer.email}</td>
								<td>
									<button
										onClick={() => handleDeleteBuyer(buyer)}
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

export default AllBuyers;
