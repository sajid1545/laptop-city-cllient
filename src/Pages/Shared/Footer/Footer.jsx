import React from 'react';
import logo from '../../../Assets/Images/logo.jpg';
import { FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<div>
			<footer className="p-24 mt-24 rounded  bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
				<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0 text-center">
					<div className="flex items-center flex-row pr-3 space-x-4 sm:space-x-8">
						<img src={logo} className="rounded" alt="" />
					</div>
					<div className="text-xl font-bold">
						<h1>All rights reserved to Laptop City</h1>
					</div>
					<ul className="flex flex-col gap-3 flex-wrap pl-3 space-x-4 sm:space-x-8">
						<div>
							<h1 className="text-center">You can find about us</h1>
						</div>
						<div className="flex gap-4">
							<li className="hover:scale-110 duration-500">
								<a href="https://www.google.com/">
									<FaGoogle className="text-4xl" />
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
