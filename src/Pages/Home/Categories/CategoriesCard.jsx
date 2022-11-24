import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesCard.css';

const CategoriesCard = ({ category }) => {
	const { picture, title, _id } = category;

	return (
		<div className="card w-96 mx-auto  shadow-xl image-full">
			<figure>
				<img src={picture} alt="Shoes" />
			</figure>
			<div className="card-body flex justify-center items-center h-full">
				<h2 className="card-title font-bold text-6xl ">{title}</h2>
				<Link to={`/category/${_id}`}>
					<button className="px-12 py-3 btn-primary rounded hover:btn-outline mt-5">Details</button>
				</Link>
			</div>
		</div>
	);
};

export default CategoriesCard;
