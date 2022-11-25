import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios
			.get(`https://assignment-12-server-pi.vercel.app/categories`, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
				},
			})
			.then((res) => {
				setCategories(res.data);
			});
	}, []);

	return (
		<div>
			<div>
				
				<h1 className="text-5xl font-extrabold text-center ">Get your Desired Laptops Today</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-8">
				{categories.map((category) => (
					<CategoriesCard key={category._id} category={category} />
				))}
			</div>
		</div>
	);
};

export default Categories;
