import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState('');
	const [success, setSuccess] = useState('');
	const [transactionId, setTransactionId] = useState('');
	const [load, setLoad] = useState(false);

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
            setCardError(error.message)
		} else {
			console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
		}
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
				<button
					className="py-3 px-12 w-1/4 block my-5 mx-auto bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
					type="submit"
					disabled={!stripe}>
					Pay
				</button>
			</form>

            <div className='mt-10'>
            <p className="text-red-600 font-bold text-center text-2xl">{cardError}</p>
            </div>
		</div>
	);
};

export default CheckoutForm;
