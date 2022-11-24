import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import LargeSpinner from '../../Shared/Spinners/LargeSpinner';

const MyOrders = () => {
	const { user } = useContext(AuthContext);
	const { data: bookedProducts = [], isLoading } = useQuery({
		queryKey: ['bookedProducts', user?.email],
		queryFn: () =>
			fetch(`http://localhost:5000/book-product?email=${user?.email}`).then((res) => res.json()),
	});

	if (isLoading) {
		return <LargeSpinner />;
	}

	return (
		<div>
			<h1 className='text-4xl font-bold mb-4 text-center'>My orders</h1>

			<div class="overflow-hidden w-[85%] mx-auto overflow-x-auto rounded-lg border border-gray-200">
				<table class="min-w-full  divide-y divide-gray-200 text-sm">
					<thead class="bg-gray-100">
						<tr>
							<th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
								<div class="flex items-center gap-2">Image</div>
							</th>
							<th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
								<div class="flex items-center gap-2">Title</div>
							</th>
							<th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
								<div class="flex items-center gap-2">Price</div>
							</th>
							<th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
								Status
							</th>
						</tr>
					</thead>

					<tbody class="divide-y divide-gray-200">
						{bookedProducts.map((product) => (
							<tr key={product._id}>
								<td class="whitespace-nowrap px-4 py-2 text-gray-700">
									<div className="avatar">
										<div className="w-20 rounded-full">
											<img src={product.picture} alt="" />
										</div>
									</div>
								</td>
								<td class="whitespace-nowrap px-4 py-2 text-gray-700">{product.productName}</td>
								<td class="whitespace-nowrap px-4 py-2 text-gray-700">৳{product.price}</td>

								{!product.paid && (
									<td>
										<button className=" px-8  py-3 font-medium  text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
											Pay
										</button>
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
