import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisementCard from './AdvertisementCard';

const Advertisement = () => {
	const { data: advertisements = [], isLoading } = useQuery({
		queryKey: ['advertisements'],
		queryFn: () =>
			fetch('https://assignment-12-server-pi.vercel.app/display-home-product', {
				headers: {
					authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
				},
			}).then((res) => res.json()),
	});
	return (
		<div className="w-[90%] mx-auto">
			{advertisements.length > 0 && (
				<>
					<h1 className="text-center font-extrabold text-5xl ">
						SELL YOUR <span className="text-[#00A4CF]">LAPTOP</span> FOR QUICK CASH
					</h1>
					<hr className="border-4 mt-2 w-2/4 mx-auto  border-[#00A4CF]" />
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-7 mx-auto my-10 ">
						{advertisements.map(
							(advertise) =>
								advertise.productStatus &&
								!advertise.paid && <AdvertisementCard key={advertise._id} advertise={advertise} />
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default Advertisement;
