import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LargeSpinner from '../../Shared/Spinners/LargeSpinner';

const AllSellers = () => {
	const { data: allSellers = [], isLoading } = useQuery({
		queryKey: ['allSellers'],
		queryFn: () => fetch('http://localhost:5000/all-sellers').then((res) => res.json()),
	});

	if (isLoading) {
		return <LargeSpinner />;
	}

	return (
        <div>
            <h1 className='text-4xl text-center font-bold' >All Sellers</h1>
			<div className="overflow-x-auto w-[85%] mx-auto mt-5">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<td>Cy Ganderton</td>
							<td>Quality Control Specialist</td>
							<td>Blue</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllSellers;
