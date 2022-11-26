import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LargeSpinner from '../../Shared/Spinners/LargeSpinner';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
	const [categories, setCategories] = useState([]);

	const [load, setLoad] = useState(false);

	useEffect(() => {
		setLoad(true);
		axios
			.get(`https://assignment-12-server-pi.vercel.app/categories`, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
				},
			})
			.then((res) => {
				setCategories(res.data);
				setLoad(false);
			});
	}, []);

	if (load) {
		return <LargeSpinner />;
	}

	return (
		<div className="mt-5">
			<div>
				<h1 className="text-center font-extrabold text-5xl ">
					Refurbished<span className="text-[#00A4CF]"> LAPTOPS</span> collection
				</h1>
				<hr className="border-4 mt-2 w-2/4 mx-auto  border-[#00A4CF]" />
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
