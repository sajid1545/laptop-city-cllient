import React from 'react';
import laptopInfoBanner from '../../../Assets/Images/laptopCityInfo.jpg';

const LaptopCityInfo = () => {
	return (
		<div className="hero my-10">
			<div className="hero-content flex-col text-center md:text-left gap-10 md:gap-20 lg:flex-row  ">
				<img src={laptopInfoBanner} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
				<div className="lg:w-1/2">
					<p className="py-6 text-2xl">
						Laptop City processes 1,000s of laptops per month. We are proud of our emphasis on high
						quality, tested and working products. Our business thrives on the basis of these
						principles of integrity, as we want our customers to be pleased with our products. We
						understand that our success depends on your repeat business.
					</p>
				</div>
				
			</div>
		</div>
	);
};

export default LaptopCityInfo;
