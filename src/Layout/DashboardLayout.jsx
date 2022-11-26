import React, { useContext, useState } from 'react';
import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Navbar from './../Pages/Shared/Navbar/Navbar';
import SmallSpinner from './../Pages/Shared/Spinners/SmallSpinner';
import LargeSpinner from './../Pages/Shared/Spinners/LargeSpinner';

const DashboardLayout = () => {
	const { user } = useContext(AuthContext);

	const [isSeller, isSellerLoading] = useSeller(user?.email);

	const [isAdmin, isAdminLoading] = useAdmin(user?.email);

	if (isSellerLoading || isAdminLoading) {
		return <LargeSpinner />;
	}

	return (
		<div>
			<Navbar />
			<div className="drawer drawer-mobile mt-5">
				<input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content ">
					<Outlet />
				</div>
				<div className="drawer-side">
					<label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 bg-[#E6F1F7]">
						<div className="flex flex-col justify-start items-center mt-6 -mx-2 mb-2 ">
							<img
								className="object-cover w-24 h-24 mx-2 rounded-full"
								src={user?.photoURL}
								alt="avatar"
							/>
							<h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
								{user?.displayName}
							</h4>
							<p className="divide-y-8 mx-2 mt-1 text-sm font-medium text-black  hover:underline">
								{user?.email}
							</p>

							{isAdmin && (
								<span className="px-8 mt-5 py-1  text-base rounded-full text-green-600  bg-green-200 ">
									Admin
								</span>
							)}
							{isSeller && (
								<span className="px-8 mt-5 py-1  text-base rounded-full text-green-600  bg-green-200 ">
									Seller
								</span>
							)}
							{!isSeller && !isAdmin && (
								<span className="px-8 mt-5 py-1  text-base rounded-full text-yellow-600  bg-yellow-200 ">
									Buyer
								</span>
							)}
						</div>
						<div className="divider"></div>

						{!isSeller && !isAdmin && (
							<>
								<li>
									<NavLink
										to={'/dashboard/myOrders'}
										className={`font-medium rounded-xl  hover:underline duration-500  text-lg`}>
										My Orders
									</NavLink>
								</li>
							</>
						)}
						{isSeller && !isAdmin && (
							<>
								<li>
									<NavLink
										to={'/dashboard/addProducts'}
										className="font-medium rounded-xl  hover:underline duration-500  text-lg">
										Add a Product
									</NavLink>
								</li>
								<li>
									<NavLink
										className="font-medium rounded-xl  hover:underline duration-500  text-lg"
										to={'/dashboard/myProducts'}>
										My Products
									</NavLink>
								</li>
							</>
						)}
						{isAdmin && !isSeller && (
							<>
								<li>
									<NavLink
										className="font-medium rounded-xl  hover:underline duration-500  text-lg"
										to={'/dashboard/allSellers'}>
										All sellers
									</NavLink>
								</li>
								<li>
									<NavLink
										className="font-medium rounded-xl  hover:underline duration-500  text-lg"
										to={'/dashboard/allBuyers'}>
										All buyers
									</NavLink>
								</li>
								<li>
									<NavLink
										className="font-medium rounded-xl  hover:underline duration-500  text-lg"
										to={'/dashboard/reportedItems'}>
										Reported Items
									</NavLink>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
			<ScrollRestoration />
		</div>
	);
};

export default DashboardLayout;
