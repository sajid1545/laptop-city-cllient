import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const AddProducts = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const { user } = useContext(AuthContext);

	const { data: categories = [] } = useQuery({
		queryKey: ['categories'],
		queryFn: () => fetch(`http://localhost:5000/categories`).then((res) => res.json()),
	});


	const time = new Date();
	format(time, 'pp');
	const formattedTime = time.toLocaleTimeString();

	const handleAddProduct = (data) => {
		const product = {
			productsName: data.productName,
			picture: data.picture,
			originalPrice: data.originalPrice,
			resellPrice: data.resellPrice,
			mobileNumber: data.mobileNumber,
			location: data.location,
			productCondition: data.condition,
			yearsUsed: data.yearsUsed,
			postedTime: formattedTime,
			userName: user?.displayName,
			description: data.description,
		};

		console.log(product);
	};

	return (
		<div>
			<h1 className="text-5xl font-bold text-center">Add Product</h1>

			<div className="mt-10">
				<div className="flex flex-col max-w-screen-lg mx-auto   p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
					<form onSubmit={handleSubmit(handleAddProduct)} className="space-y-12 ">
						<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
							<div className="col-span-full sm:col-span-3 mb-5">
								<label className="block mb-2 text-sm">Product Name</label>
								<input
									placeholder="Product Name"
									type="text"
									{...register('productName', { required: 'Product name  is required' })}
									className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
								/>
								{errors.productName && (
									<p className="text-red-600">{errors.productName?.message}</p>
								)}
							</div>
							<div className="col-span-full sm:col-span-3 ">
								<label className="block mb-2 text-sm">Product Image</label>
								<input
									type="text"
									{...register('picture', { required: 'Picture is required' })}
									placeholder="Product Image"
									className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
								/>
								{errors.picture && <p className="text-red-600">{errors.picture?.message}</p>}
							</div>

							<div className="col-span-full sm:col-span-2">
								<label className="block mb-2 text-sm">Product Original Price</label>
								<input
									type="number"
									{...register('originalPrice', { required: 'Product Original Price is required' })}
									className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
								/>
								{errors.originalPrice && (
									<p className="text-red-600">{errors.originalPrice?.message}</p>
								)}
							</div>

							<div className="col-span-full sm:col-span-2">
								<label className="block mb-2 text-sm">Product Resell Price</label>
								<input
									type="number"
									{...register('resellPrice', { required: 'Product Original Price is required' })}
									className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
								/>
								{errors.resellPrice && (
									<p className="text-red-600">{errors.resellPrice?.message}</p>
								)}
							</div>

							<div className="col-span-full sm:col-span-2">
								<label className="block mb-2 text-sm">Product Condition</label>
								<select
									{...register('condition', { required: 'Product condition must be selected' })}
									defaultValue={'excellent'}
									className="select select-primary w-full  px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100">
									<option>Excellent</option>
									<option>Good</option>
									<option>Fair</option>
								</select>
								{errors.condition && <p className="text-red-600">{errors.condition?.message}</p>}
							</div>

							<div className="col-span-full sm:col-span-2">
								<label className="block mb-2 text-sm">Mobile Number</label>
								<input
									type="number"
									{...register('mobileNumber', { required: 'Mobile Number  is required' })}
									className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
								/>
								{errors.mobileNumber && (
									<p className="text-red-600">{errors.mobileNumber?.message}</p>
								)}
							</div>

							<div className="col-span-full sm:col-span-2">
								<label className="block mb-2 text-sm">Location</label>
								<input
									type="text"
									{...register('location', { required: 'Location is required' })}
									className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
								/>
								{errors.location && <p className="text-red-600">{errors.location?.message}</p>}
							</div>

							<div className="col-span-full sm:col-span-2">
								<label className="block mb-2 text-sm">Years Used</label>
								<input
									type="number"
									{...register('yearsUsed', { required: 'Years Used is required' })}
									className="w-full input-primary px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
								/>
								{errors.yearsUsed && <p className="text-red-600">{errors.yearsUsed?.message}</p>}
							</div>

							<div className="col-span-full sm:col-span-3">
								<label className="block mb-2 text-sm">Description</label>

								<textarea
									{...register('description', { required: 'Description is required' })}
									className="textarea textarea-primary w-full  px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"></textarea>
								{errors.description && (
									<p className="text-red-600">{errors.description?.message}</p>
								)}
							</div>
							{/* <div className="col-span-full sm:col-span-3">
								<label className="block mb-2 text-sm">Description</label>

								<select
									{...register('condition', { required: 'Product condition must be selected' })}
									defaultValue={'excellent'}
									className="select select-primary w-full  px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100">
									{categories.map((category) => {
										// setCategoryId(category.id);
										return <option value={category.title}>{category.title}</option>;
									})}

									
								</select>
								{errors.description && (
									<p className="text-red-600">{errors.description?.message}</p>
								)}
							</div> */}
						</div>

						<div className="space-y-2">
							<div>
								<button
									type="submit"
									className="w-2/4 block mx-auto px-8 py-3 font-semibold rounded-md btn-primary text-white duration-500 ">
									Add Product
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProducts;
