import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const CategorizedProductCard = ({ product, setPurchaseProduct, products }) => {
	const { user } = useContext(AuthContext);

	// const [refresh, setRefresh] = useState([]);

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
		userPhoto,
		paid,
		_id,
		reported,
	} = product;

	const [report, setReport] = useState(product.reported);

	useEffect(() => {
		setReport(report);
	}, [report]);

	const handleReportToAdmin = (product) => {
		console.log(product);
		fetch(`http://localhost:5000/reported-items/${product._id}`, {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					const remaining = products.filter((p) => p.reported !== product.reported);
					setReport(remaining);
					toast.success(`${product.productsName} has been reported to Admin`);
				}
			});
	};

	return (
		<div>
			<div className="max-w-xl h-[750px] space-y-5 p-4 shadow-md bg-gray-900 text-gray-100 rounded-xl">
				<div className="flex space-x-4 items-center justify-between">
					<div className="flex items-center gap-3">
						<img
							alt=""
							src={userPhoto}
							className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
						/>
						<div className="flex flex-col space-y-1">
							<span className="text-sm font-semibold">{userName}</span>
							<span className="text-xs text-gray-400">{postedTime}</span>
						</div>
					</div>

					<div className="flex ">
						{!report && (
							<button
								onClick={() => handleReportToAdmin(product)}
								className="py-2 px-4  bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
								Report To Admin
							</button>
						)}

						{report && <p className="text-yellow-500 font-bold">Already Reported</p>}
					</div>
				</div>
				<div className="space-y-4">
					<div className="space-y-2">
						<img
							src={picture}
							alt=""
							className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
						/>
					</div>
					<div className="space-y-2">
						<div className="block mb-7">
							<h3 className="text-xl font-semibold text-violet-500">{productsName}</h3>
						</div>
						<div className="my-3">
							{productCondition === 'Good' && (
								<span className="px-4 py-2  text-base rounded-full text-green-300  bg-green-500 ">
									{productCondition}
								</span>
							)}
							{productCondition === 'Excellent' && (
								<span className="px-4 py-2  text-base rounded-full text-green-600  bg-green-200 ">
									{productCondition}
								</span>
							)}
							{productCondition === 'Fair' && (
								<span className="px-4 py-2  text-base rounded-full text-yellow-600  bg-yellow-200 ">
									{productCondition}
								</span>
							)}
						</div>
						<div className="">
							<div className="flex gap-5 text-yellow-500 text-md mt-5">
								<h3>
									Resell Price : <span className=""> ৳ {resellPrice}</span>
								</h3>
								<h3 className="line-through">
									Original Price : <span> ৳ {originalPrice}</span>
								</h3>
							</div>
							<h3>Location : {location}</h3>
							<h3>Years Used : {yearsUsed} years</h3>
						</div>
						<p className="leading-snug text-gray-400">{description}</p>

						<div className="relative">
							<label
								htmlFor="purchase-modal"
								onClick={() => setPurchaseProduct(product)}
								className="w-2/4 text-center mt-10 block mx-auto  py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 cursor-pointer ">
								Book Now
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategorizedProductCard;
