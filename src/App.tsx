import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Appointment from './pages/Appointment';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Appointment />} />
				{/* <Route path="about" element={< />} /> */}
			</Routes>
		</div>
	);
}

export default App;
