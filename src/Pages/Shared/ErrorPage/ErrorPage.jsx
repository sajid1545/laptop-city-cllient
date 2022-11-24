import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './errorPage.css';

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div>
			<div className="grid h-screen px-4 bg-white place-content-center errorPage">
				<div className="text-center">
					<p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

					<p className="mt-4 text-gray-500">We can't find that page.</p>

					<Link to={'/'}>
						<button className="py-3 px-14 mt-10  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
							Go Back Home
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
