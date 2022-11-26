import React from 'react';

const AdvertisementCard = ({advertise}) => {
	return (
		<div>
			<div className="max-w-xs cursor-pointer h-[400px] rounded-md shadow-md bg-gray-900 text-gray-100 ">
				<img
					src={advertise.picture}
					alt=""
					className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
				/>
				<div className="flex flex-col justify-between p-6 space-y-8">
					<div className="space-y-2">
                        <h2 className="text-xl font-semibold tracking-wide">{ advertise.productsName }</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdvertisementCard;
