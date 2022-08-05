import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import {
	decrease_qty,
	remove_from_cart,
} from '../../../redux/actions/cartAction';
import { add_to_cart } from '../../../redux/actions/cartAction';
import { useSelector } from 'react-redux';

const CartItem = () => {
	const data = useSelector((state: IRootState) => state.cart);
	const dispatch = useDispatch();

	return (
		<>
			<div className="cartItems">
				<div className="container">
					<div className="cartItemWrapper">
						<Table striped bordered hover>
							<thead>
								<tr>
									<th></th>
									<th>Name</th>
									<th>Price</th>
									<th>QTY</th>
									<th>Action</th>
								</tr>
							</thead>
							{data &&
								data.map((item, index) => (
									<tbody key={index}>
										<tr>
											<td>
												<img
													src={item.image}
													alt={item.title}
													className="cart__item-thumbnail"
												/>
											</td>
											<td>
												<h4 className="cart__item-title">
													{item.title}
												</h4>
											</td>
											<td>${item.price}</td>
											<td>
												<button
													onClick={() =>
														dispatch(
															decrease_qty(item)
														)
													}
												>
													-
												</button>
												<span>{item.qty!}</span>
												<button
													onClick={() =>
														dispatch(
															add_to_cart(item)
														)
													}
												>
													+
												</button>
											</td>
											<td>
												<Button
													variant="danger"
													onClick={() =>
														dispatch(
															remove_from_cart(
																item.id
															)
														)
													}
												>
													<AiOutlineDelete />
												</Button>
											</td>
										</tr>
									</tbody>
								))}
						</Table>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;
