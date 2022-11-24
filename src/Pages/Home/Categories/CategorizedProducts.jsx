import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategorizedProductCard from './CategorizedProductCard';

const CategorizedProducts = () => {
	const products = useLoaderData();
	// console.log(products);

	

	return (
		<div>
			<h1 className="text-5xl text-center font-bold">Choose your desired Laptops </h1>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10 place-items-center'>
				{products.map((product) => (
					<CategorizedProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};

export default CategorizedProducts;
