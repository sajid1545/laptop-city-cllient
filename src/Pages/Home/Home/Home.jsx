import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Advertisement from '../Advertisement/Advertisement';
import Categories from '../Categories/Categories';
import HomeBanner from '../HomeBanner/HomeBanner';
import LaptopCityInfo from '../LaptopCityInfo/LaptopCityInfo';


const Home = () => {
	// const { data: advertisements = [], isLoading } = useQuery({
	// 	queryKey: [],
	// 	queryFn: () =>
	// 		fetch('https://assignment-12-server-pi.vercel.app/display-home-product', {
	// 			headers: {
	// 				authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
	// 			},
	// 		}).then((res) => res.json()),
	// });

	return (
		<div>
			<HomeBanner />
			<LaptopCityInfo />
			<Advertisement />
			{/* <Slider advertisements={advertisements} isLoading={ isLoading} /> */}
			{/* <ImageSlider advertisements={advertisements} /> */}
			<Categories />
			<Helmet>
				<title>Home - Laptop City </title>
			</Helmet>
		</div>
	);
};

export default Home;
