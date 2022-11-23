import React from 'react';
import { FadeLoader } from 'react-spinners';

const SmallSpinner = () => {
	return (
		<div className="flex justify-center">
			<FadeLoader color="#36d7b7" />
		</div>
	);
};

export default SmallSpinner;
