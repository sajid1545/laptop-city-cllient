import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Categories from '../Categories/Categories';
import HomeBanner from '../HomeBanner/HomeBanner';
import LaptopCityInfo from '../LaptopCityInfo/LaptopCityInfo';
import Slider from '../Slider/Slider';

const Home = () => {

	// const { data: advertisements = [], isLoading } = useQuery({
	// 	queryKey: [],
	// 	queryFn: () =>
	// 		fetch('http://localhost:5000/display-home-product', {
	// 			headers: {
	// 				authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
	// 			},
	// 		}).then((res) => res.json()),
	// });


	

	return (
		<div>
			<HomeBanner />
			<LaptopCityInfo />
			<Advertisement/>
			{/* <Slider advertisements={advertisements} isLoading={ isLoading} /> */}
			<Categories />
		</div>
	);
};

export default Home;
