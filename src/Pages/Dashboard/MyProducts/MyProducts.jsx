import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {
	const { user } = useContext(AuthContext);

	const { data: sellerProducts = [], isLoading } = useQuery({
		queryKey: ['sellerProducts'],
		queryFn: () =>
			fetch(`http://localhost:5000/seller-products?email=${user?.email}`, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
				},
			}).then((res) => res.json()),
	});

	return (
		<div>
			<h1 className='text-4xl text-center font-bold mb-5'>My Added products</h1>

			<div className="overflow-x-auto">
				<table className="table w-[85%] mx-auto">
					<thead>
						<tr>
							<th></th>
							<th>Picture</th>
							<th>Product Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{sellerProducts.map((product, i) => (
							<tr key={product._id}>
								<th>{i + 1}</th>
								<td>
									<div className="avatar">
										<div className="w-24 rounded-full">
                                            <img src={ product.picture } alt='product' />
										</div>
									</div>
								</td>
								<td>{product.productsName}</td>
								<td>{product.resellPrice}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyProducts;
