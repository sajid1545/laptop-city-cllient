import React from 'react';
import Categories from '../Categories/Categories';
import HomeBanner from '../HomeBanner/HomeBanner';
import LaptopCityInfo from '../LaptopCityInfo/LaptopCityInfo';

const Home = () => {
	return (
		<div>
			<HomeBanner />
			<LaptopCityInfo />
			<Categories />
		</div>
	);
};

export default Home;
