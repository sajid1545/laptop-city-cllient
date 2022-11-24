import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import LargeSpinner from './../../Shared/Spinners/LargeSpinner';

const MyProducts = () => {
	const { user } = useContext(AuthContext);

	const {
		data: sellerProducts = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['sellerProducts', user?.email],
		queryFn: () =>
			fetch(`http://localhost:5000/seller-products?email=${user?.email}`, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
				},
			}).then((res) => res.json()),
	});

	if (isLoading) {
		return <LargeSpinner />;
	}

	// deleting product
	const handleDeleteProduct = (product) => {
		fetch(`http://localhost:5000/seller-products/${product._id}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount > 0) {
					toast.success('Delete product successfully');
					refetch();
				}
			});
	};

	// handle advertisement
	const handleAdvertise = (product) => {
		console.log(product);
		fetch(`http://localhost:5000/display-home-product/${product._id}`, {
			method: 'PUT',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					toast.success(`${product.productsName} is successfully advertised`);
					refetch();
				}
			});
	};

	return (
		<div>
			<h1 className="text-4xl text-center font-bold mb-5">My Added products</h1>

			<div className="overflow-x-auto">
				<table className="table w-[85%] mx-auto">
					<thead>
						<tr>
							<th></th>
							<th>Picture</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Action</th>
							<th>Advertise</th>
						</tr>
					</thead>
					<tbody>
						{sellerProducts.map((product, i) => (
							<tr key={product._id}>
								<th>{i + 1}</th>
								<td>
									<div className="avatar">
										<div className="w-24 rounded-full">
											<img src={product.picture} alt="product" />
										</div>
									</div>
								</td>
								<td>{product.productsName}</td>
								<td>{product.resellPrice}</td>
								<td>
									<button
										onClick={() => handleDeleteProduct(product)}
										className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">
										Delete
									</button>
								</td>

								<td>
									{!product.paid && !product.productStatus && (
										<button
											onClick={() => handleAdvertise(product)}
											className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
											Advertise
										</button>
									)}

									{product.productStatus && (
										<p className="text-green-700 font-extrabold text-xl">Advertised</p>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyProducts;
