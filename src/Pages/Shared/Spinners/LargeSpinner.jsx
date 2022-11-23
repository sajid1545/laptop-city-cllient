import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LargeSpinner = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<PacmanLoader color="#6419E6" />
		</div>
	);
};

export default LargeSpinner;
