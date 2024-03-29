import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import LargeSpinner from '../../Shared/Spinners/LargeSpinner';

const MyOrders = () => {
	const { user, theme } = useContext(AuthContext);
	const {
		data: bookedProducts = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['bookedProducts', user?.email],
		queryFn: () =>
			fetch(`https://assignment-12-server-pi.vercel.app/book-product?email=${user?.email}`, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
				},
			}).then((res) => res.json()),
	});

	if (isLoading) {
		return <LargeSpinner />;
	}

	return (
		<div>
			<Helmet>
				<title> My Orders - Laptop City </title>
			</Helmet>
			<h1 className="text-4xl font-bold mb-4 text-center">My orders</h1>

			<div className="overflow-hidden w-[85%] mx-auto overflow-x-auto rounded-lg border border-gray-200">
				<table className="min-w-full  divide-y divide-gray-200 text-sm">
					<thead className="bg-gray-100">
						<tr>
							<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
								<div className="flex items-center gap-2">Image</div>
							</th>
							<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
								<div className="flex items-center gap-2">Title</div>
							</th>
							<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
								<div className="flex items-center gap-2">Price</div>
							</th>
							<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
								Status
							</th>
						</tr>
					</thead>

					<tbody className="divide-y divide-gray-200">
						{bookedProducts.map((product) => (
							<tr key={product._id}>
								<td className="whitespace-nowrap px-4 py-2 ">
									<div className="avatar">
										<div className="w-20 rounded-full">
											<img src={product.picture} alt="" />
										</div>
									</div>
								</td>
								<td className="whitespace-nowrap px-4 py-2 ">{product.productName}</td>
								<td className="whitespace-nowrap px-4 py-2 ">৳{product.price}</td>

								{!product.paid && (
									<td>
										<Link to={`/dashboard/payment/${product._id}`}>
											<button className=" px-8  py-3 font-medium  text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
												Pay
											</button>
										</Link>
									</td>
								)}

								{product.paid && (
									<td
										className={`${
											theme ? 'text-green-500' : 'text-green-700'
										}  text-2xl mt-7  font-extrabold`}>
										Paid
									</td>
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyOrders;
