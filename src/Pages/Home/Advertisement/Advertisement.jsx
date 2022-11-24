import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisementCard from './AdvertisementCard';

const Advertisement = () => {
	const { data: advertisements = [], isLoading } = useQuery({
		queryKey: [],
		queryFn: () =>
			fetch('http://localhost:5000/display-home-product', {
				headers: {
					authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
				},
			}).then((res) => res.json()),
	});
	return (
		<div>
			{advertisements.length > 0 && (
				<>
					<h1 className="text-5xl font-extrabold text-center ">Get your Desired Laptops Today</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-y-7 mx-auto my-10 ">
						{advertisements.map(
							(advertise) =>
								advertise.productStatus &&
								!advertise.paid && <AdvertisementCard advertise={advertise} />
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default Advertisement;
