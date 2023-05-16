import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import BookingModal from '../Categories/BookingModal/BookingModal';

const AdvertisementCard = ({ advertise }) => {
	const { theme } = useContext(AuthContext);
	const [purchaseProduct, setPurchaseProduct] = useState(null);

	return (
		<div>
			<div className="max-w-xs mx-auto cursor-pointer  rounded-md shadow-md bg-gray-900 text-gray-100 ">
				<img
					src={advertise.picture}
					alt=""
					className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
				/>
				<div className="flex flex-col justify-between p-6 space-y-8">
					<div className="space-y-2">
						<h2 className="text-xl font-semibold tracking-wide">{advertise.productsName}</h2>
					</div>

					<div className="relative">
						<label
							htmlFor="purchase-modal"
							onClick={() => setPurchaseProduct(advertise)}
							className={`w-2/4 text-center mt-10 block mx-auto  py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 cursor-pointer
								btn-primary ${theme ? 'btn-primary' : ''}`}>
							Book Now
						</label>
					</div>
				</div>
			</div>
			{purchaseProduct !== null && (
				<BookingModal purchaseProduct={advertise} setPurchaseProduct={setPurchaseProduct} />
			)}
		</div>
	);
};

export default AdvertisementCard;
