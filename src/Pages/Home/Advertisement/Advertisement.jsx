import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisementCard from './AdvertisementCard';
import './advertisement.css';

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
		<div className="">
			{advertisements.length > 0 && (
				<>
					<h1 className="text-center font-extrabold text-5xl ">
						Purchase or Sell refurbished<span className="text-[#00A4CF]"> LAPTOPS</span>
					</h1>
					<hr className="border-4 mt-2 w-2/4 mx-auto  border-[#00A4CF]" />
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7  my-20 advertise-banner px-10 py-24 rounded-xl place-content-center ">
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
