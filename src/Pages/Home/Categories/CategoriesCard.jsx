import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
	const { picture, title, _id } = category;

	return (
		<Link to={`/category/${_id}`}>
			<div
				data-aos="zoom-in"
				className="card w-96 h-[300px] mx-auto hover:shadow-[#00A4CF] shadow-xl  image-full">
				<figure>
					<img src={picture} alt="Shoes" />
				</figure>
				<div className="card-body flex justify-center items-center h-full">
					<h2 className="card-title text-gray-200 font-bold text-6xl ">{title}</h2>
				</div>
			</div>
		</Link>
	);
};

export default CategoriesCard;
