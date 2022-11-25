import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import LargeSpinner from './../../Shared/Spinners/LargeSpinner';

const ReportedProducts = () => {
	const {
		data: reportedItems = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['reportedItems'],
		queryFn: () =>
			fetch('https://assignment-12-server-pi.vercel.app/reported-items', {
				headers: {
					authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
				},
			}).then((res) => res.json()),
	});

	if (isLoading) {
		return <LargeSpinner />;
	}

	const handleDeleteReportedItem = (product) => {
		console.log(product);
		fetch(`https://assignment-12-server-pi.vercel.app/reported-items/${product._id}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount > 0) {
					toast.success(`${product.productsName} deleted successfully`);
					refetch();
				}
			});
	};

	return (
		<div>
			<h1 className="text-5xl font-bold text-center">Reported Items</h1>

			<div className="overflow-x-auto w-[85%] mx-auto my-10">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Image</th>
							<th>Product</th>
							<th>Seller Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{reportedItems.map((item, i) => (
							<tr key={item._id}>
								<th>{i + 1}</th>
								<th>
									<img
										alt=""
										className="w-12 h-12 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-violet-800 ring-offset-gray-800"
										src={item.picture}
									/>
								</th>
								<td>{item.productsName}</td>
								<td>{item.userName}</td>
								<td>
									<button
										onClick={() => handleDeleteReportedItem(item)}
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

export default ReportedProducts;
