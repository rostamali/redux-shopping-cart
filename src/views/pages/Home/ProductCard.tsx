import React from 'react';
import { BsCartCheck } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../../redux/actions/cartAction';

const ProductCard = ({ product }: { product: IProduct }) => {
	const dispatch = useDispatch();

	return (
		<>
			<div className="col-lg-4 col-md-6 col-12 mb-4">
				<div className="singleCard">
					<div className="product__thumbnail--wrapper">
						<img
							src={product.image}
							alt={product.title}
							className="product__thumbnail"
						/>
					</div>
					<h1 className="product__title">{product.title}</h1>
					<p className="product__price">${product.price}</p>

					<div className="singleProduct__overly">
						<button
							className="productBtn"
							onClick={() =>
								dispatch(add_to_cart(product as IProduct))
							}
						>
							<BsCartCheck />
						</button>
						<button className="productBtn">
							<AiOutlineEye />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
