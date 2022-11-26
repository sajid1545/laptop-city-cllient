import React from 'react';
import { FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../../Assets/Images/logo.jpg';

const Footer = () => {
	return (
		<div>
			<footer className="p-24 mt-24 rounded bg-gray-900   text-white">
				<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0 text-center">
					<div className="flex items-center flex-row pr-3 space-x-4 sm:space-x-8">
						<img src={logo} className="rounded" alt="" />
					</div>
					<div className="text-xl font-bold">
						<h1>© Copyright 2022. All Rights Reserved to Laptop City</h1>
					</div>
					<ul className="flex flex-col justify-center items-center gap-3 flex-wrap pl-3 space-x-4 sm:space-x-8">
						<div>
							<h1 className="text-center text-lg">You can contact about us</h1>
						</div>
						<div className="grid grid-cols-3 place-items-center">
							<li className="hover:scale-110 duration-500">
								<a href="https://www.google.com/">
									<FaGoogle className="text-4xl mr-3" />
								</a>
							</li>
							<li className="hover:scale-110 duration-500">
								<a href="https://twitter.com/home">
									<FaTwitter className="text-4xl" />
								</a>
							</li>
							<li className="hover:scale-110 duration-500">
								<a href="https://www.instagram.com/">
									<FaInstagram className="text-4xl" />
								</a>
							</li>
						</div>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
