import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LargeSpinner from '../../Shared/Spinners/LargeSpinner';
import BookingModal from './BookingModal/BookingModal';
import CategorizedProductCard from './CategorizedProductCard';

const CategorizedProducts = () => {
	const products = useLoaderData();
	const [purchaseProduct, setPurchaseProduct] = useState(null);

	const navigation = useNavigation();

	if (navigation.status === 'loading') {
		return <LargeSpinner />;
	}

	return (
		<div>
			<h1 className="text-5xl text-center font-bold">Choose your desired Laptops </h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 place-items-center">
				{products.map((product) => (
					<CategorizedProductCard
						key={product._id}
						product={product}
						setPurchaseProduct={setPurchaseProduct}
					/>
				))}
			</div>

			{purchaseProduct !== null && (
				<BookingModal purchaseProduct={purchaseProduct} setPurchaseProduct={setPurchaseProduct} />
			)}
		</div>
	);
};

export default CategorizedProducts;
