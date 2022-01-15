import React from "react";
import { Routes, Route } from "react-router";
import Appointment from "./pages/Appointment";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Appointment />} />
			</Routes>
		</div>
	);
}

export default App;
