import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
	'pk_test_51M5sZMJ1bKgZ3xnxaq4XegoVudlloIegfR5oeqRyH6kHD3yLWPSWczbtH6cBqfZdYoBGNJMSTHms93nyfVT4UnxO00n0GZiWLJ'
);

const Payment = () => {
	const product = useLoaderData();

	const { name, productName, price } = product;

	return (
		<div className="w-[85%] mx-auto mt-10">
			<div>
				<h1 className="text-4xl font-extrabold text-center">Pay for you Product</h1>
				<h1 className="text-center text-xl font-bold mt-3">
					Congratulations {name} for buying{' '}
					<span className="text-[#00A4CF] font-extrabold text-2xl">{productName} </span>
					at a reasonable price of <span className="text-green-700">৳{price}</span> taka
				</h1>
			</div>

			<div className='my-20'>
				<Elements stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
