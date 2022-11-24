import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import LargeSpinner from '../../Shared/Spinners/LargeSpinner';

const Slider = ({ advertisements, isLoading }) => {
	if (isLoading) {
		return <LargeSpinner />;
	}

	const AutoplaySlider = withAutoplay(AwesomeSlider);
	return (
		<div>
			{advertisements.length !== 0 && (
				<div className="p-0 md:p-28  rounded mx-auto">
					<AutoplaySlider
						animation="cubeAnimation"
						play={true}
						cancelOnInteraction={false}
						interval={5000}>
						{advertisements.map(
							(advertisement) =>
								advertisement.productStatus &&
								!advertisement.paid && (
									<div key={advertisement._id} className="text-white space-y-5 text-center">
										<h1 className="text-5xl font-extrabold text-white ">
											{advertisement.productsName}
										</h1>
										<h2>{advertisement.description}</h2>
										<img
											src={advertisement.picture}
											alt=""
											className="block mx-auto rounded-full"
										/>
									</div>
								)
						)}
					</AutoplaySlider>
				</div>
			)}
		</div>
	);
};

export default Slider;
