import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import store, { persistor } from './redux/store';

import Layouts from './views/layouts/Layouts';

function App() {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Layouts />
				</PersistGate>
			</Provider>
		</>
	);
}

export default App;
