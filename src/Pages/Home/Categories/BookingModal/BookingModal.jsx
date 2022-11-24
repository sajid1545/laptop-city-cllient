import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const BookingModal = ({ purchaseProduct, setPurchaseProduct }) => {
	const { user } = useContext(AuthContext);
	const {
		productsName,
		picture,
		originalPrice,
		resellPrice,
		location,
		productCondition,
		yearsUsed,
		postedTime,
		userName,
		description,
	} = purchaseProduct;

	const handlePurchase = (event) => {
		event.preventDefault();
		const form = event.target;

		const purchase = {
			name: form.name.value,
			email: form.email.value,
			productName: form.productName.value,
			price: form.resellPrice.value,
			phone: form.phoneNumber.value,
			meetingLocation: form.meetingLocation.value,
		};

		console.log(purchase);
		setPurchaseProduct(null);
	};

	return (
		<div>
			<input type="checkbox" id="purchase-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
					<form onSubmit={handlePurchase} className="space-y-4 mt-5">
						<input
							type="text"
							name="name"
							defaultValue={user?.displayName}
							disabled
							className="input input-bordered  w-full "
						/>
						<input
							type="email"
							name="email"
							defaultValue={user?.email}
							disabled
							className="input input-bordered  w-full "
						/>
						<input
							type="text"
							name="productName"
							defaultValue={productsName}
							disabled
							className="input input-bordered  w-full "
						/>
						<div className="relative">
							<input
								type="text"
								name="resellPrice"
								defaultValue={resellPrice}
								disabled
								className="input input-bordered  w-full "
							/>
							<i className="absolute left-1 top-[12px]">৳</i>
						</div>
						<input
							type="number"
							name="phoneNumber"
							placeholder="Phone Number"
							className="input input-bordered  w-full "
						/>
						<input
							type="text"
							name="meetingLocation"
							placeholder="Meeting Location"
							className="input input-bordered  w-full "
						/>

						<input
							type="submit"
							value="Purchase"
							// onClick={() => setPurchaseProduct(null)}
							className="w-full block mx-auto  py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
						/>
					</form>
					<div className="modal-action">
						<label htmlFor="purchase-modal" className="btn">
							Yay!
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;
