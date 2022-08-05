import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';

const Main = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Main;
