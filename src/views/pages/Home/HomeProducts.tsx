import React from 'react';
import useApi from '../../../hooks/useApi';
import ProductService from '../../../http/ProductService';
import ProductCard from './ProductCard';

const HomeProducts = () => {
	const { data: products, isLoading } = useApi<IProduct[]>(
		ProductService.getAllData
	);

	return (
		<>
			<div className="productWrapper">
				<div className="container">
					<div className="row">
						{isLoading ? (
							<h1>Loading...</h1>
						) : (
							products?.map((item, index) => (
								<ProductCard key={index} product={item} />
							))
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeProducts;
