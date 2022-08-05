import React from 'react';
import { Button, Offcanvas, Table } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add_to_cart, decrease_qty } from '../../../redux/actions/cartAction';

const Header = () => {
	const [showCart, setShowCart] = useState(false);
	const handleShow = () => {
		setShowCart(!showCart);
	};
	const data = useSelector((state: IRootState) => state.cart);
	const dispatch = useDispatch();

	return (
		<>
			<header>
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand href="#home">
							React-Bootstrap
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ms-auto">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/cart">Cart</Nav.Link>
								<Button variant="primary" onClick={handleShow}>
									Launch
								</Button>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>

			<Offcanvas show={showCart} onHide={handleShow} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th></th>
								<th>Name</th>
								<th>Price</th>
								<th>QTY</th>
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
											<h4 className="mincart__item-title">
												{item.title}
											</h4>
										</td>
										<td>${item.price}</td>
										<td>
											<button
												onClick={() =>
													dispatch(decrease_qty(item))
												}
											>
												-
											</button>
											<span className="cartQty">
												{item.qty!}
											</span>
											<button
												onClick={() =>
													dispatch(add_to_cart(item))
												}
											>
												+
											</button>
										</td>
									</tr>
								</tbody>
							))}
					</Table>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default Header;
