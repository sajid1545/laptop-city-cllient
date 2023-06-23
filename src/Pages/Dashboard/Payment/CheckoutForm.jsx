import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import SmallSpinner from '../../Shared/Spinners/SmallSpinner';

const CheckoutForm = ({ product }) => {
	const { price, email, name, phone, _id, productId } = product;

	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState('');
	const [success, setSuccess] = useState('');
	const [transactionId, setTransactionId] = useState('');
	const [load, setLoad] = useState(false);

	const [clientSecret, setClientSecret] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		fetch('https://assignment-12-server-pi.vercel.app/create-payment-intent', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ price }),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [price]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			console.log('[error]', error);
			setCardError(error.message);
		} else {
			console.log('[PaymentMethod]', paymentMethod);
			setCardError('');
		}

		setSuccess('');
		setLoad(true);
		const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: card,
				billing_details: {
					email: email,
					name: name,
				},
			},
		});

		if (confirmError) {
			setCardError(confirmError.message);
		}

		console.log(paymentIntent);
		if (paymentIntent.status === 'succeeded') {
			setSuccess('Payment Successful');
			setTransactionId(paymentIntent.id);

			const payment = {
				email: email,
				price: price,
				transactionId: paymentIntent.id,
				phone: phone,
				productId: productId,
			};

			fetch('https://assignment-12-server-pi.vercel.app/payments', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('laptop-city-token')}`,
				},
				body: JSON.stringify(payment),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.acknowledged) {
						toast.success('Payment Successful');
						const timeoutID = setInterval(() => {
							navigate('/dashboard/myOrders');
						}, 2500);

						return () => clearTimeout(timeoutID); // Clearing timeOut to avoid memory leaks
					}
				});
		}
		setLoad(false);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				{load ? (
					<SmallSpinner />
				) : (
					<button
						className="py-3 px-12 w-1/4 block my-5 mx-auto bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
						type="submit"
						disabled={!stripe || !clientSecret}>
						Pay
					</button>
				)}
			</form>

			<div className="mt-10">
				<p className="text-red-600 font-bold text-center text-2xl">{cardError}</p>
			</div>

			{success && (
				<div className="text-center">
					<p className="text-green-600 font-bold text-xl">{success}</p>
					<p className="text-2xl font-bold">Your Transaction Id : {transactionId}</p>
				</div>
			)}
		</div>
	);
};

export default CheckoutForm;
