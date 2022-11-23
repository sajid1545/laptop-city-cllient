import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:5000/categories`).then((res) => {
			setCategories(res.data);
		});
	}, []);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-8">
			{categories.map((category) => (
				<CategoriesCard key={category._id} category={category} />
			))}
		</div>
	);
};

export default Categories;
