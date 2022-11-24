import React from 'react';
import { useRouteError } from 'react-router-dom';
import './errorPage.css';

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div className="error-page text-5xl">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p className="">
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};

export default ErrorPage;
