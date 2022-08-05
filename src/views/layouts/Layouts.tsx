import React from 'react';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import Main from './Main';

const Layouts = () => {
	return (
		<>
			<Header />
			<main>
				<Main />
			</main>
			<Footer />
		</>
	);
};

export default Layouts;
